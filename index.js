import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import * as colors from "../utils/colors";

const SubmitButton = ({ label, onPressButton, disable }) => (
  <TouchableOpacity
    disabled={disable}
    onPress={onPressButton}
    style={[styles.submitButton, { opacity: disable ? 0.7 : 1 }]}
  >
    <Text style={styles.submitButtonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  submitButton: {
    width: wp("90%"),
    height: hp("8%"),
    backgroundColor: "#5256E8",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    alignSelf: "center",
    position: "static",
  },
  submitButtonText: {
    color: colors.WHITE_COLOR,
    fontWeight: "800",
    fontSize: 18,
    fontFamily: "Avenir",
  },
});

module.exports = {
  SubmitButton,
};
