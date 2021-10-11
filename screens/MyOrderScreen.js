import React, { useState } from'react'
import { StyleSheet, Text,Alert, FlatList, View, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import FoodCard from '../components/FoodCard';

const SCREEN_WIDTH = Dimensions.get('window').width

    const MyOrderScreen = ({navigation}) => {
    const orderAlert = () =>
    Alert.alert(
      "Succesful",
      "Your order at Marvise has been placed for @200.00",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () =>  navigation.navigate("MyOrderScreen") }
      ]
    );

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'mainmeal', title: 'Active Orders' },
    { key: 'sides', title: 'Previous Orders' },
  ]);

//   01. MainMeal Function
  const MainMealRoute = () => (
    <View style={{flex:1}}>  
        <FlatList 
           style ={{marginTop:10}} 
           horizontal ={false}
           data = {restaurantsData1}
           keyExtractor = {(item, index) => index.toString()}   
           showsHorizontalScrollIndicator = {false}
           renderItem = {({item}) => (
               <View style ={{flexDirection:'row', paddingTop:20}}>
                   <FoodCard 
                       screenWidth = {SCREEN_WIDTH * 0.95}
                       images ={item.image}
                       restaurantName ={item.restaurantName}
                       farAway ={item.farAway}
                       businessAddress ={item.businessAddress}
                       averageReview ={item.averageReview}
                       numberOfReview ={item.numberOfReview} />
               </View>
           )} />
    </View>
  );
//   02.Side meal Function
  const SidesRoute = () => (
    <View style={{flex:1}}>  
        <FlatList 
           style ={{marginTop:10}} 
           horizontal ={false}
           data = {restaurantsData2}
           keyExtractor = {(item,index)=>index.toString()}   
           showsHorizontalScrollIndicator = {false}
           renderItem = {({item})=>(
               <View style ={{flexDirection:'row', paddingTop:10}}>
                   <FoodCard 
                       screenWidth = {SCREEN_WIDTH * 0.95}
                       images ={item.image}
                       restaurantName ={item.restaurantName}
                       farAway ={item.farAway}
                       businessAddress ={item.businessAddress}
                       averageReview ={item.averageReview}
                       numberOfReview ={item.numberOfReview} />
               </View>
           )}   />
    </View>
  );

  const renderScene = SceneMap({
    mainmeal: MainMealRoute,
    sides: SidesRoute,
  })

        const restaurantsData1 = [
            {restaurantName:"JOLLOF RICE", farAway:"21.2",
            businessAddress:"Shop 5, Red Brick Complex, UNILAG",image: "https://i.ibb.co/nmcWFXS/Nigerian-Jollof-Rice-with-thyme.jpg",
            averageReview: "#249.99",numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15, 
            collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
            id:0},
        ]
        const restaurantsData2 = [
                {restaurantName:"MOIMOI", farAway:"21.2",
                businessAddress:"Shop 5, Red Brick Complex, UNILAG ",image:'https://i.ibb.co/vxVhygc/images-q-tbn-ANd9-Gc-Rq1ba-AIYm-RBgs-QHFw-Ol-Gnp-Dl-Y7r-IUEx-Nw-usqp-CAU.jpg',
                averageReview:"#249.99",numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
                collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
                id:0},
        ]
 

    return (
        <View style ={styles.container}>
                <ScrollView>
                <View style = {styles.view10}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    tabStyle ={{backgroundColor: '#FFCC2A'}}
                    />  
                </View>
           </ScrollView>
        </View>
    )
}
export default  MyOrderScreen

const styles = StyleSheet.create({

    container:{flex:1,
            paddingTop:20
        },
    
    view1:{
          padding:3,
          alignItems:"center",
          justifyContent:"center"
        },
    
    text1:{color:"green",
        fontSize:14,
        fontWeight:"bold"
      },
    
    view2:{ flexDirection:"row",
          flex:1,
          marginBottom:5,
          marginHorizontal:10,
          justifyContent:"space-between",
          },
    
    view3:{flex:8,
            },
    
    text2:{fontSize:20,
          fontWeight:"bold",  
          color:'#43484d'
        },
    
    text3:{
        fontSize:15,
        color:'#86939e'
    },
    
    view4:{flexDirection:'row',
          alignItems:"center",
          marginTop:5
          },
    
    text4:{fontFamily:"Roboto",
          fontSize:13,
          color:'#86939e',
          marginLeft:2,
          },
    
    text5:{fontFamily : 'Roboto',
          fontSize:13,
          color:'#86939e',
          marginLeft:2,
          marginRight:5
          },
      text6:{fontFamily : 'Roboto',
            fontSize:13,
            color:'#86939e',
            marginLeft:0,
            },
    
      view5:{ 
          flex:3,
          alignItems:"center"
        },
    
      text6:{
            fontSize:15,
            fontWeight:"bold",
            color: '#43484d'
          },
    
      view7:{width:40,
            height:40,
            alignItems:"center",
            borderRadius:20,
            justifyContent:"space-around",
            },
    
      text7:{fontSize:16,
             fontWeight:"bold",
             color:"#000",
             marginTop:5
            },
    
      text8: {
            fontSize:13,
            color: "#000",
            marginBottom:5
          },
    
      view8:{
            flex:3,
            alignItems:"center"
          },
    
    text9:{fontSize:15,
          fontWeight:"bold",
          color: "#fff"
    },
    
    view9:{width:40,
          height:40,
          backgroundColor: "#FFCC2A",
          alignItems: "center",
          borderRadius: 20,
          justifyContent: "space-around",
        },
    
    text10:{fontSize:16,
          fontWeight:"bold",
          color: "#fff",
          marginTop:5
          },
    
    text11:{fontSize:13,
            color: "#fff",
            marginBottom:5
          },
    
    view10:{elevation:10,
           backgroundColor:"#fff"
        },
    
    view11:{
            backgroundColor: "#FFCC2A",
            height: 50,
            alignContent: "center",
            marginBottom: 0,
            justifyContent: "center"
    },
    view12:{flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center"
            },
    
    text12:{padding:10,
            fontWeight:"bold",
            fontSize:18,
            color:"#fff"
          },
    
    view13:{ borderWidth:1,
            marginRight:10,
            borderColor: "#fff",
            borderRadius:6,
            paddingBottom:2
          },
    
    text13: {
        paddingHorizontal:13,
        fontWeight:"bold",
        fontSize:18,
        color:"#fff",
          },
    
    tab: { 
          backgroundColor:"#FFCC2A",
          justifyContent:"space-between",
          alignItems:"center"
          },
    
    tabContainer:{ alignItems:'center',
          alignContent:'center',
          justifyContent:'center',
          },
    
    tabLabel:{fontWeight:'bold',
          color:"#fff"
          },
      
    tabStyle:{
        width:SCREEN_WIDTH/4,
              maxHeight:15,
            },

        view14:{flexDirection:"row",
            alignItems:"center",
            padding:10,
            backgroundColor:"#ff8c52",
            top:0,
            left:0,
            right:0,
            paddingTop:25
        },
    
    text14:{fontWeight:"bold",
            marginLeft:40,
            color:"#000",
            fontSize:18
        },
    
    view15:{marginTop:5,
            paddingBottom:20
        },          

})