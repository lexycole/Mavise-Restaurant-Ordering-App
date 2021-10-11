import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from'@expo/vector-icons';

const MenuScreen = ({navigation, restaurant, onPress }) => {
    // const specialData =[
    //     {title:"LIMITED OFFER",key:0},
    //     {title:"GO CHILLI",key:1},
    //     {title:"GO CHEESE",key:2},
    //     {title:"MCCHICKEN DELUXE PROMO",key:3},
    //   ];  
    const menuData = [
        {title:"MAIN MEAL",special:false,key:0, },
        {title:"SIDES", special:false,key:1},
        {title:"MEATS",special:false ,key:2},
        {title:"DRINKS",special:false ,key:3},
        // {title:"SALADS",special:false,key:4},
        // {title:"HAPPY MEALS",special:false,key:5},
        // {title:"SAHRE BOX",special:false,key:6},
        // {title:"MILKSHAKES",special:false,key:7},
        // {title:"COLD DRINKS",special:false,key:8},
        // {title:"DESSERTS",special:false,key:9},
        // {title:"HOT DRINKS",special:false,key:10},
        ] ;

    return (
        <View style ={styles.container}>
           {/* <View>
               {specialData.map((items)=>
                    <View key = {items.key} style ={styles.view1}>
                        <TouchableOpacity onPress ={onPress}>
                            <View style ={styles.view2}>
                                <MaterialCommunityIcons 
				  					name="star" 
									size={24} 
								  	color={'gold'} />
                                <Text style = {styles.text1}>{items.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                   )
               }
           </View> */}

           <View>
               {menuData.map((items) =>
                    <View key = {items.key} style ={styles.view1}>
                        <TouchableOpacity onPress ={onPress}>
                            <View style ={styles.view2}>
                                <Text style = {styles.text1}>{items.title}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    )
               }
           </View>
        </View>
    )
}


export default MenuScreen

const styles = StyleSheet.create({

container:{
    flex:1,
    marginTop:20
},
  view1:{ 
      paddingHorizontal:10, 
},

  view2:{flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        padding:10,
        borderBottomColor: '#e1e8ee',
       },
    text1:{
        color: '#86939e',
        fontSize:18,
        fontWeight:"bold",
    }
})
