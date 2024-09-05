import { ButtonLinkProps } from './interface';
import { StyledButtonLink } from './styled';

const ButtonLink: React.FC<ButtonLinkProps> = ({ title, to }) => {
  return <StyledButtonLink to={to}>{title}</StyledButtonLink>;
};

export default ButtonLink;
