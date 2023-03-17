import React from "react";
import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import {
  SplashScreenHeader,
  SplashScreenHeaderBackGroundImage,
  SplashScreenHeadlogo,
} from "../../Styled/StyledSplashScreen";

const SplashScreenHead = () => {
  return (
    <SplashScreenHeader>
      <SplashScreenHeaderBackGroundImage
        source={require("../../assets/zachary_unsplash.jpg")}
        resizeMode="cover"
        imageStyle={styles.imageStyle}
        style={{ flex: 1, alignItems : "center", justifyContent : "flex-end"}}
      >
        <SplashScreenHeadlogo>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../../assets/medium-color-svgrepo-com.png")}
          />
        </SplashScreenHeadlogo>
      </SplashScreenHeaderBackGroundImage>
    </SplashScreenHeader>
  );
};

export default SplashScreenHead;

const styles = StyleSheet.create({
  imageStyle: {
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 0,
  },
});
