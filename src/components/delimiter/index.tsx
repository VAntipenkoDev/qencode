import { styled } from 'styled-components';

const DelimiterStyled = styled.div`
  position: relative;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGrayColor};
  font-family: BasisGrotesquePro-Regular;
  margin-top: 1.2rem;
  font-size: 1.2rem;
  width: 100%;

  &::after {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    content: ' ';
    width: 46%;
    border-top: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
    display: block;
  }

  &::before {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    content: ' ';
    width: 46%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrayColor};
    right: 0;
    display: block;
  }

  span {
    display: block;
    margin: 3rem 0 3.2rem;
  }
`;

const Delimiter = () => (
  <DelimiterStyled>
    <span>OR</span>
  </DelimiterStyled>
);
export default Delimiter;
