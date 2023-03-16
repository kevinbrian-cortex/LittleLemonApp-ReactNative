import styled from "styled-components/native";

export const SplashScreenContainer = styled.View`
  flex: 1;
`;

export const SplashScreenHeader = styled.View`
  flex: 0.5;
  display: flex;
  flex-direction: column;
`;

export const SplashScreenHeaderBackGroundImage = styled.ImageBackground`
  background-color: #A4F883;
  border-bottom-left-radius: 250px;
`;

export const SplashScreenHeadlogo = styled.View`
  display: flex;
  align-self: center;
  background-color: white;
  padding: 30px;
  border-radius: 100px;
  top: 300px;
  border: 5px solid transparent;
  border-color: #A4F883;
`;

//Body style
export const StyledSplashScreenBody = styled.View`
  flex: 0.50;
`;

export const StyledSplashScreenWrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
