import React, { useState } from 'react';
import {View, Text, StyleSheet,TouchableOpacity,
    ScrollView,FlatList,Pressable, Image, Dimensions,StatusBar} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import FoodCard from '../../components/FoodCard';
import { MaterialCommunityIcons } from'@expo/vector-icons';
import styles from './styles';

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen({navigation}) {
    const [delivery, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState("0");

    const filterData = [{name:"Main Meal",image: require('../../assets/rice.png'), id:"0"},
                    {name:"Sides",image:require("../../assets/moimoi.jpg"),id:"1"},
                    {name:"Meat",image:require("../../assets/ham.png"),id:"2"},
                    {name:"Drinks",image:require("../../assets/champagne.png"),id:"3"},
                    ];

                    const restaurantsData1 = [
                        {restaurantName:"JOLLOF RICE", farAway:"21.2",
                        businessAddress:"Shop 5, Red Brick Complex, UNILAG",image: "https://i.ibb.co/nmcWFXS/Nigerian-Jollof-Rice-with-thyme.jpg",
                        averageReview: "#249.99",numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15, 
                        collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
                        id:0},
                        {restaurantName:"FRIED RICE", farAway:"12.7",businessAddress:"Shop 5, Red Brick Complex, UNILAG",
                        image: 'https://i.ibb.co/5TzZMNv/Subject-Traditional-authentic-Chinese-Fried-rice-served-in-a-bowl.jpg',
                        averageReview:"#549.99", numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
                        discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
                        id:1},
                        {restaurantName:"WHITE RICE", farAway:"5",businessAddress:"Shop 5, Red Brick Complex, UNILAG ",
                        image:'https://i.ibb.co/Vx0f5VQ/White-boiled-rice-with-spicy-ofada-stew-a-Nigerian-traditional-meal-ready-to-eat.jpg',
                         coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: "#149.99",numberOfReview: 1272,
                          discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
                         id:2},
                    ]
                    const restaurantsData2 = [
                            {restaurantName:"MOIMOI", farAway:"21.2",
                            businessAddress:"Shop 5, Red Brick Complex, UNILAG ",image:'https://i.ibb.co/vxVhygc/images-q-tbn-ANd9-Gc-Rq1ba-AIYm-RBgs-QHFw-Ol-Gnp-Dl-Y7r-IUEx-Nw-usqp-CAU.jpg',
                            averageReview:"#249.99",numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
                            collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
                            id:0},
                            {restaurantName:"BEANS", farAway:"12.7",businessAddress:"Shop 5, Red Brick Complex, UNILAG",
                            image:'https://i.ibb.co/RcJH5fj/images-q-tbn-ANd9-Gc-RO20-Hdgbr-XCA2-Pn-F5g-RUMKRL-jx0-Wq2j-QRA-usqp-CAU.jpg',
                            averageReview:"#549.99", numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
                            discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
                            id:1},
                            {restaurantName:"PLANTAIN", farAway:"5",businessAddress:"Shop 5, Red Brick Complex, UNILAG ",
                            image:'https://i.ibb.co/wpFP4yd/images-q-tbn-ANd9-Gc-Q6k-Uz-Kq-I5wl-Dauzvp-UKd-Ly0-Gs-Y8-A0-Gh49kw-usqp-CAU.jpg',
                            coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: "#149.99",numberOfReview: 1272,
                            discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
                            id:2},
                            {restaurantName:"EGG", farAway:"5",businessAddress:"Shop 5, Red Brick Complex, UNILAG ",
                            image:'https://i.ibb.co/vZFkZHX/images-q-tbn-ANd9-Gc-Rkcr-AVrm8-H5f-H5v-K3fi2-WZch-PS1-Cc2r7v-Fv-Q-usqp-CAU.jpg',
                            coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: "#349.99",numberOfReview: 1272,
                            discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
                            id:2},
                            {restaurantName:"SPAGHETTI", farAway:"5",businessAddress:"Shop 5, Red Brick Complex, UNILAG",
                            image:'https://i.ibb.co/S5txBJ8/images-q-tbn-ANd9-Gc-SPTMDm-Czchx90x-VTLM5-R5-kd-MOm-Ke-JTp-LA4-A-usqp-CAU.jpg',
                            coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: "#249.99",numberOfReview: 1272,
                            discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
                            id:2},
                    ]
                    const restaurantsData3 = [
                    {restaurantName:"CHICKEN", farAway:"21.2",
                    businessAddress:"Shop 5, Red Brick Complex, UNILAG ",image:'https://i.ibb.co/cyZ1DqQ/images-q-tbn-ANd9-Gc-Si-TH-66h-Nnq-Cq3a-Lq-Gg-Ww-Y-LYKy-Gqjj-NWp-Vw-usqp-CAU.jpg',
                    averageReview:"#249.99",numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
                    collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
                    id:0},
                    {restaurantName:"BEEF", farAway:"12.7",businessAddress:"Shop 5, Red Brick Complex, UNILAG ",
                    image: 'https://i.ibb.co/rwkYHHc/images-q-tbn-ANd9-Gc-T6ikdcq-bp-IYKLif-Zt0y-Jjg3o-D-9u-Jo-Yof-TA-usqp-CAU.jpg',
                    averageReview:"#549.99", numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
                    discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
                    id:1},
            
                    {restaurantName:"FISH", farAway:"5",businessAddress:"Shop 5, Red Brick Complex, UNILAG",
                    image:'https://i.ibb.co/JdQB5Mz/images-q-tbn-ANd9-Gc-Tnm3p-DTYm-Wt-IJ6-T6fc-Hv-FP3-59j0hl-rp78-A-usqp-CAU.jpg',
                        coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: "#149.99",numberOfReview: 1272,
                        discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
                        id:2},
                    ]
                    const restaurantsData4 = [
                    {restaurantName:"COKE", farAway:"21.2",
                    businessAddress:"Shop 5, Red Brick Complex, UNILAG",image: 'https://i.ibb.co/f1gk7GR/images-q-tbn-ANd9-Gc-Td-Q5-IXFi4-Xd-Yt-Uuimv-J99h-JNk8xya-Ad-Kt-PQ-usqp-CAU.jpg',
                    averageReview:"#249.99",numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
                    collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
                    id:0},
                    {restaurantName:"UNILAG WATER", farAway:"12.7",businessAddress:"Shop 5, Red Brick Complex, UNILAG ",
                    image: 'https://i.ibb.co/tJkNXz0/bottle-pics.jpg',
                    averageReview:"#019.99", numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
                    discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
                    id:1},
            
                    {restaurantName:"MALTA GUINESS", farAway:"5",businessAddress:"Shop 5, Red Brick Complex, UNILAG ",
                    image:'https://i.ibb.co/k2FLWjQ/images-q-tbn-ANd9-Gc-SBuh-Wp84-Rsc-KB7e-Jpc-DWShkawcc-Kl3-R-FO7w-usqp-CAU.jpg',
                    coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: "#349.99",numberOfReview: 1272,
                    discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
                    id:2},
                    ]
    return (
        <View style ={styles.container}>
        <StatusBar
            translucent
            barStyle="light-content"
            backgroundColor="rgba(0, 0, 0, 0.9)"
         />

    <HomeHeader navigation ={navigation}/>
    <ScrollView
        stickyHeaderIndices = {[0]}
        showsVerticalScrollIndicator = {true}>

    <View style ={{backgroundColor:"white",paddingBottom:10}}> 
            <View style ={{marginTop:10, flexDirection:'row',justifyContent:"space-evenly"}}>
                    <TouchableOpacity
                            onPress ={() => {
                                setDelivery(true)
                            }}>
                        <View style ={{...styles.deliveryButton,backgroundColor:delivery? "#FFCC2A" : '#e1e8ee'}}>
                            <Text style ={styles.deliveryText}>Delivery</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                                onPress ={()=>{
                                setDelivery(false)
                                navigation.navigate("MyOrderScreen")
                            }}>
                        <View style ={{...styles.deliveryButton,backgroundColor:delivery? '#e1e8ee' : "#FFCC2A"}}>
                            <Text style ={styles.deliveryText}>Pick Up</Text>
                        </View>
                    </TouchableOpacity> 
            </View>
        </View> 

<View style ={styles.filterView}>
    <View style={styles.addressView}>
        <View style ={{flexDirection:"row",alignItems:"center",paddingLeft:5}}>
             <MaterialCommunityIcons 
                name="map-marker" 
                size={26} 
                color={'#43484d'}
                />
            <Text style ={{marginLeft:5}}>Shop 5, Red Brick Complex, UNILAG </Text>
        </View>

        <View style ={styles.clockView}>
             <MaterialCommunityIcons 
                name="clock-time-four" 
                size={26} 
                color={'#43484d'}/>
            <Text style ={{marginLeft:5}}>Now</Text>
        </View>

    </View>
    </View> 

    <View style ={styles.headerTextView}>
        <Text style ={styles.headerText}>Categories</Text>
    </View>

    <View>
        <FlatList 
            horizontal ={true}
            showsHorizontalScrollIndicator ={false}
            data = {filterData}
            keyExtractor = {(item)=>item.id}
            extraData = {indexCheck}
            renderItem = {({item,index})=>(
                <Pressable
                        onPress ={() => {setIndexCheck(item.id), navigation.navigate("Search") }} >
                    <View style ={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                        <Image 
                            style = {{height:60,width:60,borderRadius:30}}
                            source = {item.image}
                             />
                        <View>
                            <Text style ={indexCheck === item.id ? {...styles.smallCardTextSected}:
                            {...styles.smallCardText}}>{item.name}</Text>
                        </View>
                    </View>
                </Pressable>
            )}
        />
    </View>
    <View style ={styles.headerTextView}>
        <Text style ={styles.headerText}>Main Meal</Text>
    </View>
    <View>     
        <FlatList 
           style ={{marginTop:10, marginBottom:10}} 
           horizontal ={true}
           data = {restaurantsData1}
           keyExtractor = {(item,index)=>index.toString()}   
           showsHorizontalScrollIndicator = {false}
           renderItem = {({item})=>(
               <View style ={{marginRight:5}}>
                   <FoodCard 
                       screenWidth  ={SCREEN_WIDTH*0.8}
                       images ={item.image}
                       restaurantName ={item.restaurantName}
                       farAway ={item.farAway}
                       businessAddress ={item.businessAddress}
                       averageReview ={item.averageReview}
                       numberOfReview ={item.numberOfReview}
                   />
               </View>
           )}   />
    </View>

    {/* Sides Section */}
    <View style ={styles.headerTextView}>
        <Text style ={styles.headerText}>Sides</Text>
    </View>
    <View>
        <FlatList 
           style ={{marginTop:10, marginBottom:10}} 
           horizontal ={true}
           data = {restaurantsData2}
           keyExtractor = {(item,index)=>index.toString()}   
           showsHorizontalScrollIndicator = {false}
           renderItem = {({item})=>(
               <View style ={{marginRight:5}}>
                   <FoodCard 
                       screenWidth  ={SCREEN_WIDTH*0.8}
                       images ={item.image}
                       restaurantName ={item.restaurantName}
                       farAway ={item.farAway}
                       businessAddress ={item.businessAddress}
                       averageReview ={item.averageReview}
                       numberOfReview ={item.numberOfReview}
                   />
               </View>
           )}  
        />
    </View>
    
    {/* Meats Section */}
    <View style ={styles.headerTextView}>
        <Text style ={styles.headerText}>Meats</Text>
    </View>
    <View>
        <FlatList 
           style ={{marginTop:10, marginBottom:10}} 
           horizontal ={true}
           data = {restaurantsData3}
           keyExtractor = {(item,index)=>index.toString()}   
           showsHorizontalScrollIndicator = {false}
           renderItem = {({item})=>(
               <View style ={{marginRight:5}}>
                   <FoodCard 
                       screenWidth  ={SCREEN_WIDTH*0.8}
                       images ={item.image}
                       restaurantName ={item.restaurantName}
                       farAway ={item.farAway}
                       businessAddress ={item.businessAddress}
                       averageReview ={item.averageReview}
                       numberOfReview ={item.numberOfReview}
                   />
               </View>
           )}  
        />
    </View>

    {/* Drinks Section */}
    <View style ={styles.headerTextView}>
        <Text style ={styles.headerText}>Drinks</Text>
    </View>
    <View>
        <FlatList 
           style ={{marginTop:10}} 
           horizontal ={true}
           data = {restaurantsData4}
           keyExtractor = {(item,index)=>index.toString()}   
           showsHorizontalScrollIndicator = {false}
           renderItem = {({item}) => (
               <View style ={{marginRight:5}}>
                   <FoodCard 
                       screenWidth  ={SCREEN_WIDTH*0.8}
                       images ={item.image}
                       restaurantName ={item.restaurantName}
                       farAway ={item.farAway}
                       businessAddress ={item.businessAddress}
                       averageReview ={item.averageReview}
                       numberOfReview ={item.numberOfReview}
                   />
               </View>
           )}  
        />
    </View>
</ScrollView>
</View>
    );
}