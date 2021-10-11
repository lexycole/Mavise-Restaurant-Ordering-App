import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from'@expo/vector-icons';
import {Icon, withBadge} from 'react-native-elements'


export default function HomeHeader({navigation}){
    const BadgeIcon = withBadge(0)(Icon)

    return(
    <View style ={styles.header}>
        {/* <View style ={{alignItems:"center",justifyContent:'center', marginLeft:15}}>
            <MaterialCommunityIcons 
                name="menu" 
                size={32} 
                color={"#fff"}
                onPress ={()=>{
                    navigation.toggleDrawer()
                }}/>
        </View> */}

        <View style ={{alignItems:"center", justifyContent:"center", marginLeft:15}}>
            <Text style ={{color:"#fff", fontSize:21, fontWeight:'bold'}}>
            MAVISE RESTAURANT</Text>
        </View>

        <View style ={{alignItems:"center", justifyContent:"center", marginRight:15}}>
        <BadgeIcon 
                type ="material-community"
                name ="cart"
                size = {35}
                color ={'#fff'}
                onPress ={()=>{
                    navigation.navigate('MyOrderScreen')
                }}
            />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({

    header:{
        flexDirection:'row',
        backgroundColor:"#FFCC2A",
        height:50,
        justifyContent:'space-between'
    }
})