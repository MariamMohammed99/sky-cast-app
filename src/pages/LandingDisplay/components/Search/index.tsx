import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SEARCH_CITY_URL } from '../../../../app/services/constants';
import locationAxiosInstance from '../../../../app/services/locationAxios';
import {
  NO_SEARCH_RESULTS_TEXT,
  SEARCH_DELAY,
  SEARCH_ICON_ALT,
  SEARCH_ICON_URL,
  SEARCH_LOADING_SIZE,
  SEARCH_PLACEHOLDER,
} from '../../../../common/constants';
import { LocationData } from '../../../../common/interfaces';
import { constructSearchParams } from '../../../../common/utils/constructParams';
import useDebounce from '../../../../hooks/useDebounce';
import useFetchData from '../../../../hooks/useFetchData';
import { SearchProps } from './interface';
import {
  StyledEmptyResultItem,
  StyledResultItem,
  StyledResultsContainer,
  StyledSearchBar,
  StyledSearchContainer,
  StyledSearchImg,
  StyledSearchInput,
} from './styled';
import Loading from '../../../../common/components/Loading';

const Search: React.FC<SearchProps> = ({ userLocation }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const debouncedValue = useDebounce(query, SEARCH_DELAY);
  const [searchResults, setSearchResults] = useState<LocationData[] | undefined>(undefined);

  const params = useMemo(
    () => constructSearchParams(userLocation.countryCode, debouncedValue),
    [debouncedValue, userLocation.countryCode],
  );

  const { data, loading } = useFetchData(
    debouncedValue && query ? SEARCH_CITY_URL : '',
    locationAxiosInstance,
    { params },
    true,
  );

  useEffect(() => {
    setSearchResults(data);
  }, [data]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    if (!event.target.value) setSearchResults(undefined);
  };

  const handleClick = (latitude: number, longitude: number) => {
    const queryParams = new URLSearchParams({
      latitude: latitude.toString(),
      longitude: longitude.toString(),
    }).toString();

    navigate(`/dashboard?${queryParams}`);
  };

  return (
    <StyledSearchContainer>
      <StyledSearchBar>
        <StyledSearchInput
          type="text"
          placeholder={SEARCH_PLACEHOLDER.replace('{{country}}', userLocation.country)}
          onChange={onChangeHandler}
          value={query}
        />

        <StyledSearchImg src={SEARCH_ICON_URL} alt={SEARCH_ICON_ALT} />
      </StyledSearchBar>

      {loading ? (
        <StyledResultsContainer>
          <Loading size={SEARCH_LOADING_SIZE} />
        </StyledResultsContainer>
      ) : (
        debouncedValue &&
        query &&
        searchResults && (
          <StyledResultsContainer>
            {searchResults.length > 0 ? (
              searchResults.map((item: LocationData) => (
                <StyledResultItem
                  key={`${item.latitude}-${item.longitude}`}
                  onClick={() => handleClick(item.latitude, item.longitude)}
                >
                  {`${item.city}, ${item.region}`}
                </StyledResultItem>
              ))
            ) : (
              <StyledEmptyResultItem>{NO_SEARCH_RESULTS_TEXT}</StyledEmptyResultItem>
            )}
          </StyledResultsContainer>
        )
      )}
    </StyledSearchContainer>
  );
};

export default Search;
