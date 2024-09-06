import { APP_TITLE } from '../../constants';
import ButtonLink from '../ButtonLink';
import { StyledButtonLinksWrapper, StyledHeaderTitle, StyledTitleBar, StyledTitleBarWrapper } from './styled';

const TitleBar = () => {
  return (
    <StyledTitleBarWrapper>
      <StyledTitleBar>
        <StyledHeaderTitle>{APP_TITLE}</StyledHeaderTitle>
        <StyledButtonLinksWrapper>
          <ButtonLink title="Contact Us" to="/"></ButtonLink>
          <ButtonLink title="About" to="/"></ButtonLink>
        </StyledButtonLinksWrapper>
      </StyledTitleBar>
    </StyledTitleBarWrapper>
  );
};

export default TitleBar;
