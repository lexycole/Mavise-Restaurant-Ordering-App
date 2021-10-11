import React, { Component } from 'react'
import { View, Image, StatusBar,TouchableOpacity, Dimensions, Text, Button } 
from 'react-native'
import Swiper from 'react-native-swiper'
  const { width, height } = Dimensions.get('window');
  const styles = {
      wrapper: {
        backgroundColor: '#FFCC2A',
        height: 100
      },
      slide: {
        flex: 1,
        backgroundColor: '#FFCC2A',
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        overflow: 'hidden',
        flex: 1,
      },
      imgBackground: {
        width,
        height,
        backgroundColor: 'transparent',
      },
      image: {
        width:'100%', 
        height: 300, 
        justifyContent: 'center',
        alignItems: 'center',
      },
      textDiv: {
        height: 100,
      },
      text: {
        textAlign: 'center',
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
      },
      button: {
        width: '90%',
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        borderRadius: 5,
      }
    }

  export default class TourScreen extends Component {
    render() {
        const { navigation } = this.props;
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Swiper
            height={180}
            width={"100%"}
            dot={  
              <View
                style={{
                  backgroundColor: 'rgba(255,255,255,.3)',
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: '#fff',
                  width: 13,
                  height: 13,
                  borderRadius: 7,
                  marginLeft: 7,
                  marginRight: 7
                }}
              />
            }
            paginationStyle={{
              bottom: 30
            }}
            loop={true}
            autoplay={true} 
            showsPagination={true}
            removeClippedSubviews={false}>

            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require('../assets/clip.png')}
                resizeMode="center" />
                <View style={styles.textDiv}>
                  <Text style={styles.text}>Quick Search</Text>
                </View>
              
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                <Text>Skip</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.slide}>
              <Image
                  style={styles.image}
                  source={require('../assets/flame-fatal.png')}
                  resizeMode="center" />
                <View style={styles.textDiv}>
                  <Text style={styles.text}>Variety Of Food</Text>
                </View>
                  <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate('Login')}>
                  <Text>Skip</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.slide}>
                   <Image style={styles.image} 
                resizeMode="center"
                source={require('../assets/gummy-kitchen.png')} />
                  <View style={styles.textDiv}>
                    <Text style={styles.text}>Explore Kitchen</Text>
                  </View>
               <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                <Text>Skip</Text>
              </TouchableOpacity>
            </View>
          </Swiper>
        </View>
      )
    }
  }
