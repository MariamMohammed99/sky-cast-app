import { useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import useDebounce from '../../../../common/hooks/useDebounce';
import { constructSearchParams } from '../../../../common/utils/constructParams';
import locationAxiosInstance from '../../../../app/services/locationApi';
import { SEARCH_CITY_URL } from '../../../../app/constants';
import useFetchData from '../../../../common/hooks/useFetchData';
import { SearchProps } from './interface';
import { StyledSearchIcon, StyledSearchInput, StyledSearchBar, StyledSearchContainer, StyledResultsContainer, StyledResultItem } from './styled';

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
    <StyledResultsContainer>
        <StyledResultItem>No results found hjbhjb jhbjhbhj hbjhbj hbhb vghbhb hvbhv njh hbhbh bhbh hbhb bhbh bhbh </StyledResultItem>
        <StyledResultItem>No results found</StyledResultItem>
        <StyledResultItem>No results found</StyledResultItem>
        <StyledResultItem>No results found</StyledResultItem>
        <StyledResultItem>No results found</StyledResultItem>

    </StyledResultsContainer>
    </StyledSearchContainer>
  );
};
export default Search;
