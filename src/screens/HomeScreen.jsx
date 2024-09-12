import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate("LOGIN");
    };
    const handleSignup = () => {
        navigation.navigate("SIGNUP");
    };
  return (
    <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo}/>
        <Image source={require("../assets/man.png")} style={styles.man} />
        <Text style={styles.title}>Welcome to the Home Page</Text>
        <Text style={styles.subTitle}>Welcome to our website, where innovation meets simplicity. Discover a community that empowers you to achieve more</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.loginButtonWrapper, {backgroundColor: colors.primary}, ]} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.loginButtonWrapper]} onPress={handleSignup}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        alignItems: "center",
    },
    logo: {
        height: 40,
        width: 140,
        marginVertical: 30,
    },
    man: {
        width: 231,
        height: 250,
        marginVertical: 20,
    },
    title: {
        fontSize: 40,
        fontFamily: fonts.SemiBold,
        textAlign: "center",
        paddingHorizontal: 20,
        marginTop: 50,
        color: colors.primary,
    },
    subTitle: {
        fontSize: 18,
        textAlign: "center",
        fontFamily: fonts.Medium,
        color: colors.secondary,
        paddingHorizontal: 20,
        marginTop: 30,
        marginVertical: 20,
    },
    buttonContainer: {
        marginTop: 30,
        flexDirection: "row",
        borderWidth: 2,
        width: "80%",
        height: 60,
        color: colors.primary,
        borderRadius: 98,
        overflow: "hidden",
    },
    loginButtonWrapper: {
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        borderRadius: 98,
    },
    loginButtonText: {
        fontSize: 18,
        color: colors.white,
        fontFamily: fonts.SemiBold,
    },
    signUpButtonText: {
        fontSize: 18,
        fontFamily: fonts.SemiBold,
    },
})