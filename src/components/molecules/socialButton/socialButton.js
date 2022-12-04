import React from "react";
import {Image, Pressable, StyleSheet, View} from "react-native";
import {
    AZURE, FACEBOOK, GOOGLE, LINKEDIN, TWITTER
} from "../../../utils/icons";

const SocialButton = () => {
  return (
      <View style={styles.container}>
          <Pressable style={styles.socialBtn}>
              <View>
                  <Image source={AZURE}
                         style={{width: 40, height: 40}} />
              </View>
          </Pressable>
          <Pressable style={styles.socialBtn}>
              <View>
                  <Image source={FACEBOOK}
                         style={{width: 40, height: 40}} />
              </View>
          </Pressable>
          <Pressable style={styles.socialBtn}>
              <View>
                  <Image source={GOOGLE}
                         style={{width: 40, height: 40}} />
              </View>
          </Pressable>
          <Pressable style={styles.socialBtn}>
              <View>
                  <Image source={LINKEDIN}
                         style={{width: 40, height: 40}} />
              </View>
          </Pressable>
          <Pressable style={styles.socialBtn}>
              <View>
                  <Image source={TWITTER}
                         style={{width: 40, height: 40}} />
              </View>
          </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center"
    },
    socialBtn:{
      margin: 10
    }
})

export default SocialButton;