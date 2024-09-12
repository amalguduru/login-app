import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'

const SignupScreen = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const handleBackButton = () => {
    navigation.navigate("HOME")
  };

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleBackButton}>
        <Ionicons name={"arrow-back-outline"} color={colors.primary} size={25}/>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Let's get</Text>
        <Text style={styles.textHeading}>Started</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={"mail-outline"} size={20} color={colors.secondary}/>
          <TextInput style={styles.textInput} placeholder='Enter your email' placeholderTextColor={colors.secondary} keyboardType='email-address'/>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name={"phone-portrait-outline"} size={20} color={colors.secondary}/>
          <TextInput style={styles.textInput} placeholder='Enter your phone no' placeholderTextColor={colors.secondary} keyboardType='phone-pad'/>
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name={"lock-closed-outline"} size={20} color={colors.secondary}/>
          <TextInput style={styles.textInput} placeholder='Enter your password' placeholderTextColor={colors.secondary} secureTextEntry={secureEntry}/>
          <TouchableOpacity onPress={() => setSecureEntry((prev) => !prev)}>
            <Ionicons name={"eye-outline"} size={20} color={colors.secondary} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.signupButtonWrapper}>
          <Text style={styles.loginText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.continueText}>or continue with</Text>
        <TouchableOpacity style={styles.signupGoogleWrapper}>
          <Image source={require("../assets/Google.png")} style={styles.googleLogo}/>
          <Text style={styles.googleText}>Google</Text>
        </TouchableOpacity>
        <View style={styles.footerText}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  backButtonWrapper: {
    height: 40,
    width: 40,
    backgroundColor: colors.gray,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginVertical: 20,
  },
  textHeading: {
    fontSize: 32,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.secondary,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light,
  },
  signupButtonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginTop: 20,
    justifyContent: "center",
  },
  loginText: {
    color: colors.white,
    fontFamily: fonts.SemiBold,
    fontSize: 18,
    textAlign: "center",
    padding: 10,
  },
  continueText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 12,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  signupGoogleWrapper: {
    borderWidth: 2,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
    borderColor: colors.primary,
    marginTop: 20,
  },
  googleLogo: {
    height: 20,
    width: 20,
  },
  googleText: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  footerText: {
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  accountText: {
    fontSize: 13,
    fontFamily: fonts.Regular,
    color: colors.primary,
  },
  signupText: {
    color: colors.primary,
    fontSize: 13,
    fontFamily: fonts.Bold,
  }
})