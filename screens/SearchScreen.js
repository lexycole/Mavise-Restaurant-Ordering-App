import React from 'react';
import {View, Text,StyleSheet,FlatList,ImageBackground,Dimensions, TouchableOpacity} from 'react-native';
import SearchComponent from '../components/SearchComponent'

const SCREEN_WIDTH = Dimensions.get('window').width;

    export default function SearchScreen({navigation}) {
      return (
        <View style ={{flex:1,marginBottom:10,paddingTop:30}}>
                <SearchComponent />
            <View style ={{marginTop:10}}>
                <View>
                <FlatList 
                    style ={{}}
                    data = {filterData2}
                    keyExtractor ={item=>item.id}
                    renderItem = {({item,index})=>(
                        <TouchableOpacity
                                 onPress ={()=>{    
                                    navigation.navigate("SearchResultScreen",{item:item.name})
                                }}>
                            <View style = {styles.imageView}>
                              <ImageBackground
                                    style ={styles.image}
                                    // source = {{uri:item.image}}
                                    source = {item.image}
                                    >
                                <View style ={styles.textView}>
                                    <Text style ={{color: "#fff"}}>{item.name}</Text>
                                </View>
                                </ImageBackground>  
                            </View>
                        </TouchableOpacity>
                    )}
                    horizontal ={false}
                    showsverticalScrollIndicator = {false}
                    numColumns ={2}
                    ListHeaderComponent = { <Text style = {styles.listHeader}>Top Categories</Text>}
                    // ListFooterComponent = {<Footer />}
                />
                </View>
            </View>
        </View>
      );
    }
  
        const Footer = ()=>{
            return(
                <View style ={{marginTop:20,marginBottom:30 }}>
                        <View>
                        <FlatList 
                            style ={{marginBottom:10}}
                            data = {filterData2}
                            keyExtractor ={item=>item.id}
                            renderItem = {({item,index})=>(
                                <TouchableOpacity
                                        onPress ={()=>{
                                            navigation.navigate("SearchResultScreen",{item:item.name})
                                        }}>
                                    <View style = {styles.imageView}>
                                    <ImageBackground
                                            style ={styles.image}
                                            source = {{uri:item.image}}>  
                                        <View style ={styles.textView}>
                                            <Text style ={{color: "#fff"}}>{item.name}</Text>
                                        </View>
                                        </ImageBackground>  
                                    </View>
                                </TouchableOpacity>
                            )}
                            horizontal ={false}
                            showsverticalScrollIndicator = {false}
                            numColumns ={2}
                            ListHeaderComponent = { <Text style = {styles.listHeader}>More categories</Text>}
                        />
                        </View>
                    </View>
            )
        }

        // const filterData2 = [{name:"Main Meal",image:'https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png' , id:"0"},
                // {name:"Sides",image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",id:"1"},
                // {name:"Meats",image:"https://bukasapics.s3.us-east-2.amazonaws.com/nandos.png",id:"2"},
                // {name:"Drinks",image: "https://bukasapics.s3.us-east-2.amazonaws.com/macdo.png",id:"3"},
                // {name:"Chinese",image:"https://bukasapics.s3.us-east-2.amazonaws.com/pizza6.png",id:"4"},
        //         // {name:"Mexican",image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",id:"5"},  
        //         // {name:"Sea food",image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate2.png",id:"6"},
        //         // {name:"Chinese Food",image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png",id:"7"},
        //         // {name:"Mexican pie",image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",id:"8"},  
        //         // {name:"Ocean dish",image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png",id:"9"},
        // ];
    

        const filterData2 = [{name:"Main Meal",image: require('../assets/rice.png'), id:"0"},
            {name:"Sides",image:require('../assets/moimoi.jpg'),id:"1"},
            {name:"Meat",image:require('../assets/ham.png'),id:"2"},
            {name:"Drinks",image:require('../assets/champagne.png'),id:"3"},
        ];
        // Styles 
        const styles = StyleSheet.create({
        imageView : {  borderRadius:10,
                        justifyContent:"center",
                        alignItems:"center",
                        width:SCREEN_WIDTH*0.4475,
                        height:SCREEN_WIDTH*0.4475,
                        marginLeft:SCREEN_WIDTH*0.035,
                        marginBottom:SCREEN_WIDTH*0.035
        },
        image :  {     height:SCREEN_WIDTH*0.4475,
                        width:SCREEN_WIDTH*0.4475,
                        borderRadius:10, 
        },
        listHeader : {  fontSize:16,
                        color: '#5e6977',
                        paddingBottom:10,
                        marginLeft:12
                        
                        },
        textView : {  height:SCREEN_WIDTH*0.4475,
                        width:SCREEN_WIDTH*0.4475,
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor:'rgba(52, 52, 52,0.3)'
                    },
        })