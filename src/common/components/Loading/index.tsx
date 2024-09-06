import { StyledSpinnerProps } from './interface.ts';
import { StyledLoadingWrapper, StyledSpinner } from './styled.tsx';

const Loading: React.FC<StyledSpinnerProps> = ({ size }) => {
  return (
    <StyledLoadingWrapper>
      <StyledSpinner size={size}></StyledSpinner>
    </StyledLoadingWrapper>
  );
};

export default Loading;
