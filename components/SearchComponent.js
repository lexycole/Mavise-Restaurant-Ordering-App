import React, { useState, useRef} from 'react'
import { StyleSheet, Text, View,TouchableWithoutFeedback, Modal,TextInput,FlatList,TouchableOpacity,Keyboard } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import filter from 'lodash/filter'
import { MaterialCommunityIcons } from'@expo/vector-icons';

export default function SearchComponent() {
        const navigation  = useNavigation();
        const [data, setData] =  useState([...filterData])
        const [modalVisible, setModalVisible] = useState(false)
        const [textInputFossued,setTextInputFossued] = useState(true)
        const textInput = useRef(0)

        const contains = ({name},query)=>{
            if(name.includes(query)){
                return true
            }
            return false
        }


        const handleSearch = text =>{
            const dataS = filter(filterData, userSearch =>{
                return contains(userSearch,text)
            })

            setData([...dataS])
        }

    return (
        <View style = {{alignItems:"center"}}>
            <TouchableWithoutFeedback
                    onPress ={()=>{
                        setModalVisible(true)
                    }} >
                <View style = {styles.SearchArea}>
                             <MaterialCommunityIcons 
                                style = {styles.searchIcon} 
                                name="magnify" 
                                size={32} 
                                color={'#43484d'}
                                iconStyle ={{marginLeft:5}}
                                />
                     <Text style = {{fontSize:15}}>What are you looking for ?</Text>
                </View>
            </TouchableWithoutFeedback>

        <Modal
            animationType = "fade"
            transparent = {false}
            visible = {modalVisible}>
                <View style ={styles.modal}>
                    <View style = {styles.view1}>
                        <View style = {styles.TextInput}>
                            <Animatable.View 
                                    animation = {textInputFossued?"fadeInRight":"fadeInLeft"}
                                    duration = {400}>
                                <MaterialCommunityIcons 
                                    style = {styles.icon2} 
                                    name = {textInputFossued ? "arrow-left-circle" : "magnify"} 
                                    onPress = {()=>{
                                        if (textInputFossued)
                                            setModalVisible(false)
                                            setTextInputFossued(true)
                                            }}
                                    size={32} 
                                    iconStyle ={{marginLeft:5}}
                                />
                            </Animatable.View>

                            <TextInput 
                                style ={{width:"90%"}}
                                placeholder =""
                                autoFocus = {false}
                                ref = {textInput}

                                onFocus = {()=>{
                                    setTextInputFossued(true)
                                }} 

                                onBlur = {()=>{
                                    setTextInputFossued(false)
                                }}

                                onChangeText ={handleSearch} />

                            <Animatable.View
                                     animation = {textInputFossued?"fadeInLeft":""}
                                    duration = {400}>
                            {/* <Icon 
                                name = {textInputFossued ? "cancel" : null } 
                                iconStyle ={{color:colors.grey3}}
                                type ="material"
                                style={{marginRight:-10}}
                                onPress ={()=>{
                                        textInput.current.clear() 
                                       // handleSearch()          
                                }}
                            /> */}
                            <MaterialCommunityIcons 
                                    style={{marginRight:-10}}
                                    name = {textInputFossued ? "close" : null } 
                                    onPress ={()=>{
                                        textInput.current.clear() 
                                       // handleSearch()          
                                    }}
                                    size={32} 
                                    iconStyle = {{color:'#86939e'}}
                                />
                            </Animatable.View>
                        </View>
                    </View>

        <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity 
                       onPress = {() =>{
                            Keyboard.dismiss
                            navigation.navigate("SearchResultScreen",{item:item.name})
                            setModalVisible(false)
                            setTextInputFossued(true)
                                }} >
                    <View style={styles.view2}>
                        <Text style={{color:'#5e6977', fontSize:15 }}>{item.name}</Text>
                    </View>
              </TouchableOpacity>
                )}
            keyExtractor={item => item.id}
             />             
                </View>
        </Modal>
        </View>
    )
}

    // const filterData = [
        // {name:"Main Meal",image: require('../assets/fastfood.png'), id:"0"},
    // {name:"Sides",image:require("../assets/burger.png"),id:"1"},
    // {name:"Meats",image:require("../assets/ham.png"),id:"2"},
    // {name:"Drinks",image:require("../assets/champagne.png"),id:"3"},

// {name:"Chinese",image:require("../assets/chinese.png"),id:"4"},
// {name:"Mexican",image:require("../assets/mexican.png"),id:"5"},
// {name:"Sea food",imge:require("../assets/seafood.png"),id:"6"},
// ];/


    const filterData = [{name:"Main Meal",image: require('../assets/rice.png'), id:"0"},
    {name:"Sides",image:require('../assets/moimoi.jpg'),id:"1"},
    {name:"Meat",image:require('../assets/ham.png'),id:"2"},
    {name:"Drinks",image:require('../assets/champagne.png'),id:"3"},
    ];

        const styles = StyleSheet.create({
            container :{
                flex:1
            },
            text1:{
                color:'#86939e',
                fontSize:16
            },
            TextInput:{
                borderWidth:1,
                borderRadius:12,
                marginHorizontal:0,
                borderColor:"#86939e",
                flexDirection:"row",
                justifyContent:"space-evenly",
                alignContent:"center",
                alignItems:"center",
                paddingLeft:10,
                paddingRight:10
            },
            SearchArea:{marginTop :10,
                width:"94%",
                height:50,
                backgroundColor: '#e1e8ee',
                borderRadius:12,
                borderWidth:1,
                borderColor:'#bdc6cf',
                flexDirection:"row",
                alignItems:"center"
            },
            searchIcon:{ fontSize:24,
                        padding:5,
                        color: '#5e6977',
            },
            view1:{ height:70,
                    justifyContent:"center",
                    paddingHorizontal:10,
            },
            view2:{
            flexDirection: 'row',
            padding: 15,
            alignItems: 'center',
            },
            icon2 :{ fontSize:24,
                    padding:5,
                    color: '#5e6977',
            },
            modal :{
                flex:1
            }
        })
