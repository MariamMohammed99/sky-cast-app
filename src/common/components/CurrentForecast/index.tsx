import { useMemo } from 'react';
import { DAY_COLOR, FEELS_LIKE, NIGHT_COLOR, TODAY_TEXT, TONIGHT_TEXT } from '../../constants';
import { CurrentForecastProps, SummaryData } from './interface';
import {
  StyledCurrentForecastContent,
  StyledCurrentForecastWrapper,
  StyledWeatherColumnWrapper,
  StyledImageWrapper,
  StyledImg,
  StyledParagraph,
  StyledTemperature,
  StyledTitleForecast,
  StyledWeatherDetails,
  StyledWeekName,
  StyledWeatherTitleWrapper,
  StyledSummaryWrapper,
} from './styled';

const CurrentForecast: React.FC<CurrentForecastProps> = ({
  image,
  description,
  temp,
  weekName,
  isDayTime,
  feelsLike,
  date,
  summaryData,
}) => {
  const backgroundColor = useMemo(() => (isDayTime ? DAY_COLOR : NIGHT_COLOR), [isDayTime]);
  const dayTitle = useMemo(() => (isDayTime ? TODAY_TEXT : TONIGHT_TEXT), [isDayTime]);

  return (
    <StyledCurrentForecastWrapper style={{ backgroundColor }}>
      <StyledCurrentForecastContent>
        <StyledWeatherTitleWrapper>
          <StyledTitleForecast>{`${dayTitle} ${date}`}</StyledTitleForecast>
          <StyledWeekName>{weekName}</StyledWeekName>
        </StyledWeatherTitleWrapper>
        <StyledWeatherDetails>
          <StyledImageWrapper>
            <StyledImg src={image} alt={description} />
          </StyledImageWrapper>
          <StyledTemperature>{temp}</StyledTemperature>
          <StyledWeatherColumnWrapper>
            <StyledParagraph>{description}</StyledParagraph>
            <StyledParagraph>{`${FEELS_LIKE}${feelsLike}`}</StyledParagraph>
          </StyledWeatherColumnWrapper>
        </StyledWeatherDetails>
        <StyledSummaryWrapper>
          {summaryData.map((item: SummaryData, index: number) => (
            <StyledWeatherTitleWrapper key={index}>
              <StyledParagraph>{item.name}</StyledParagraph>
              <StyledWeekName>{item.value}</StyledWeekName>
            </StyledWeatherTitleWrapper>
          ))}
        </StyledSummaryWrapper>
      </StyledCurrentForecastContent>
    </StyledCurrentForecastWrapper>
  );
};

export default CurrentForecast;
