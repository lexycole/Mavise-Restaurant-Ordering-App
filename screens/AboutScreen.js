import * as React from 'react';
import { Text, Alert, TouchableOpacity,  StyleSheet,  View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Parse from 'parse/react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function AboutScreen() {
  const navigation = useNavigation(); 

  const signOutUser  = async function (){
    return await Parse.User.logOut()
      .then(async () => {
        // To verify that current user is now empty, currentAsync can be used
        const currentUser= await Parse.User.currentAsync();
        if (currentUser === null) {
          
          Alert.alert('Log Out!', 'No user is logged in anymore!');
        }
        // Navigation dispatch calls a navigation action, and popToTop will take
        // the user back to the very first screen of the stack
        navigation.dispatch(StackActions.popToTop());
        return true;
      })
      .catch((error) => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };
  
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">

                  <View style={styles.AboutContainer}>
                    <Text style={styles.AboutTitle}>Mavise Restuarant</Text>
                    <Text style={styles.Aboutsubtext}>
                      This mobile app was designed and developed by Sowoolu-Coates Peter Sodipo (150805013)of the department of Computer Science, UNILAG.
                </Text>

                <Text style={styles.Aboutsubtext}>
                Mavise restaurant is arguably the most popular restaurant in the University of Lagos with an average of over 500 students/customers taking turns to visit and buy their desired meal of choice per day. These students/customers end up joining long queues before their desired meals can be bought. These queues tend to worsen at particular hours of the day leading to some customers looking for alternative restaurants with little or no customers to get their desired meals from. 
                The purpose of this app is to automate and improve customer experience in ordering for food at the restaurant.</Text>
                  </View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => signOutUser()}>
            <Text style={styles.buttonTitle}>{'Log Out'}</Text>
        </TouchableOpacity>

        </KeyboardAwareScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 40,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        marginTop: -10,
        alignItems: 'center',
      },
      textStyle: {
        fontSize: 20,
        textAlign: 'center'
      },
      button: {
        backgroundColor: '#FFCC2A',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: 'center'
      },
      buttonTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold"
      },
      AboutContainer: {
          padding: 0,
          margin: 0,
      },
      AboutTitle: {
        textAlign: 'center',
        fontSize: 25
      },
      Aboutsubtext: {
        marginLeft: 5,
        marginTop: 10
      },
})