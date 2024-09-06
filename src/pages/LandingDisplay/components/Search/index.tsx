import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../../../../hooks/useDebounce';
import { constructSearchParams } from '../../../../common/utils/constructParams';
import locationAxiosInstance from '../../../../app/services/locationApi';
import { SEARCH_CITY_URL } from '../../../../app/constants';
import useFetchData from '../../../../hooks/useFetchData';
import { SearchProps } from './interface';
import {
  StyledSearchIcon,
  StyledSearchInput,
  StyledSearchBar,
  StyledSearchContainer,
  StyledResultsContainer,
  StyledResultItem,
  StyledEmptyResultItem,
} from './styled';
import { NO_SEARCH_RESULTS_TEXT } from '../../../../common/constants';
import { LocationData } from '../../../../common/interfaces';

const Search: React.FC<SearchProps> = ({ userLocation }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const debouncedValue = useDebounce(query, 1000);

  const handleClick = (latitude: number, longitude: number) => {
    const queryParams = new URLSearchParams({
      latitude: latitude.toString(),
      longitude: longitude.toString(),
    }).toString();

    navigate(`/dashboard?${queryParams}`);
  };
  const params = useMemo(
    () => constructSearchParams(userLocation[0].countryCode, debouncedValue),
    [debouncedValue, userLocation],
  );
  const { data: searchResults, haveBeenCalled } = useFetchData(
    debouncedValue ? SEARCH_CITY_URL : '',
    locationAxiosInstance,
    {
      params,
    },
  );

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <StyledSearchContainer>
      <StyledSearchBar>
        <StyledSearchInput
          type="text"
          placeholder={`Search by city name in ${userLocation[0].country}`}
          onChange={onChangeHandler}
          value={query}
        />
        <StyledSearchIcon>🔍</StyledSearchIcon>
      </StyledSearchBar>
      {haveBeenCalled && query ? (
        <StyledResultsContainer>
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((item: LocationData, index: number) => (
              <StyledResultItem
                key={index}
                onClick={() => handleClick(item.latitude, item.longitude)}
              >{`${item.city}, ${item.region}`}</StyledResultItem>
            ))
          ) : (
            <StyledEmptyResultItem>{NO_SEARCH_RESULTS_TEXT}</StyledEmptyResultItem>
          )}
        </StyledResultsContainer>
      ) : null}
    </StyledSearchContainer>
  );
};
export default Search;
