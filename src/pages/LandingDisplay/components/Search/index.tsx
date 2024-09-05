import { useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import useDebounce from '../../../../common/hooks/useDebounce';
import { constructSearchParams } from '../../../../common/utils/constructParams';
import locationAxiosInstance from '../../../../app/services/locationApi';
import { SEARCH_CITY_URL } from '../../../../app/constants';
import useFetchData from '../../../../common/hooks/useFetchData';
import { SearchProps } from './interface';
import { StyledSearchIcon, StyledSearchInput, StyledSearch } from './styled';

const Search: React.FC<SearchProps> = ({ userLocation }) => {
  //   const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const debouncedValue = useDebounce(query, 1000);

  const params = useMemo(
    () => constructSearchParams(userLocation[0].countryCode, debouncedValue),
    [debouncedValue, userLocation],
  );
  const { data } = useFetchData(debouncedValue ? SEARCH_CITY_URL : '', locationAxiosInstance, {
    params,
  });

  console.log('data', data);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  //   const navigateToMain = () => {
  //     navigate('/');
  //   };
  return (
    <StyledSearch>
      <StyledSearchInput
        type="text"
        placeholder={`Search by city name in ${userLocation[0].country}`}
        onChange={onChangeHandler}
        value={query}
      />
      <StyledSearchIcon>🔍</StyledSearchIcon>
    </StyledSearch>
  );
};
export default Search;
