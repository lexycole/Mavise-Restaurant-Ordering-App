// import  * as React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, Alert, Platform } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import React, { useState, useEffect } from "react";
import Parse from "parse/react-native.js";
import {useNavigation} from '@react-navigation/native';
import keys from '../../constants/Keys';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

export default function RegisterScreen() {
    useEffect(() => {
        const createInstallation = async () => {
          const Installation = Parse.Object.extend(Parse.Installation);
          const installation = new Installation();
      
          installation.set("deviceType", Platform.OS);
      
          await installation.save();
        }
    
        createInstallation();
      }, []);

    const navigation = useNavigation();
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");                                     

    const onRegisterPress = async function () {
        // Note that these values come from state variables that we've declared before
        const usernameValue = username;
        const passwordValue = password;
        // const fullnameValue: string = fullname;
        // const emailValue: string = email;
        // Since the signUp method returns a Promise, we need to call it using await
        return await Parse.User.signUp(usernameValue, passwordValue)
          .then((createdUser) => {
            // Parse.User.signUp returns the already created ParseUser object if successful
            Alert.alert(
              "Success!",
              `User ${createdUser.get("username")} was successfully created!`
            );
            navigation.navigate('Login');
            return true;
          })
          .catch((error) => {
            // signUp can fail if any parameter is blank or failed an uniqueness check on the server
            Alert.alert("Error!", error.message);
            return false;
          });
        }

    const onFooterLinkPress = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/icons-fish.png')}       
                />
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={(text) => setFullname(text)}
                    value={fullname}
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    placeholderTextColor="#aaaaaa"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>{'Create account'}</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}