import React, {useState} from'react'
import { StyleSheet, Text,Alert, FlatList, View, ScrollView, Dimensions, TouchableOpacity, Modal} from 'react-native';
import RestaurantHeader from '../components/RestaurantHeader';
import { MaterialCommunityIcons } from'@expo/vector-icons';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import FoodCard from '../components/FoodCard';
import { useDispatch, useSelector  } from "react-redux"; 

const SCREEN_WIDTH = Dimensions.get('window').width

    const RestaurantHomeScreen = ({navigation, route}) => {
        // Dispatch function
        const dispatch = useDispatch();

        const selectedItem = (item, checkboxValue) => dispatch({
            type: 'ADD_TO_CART',
            payload: {
                ...item, 
                //   restaurantName: restaurantName,
                checkboxValue: checkboxValue},
              // payload: {item},
        }); 
    //   const items = useSelector(
    //     (state) => state.cartReducer.selectedItems.items
    //   );
    //   const total = items
    //   .map((item) => Number(item.price.replace("$", "")))
    //   .reduce((prev, curr) => prev + curr, 0);

    //   const totalUSD = total.toLocaleString("en", {
    //     style: "currency",
    //     currency: "USD",
    //   });

    // console.log(totalUSD);

    const cartItems = useSelector(
        (state) => state.cartReducer.selectedItems.items
      );        
    
    const isFoodInCart = (restaurantsData1, cartItems) =>
    Boolean(cartItems.find((item) => item.title === restaurantsData1.title));

    // const orderAlert = () =>
    // Alert.alert(
    //   "Succesful",
    //   "Your order at Marvise has been placed for @200.00",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () =>  navigation.navigate("MyOrderScreen") }
    //   ]
    // );

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'mainmeal', title: 'Main Meal' },
    { key: 'sides', title: 'Sides' },
    { key: 'meats', title: 'Meats' },
    { key: 'drinks', title: 'Drinks' },
  ]);

//   01. MainMeal Function
  const MainMealRoute = () => (
    <View style={{flex:1}}>  
        <FlatList 
           style ={{marginTop:10}} 
           horizontal ={false}
           data = {restaurantsData1}
           keyExtractor = {(item,index)=>index.toString()}   
           showsHorizontalScrollIndicator = {false}
           renderItem = {({item})=>(
               <View style ={{marginRight:20, flexDirection:'row', paddingTop:20}}>
                   <View style={{marginLeft: 10, marginTop:60}}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#ffcc2a"
                        unfillColor="#FFFFFF"
                        // text="Custom Checkbox"
                        iconStyle={{ borderColor: "black"}}
                        onPress={(isChecked) => {}}
                        // isChecked={isFoodInCart(restaurantsData1, cartItems)}
                        // onPress={(checkboxValue) => selectedItem(restaurantsData1, checkboxValue)} 
                        />
                   </View>
                   <FoodCard 
                       screenWidth = {SCREEN_WIDTH * 0.8}
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
           style ={{marginTop:10, marginBottom:10}} 
           horizontal ={false}
           data = {restaurantsData2}
           keyExtractor = {(item,index)=>index.toString()}   
           showsHorizontalScrollIndicator = {false}
           renderItem = {({item})=>(
               <View style ={{marginRight:20, flexDirection:'row', paddingTop:20}}>
                   <View style={{marginLeft: 10, marginTop:60}}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#ffcc2a"
                        unfillColor="#FFFFFF"
                        // text="Custom Checkbox"
                        iconStyle={{ borderColor: "black"}}
                        onPress={(isChecked) => {}} />
                   </View>
                   <FoodCard 
                       screenWidth = {SCREEN_WIDTH * 0.8}
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
//   Meats Function
  const MeatsRoute = () => (
    <View style={{flex:1}}>  
        <FlatList 
           style ={{marginTop:10, marginBottom:10}} 
           horizontal ={false}
           data = {restaurantsData3}
           keyExtractor = {(item,index)=>index.toString()}   
           showsHorizontalScrollIndicator = {false}
           renderItem = {({item})=>(
               <View style ={{marginRight:20, flexDirection:'row', paddingTop:20}}>
                   <View style={{marginLeft: 10, marginTop:60}}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#ffcc2a"
                        unfillColor="#FFFFFF"
                        // text="Custom Checkbox"
                        iconStyle={{ borderColor: "black"}}
                        onPress={(isChecked) => {}} />
                   </View>
                   <FoodCard 
                       screenWidth = {SCREEN_WIDTH * 0.8}
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
//   Drinks function
  const DrinksRoute = () => (
    <View style={{flex:1}}>  
        <FlatList 
           style ={{marginTop:10, marginBottom:10}} 
           horizontal ={false}
           data = {restaurantsData4}
           keyExtractor = {(item,index)=>index.toString()}   
           showsHorizontalScrollIndicator = {false}
           renderItem = {({item})=>(
               <View style ={{marginRight:20, flexDirection:'row', paddingTop:20}}>
                   <View style={{marginLeft: 10, marginTop:60}}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#ffcc2a"
                        unfillColor="#FFFFFF"
                        // text="Custom Checkbox"
                        iconStyle={{ borderColor: "black"}}
                        onPress={(isChecked) => {}} />
                   </View>
                   <FoodCard 
                       screenWidth = {SCREEN_WIDTH * 0.8}
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
    meats: MeatsRoute,
    drinks: DrinksRoute
  })

    const { id, restaurant } = route.params

        const restaurantsData = [
            {restaurantName:"Main Meal", farAway:"21.2",
            businessAddress:"Shop 5, Red Brick Complex, UNILAG",images:require('../assets/rice.png'),
            averageReview:"#159.99",numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
            collectTime:5, foodType:"Burgers, Wraps,Milkshakes..." ,
            productData:[{name:"Jollof Rice", price:29.30,image:"https://i.ibb.co/nmcWFXS/Nigerian-Jollof-Rice-with-thyme.jpg"},
            {name:"Fried Rice", price: 50.80,image:"https://i.ibb.co/5TzZMNv/Subject-Traditional-authentic-Chinese-Fried-rice-served-in-a-bowl.jpg"},
            {name:"White Rice", price:70,image:"https://i.ibb.co/Vx0f5VQ/White-boiled-rice-with-spicy-ofada-stew-a-Nigerian-traditional-meal-ready-to-eat.jpg"},
              ],
            id:0},
            
            {restaurantName:"Sides", farAway:"12.7",businessAddress:"Shop 5, Red Brick Complex, UNILAG",
            images: require("../assets/moimoi.jpg"),
            averageReview:"#259.99", numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
            discount:20,deliveryTime:30,collectTime:10, foodType:"Chicken,Chicken wings... ",
            productData:[{name:"MoiMoi", price:29.30,image:"https://i.ibb.co/vxVhygc/images-q-tbn-ANd9-Gc-Rq1ba-AIYm-RBgs-QHFw-Ol-Gnp-Dl-Y7r-IUEx-Nw-usqp-CAU.jpg"},
            {name:"Beans", price:50.80,image:"https://i.ibb.co/RcJH5fj/images-q-tbn-ANd9-Gc-RO20-Hdgbr-XCA2-Pn-F5g-RUMKRL-jx0-Wq2j-QRA-usqp-CAU.jpg"},
            {name:"Plantain", price:50,image:"https://i.ibb.co/wpFP4yd/images-q-tbn-ANd9-Gc-Q6k-Uz-Kq-I5wl-Dauzvp-UKd-Ly0-Gs-Y8-A0-Gh49kw-usqp-CAU.jpg"},
            {name:"Egg", price:50,image:"https://i.ibb.co/vZFkZHX/images-q-tbn-ANd9-Gc-Rkcr-AVrm8-H5f-H5v-K3fi2-WZch-PS1-Cc2r7v-Fv-Q-usqp-CAU.jpg"},
            {name:"Spaghetti", price:90,image:"https://i.ibb.co/S5txBJ8/images-q-tbn-ANd9-Gc-SPTMDm-Czchx90x-VTLM5-R5-kd-MOm-Ke-JTp-LA4-A-usqp-CAU.jpg"},
                ],
            id:1},
            
            {restaurantName:"Meats", farAway:"5",businessAddress:"Shop 5, Red Brick Complex, UNILAG",
            images: require("../assets/ham.png"),
             coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: "#299.99",numberOfReview: 1272,
              discount:12, deliveryTime:25,collectTime:15,foodType:"Flame grilled beef Burgers",
             productData:[{name:"Chicken", price:29.30,image:"https://i.ibb.co/cyZ1DqQ/images-q-tbn-ANd9-Gc-Si-TH-66h-Nnq-Cq3a-Lq-Gg-Ww-Y-LYKy-Gqjj-NWp-Vw-usqp-CAU.jpg"},
              {name:"Beef", price:50.80, image:"https://i.ibb.co/rwkYHHc/images-q-tbn-ANd9-Gc-T6ikdcq-bp-IYKLif-Zt0y-Jjg3o-D-9u-Jo-Yof-TA-usqp-CAU.jpg"},
              {name:"Fish", price:70, image:"https://i.ibb.co/JdQB5Mz/images-q-tbn-ANd9-Gc-Tnm3p-DTYm-Wt-IJ6-T6fc-Hv-FP3-59j0hl-rp78-A-usqp-CAU.jpg"}
            ],
             id:2},
            
            {restaurantName:"Drinks", farAway:"7",businessAddress:"Shop 5, Red Brick Complex, UNILAG ",
            images: require("../assets/champagne.png"),
            averageReview: "#499.99", numberOfReview:700, coordinates: {lat: -26.1845336, lng: 28.2481691},
            discount:null,deliveryTime:20,collectTime:10,foodType:"Chicken pizza, Vegetarian pizza...",
            productData:[{name:"Coke", price:29.30,image: "https://i.ibb.co/f1gk7GR/images-q-tbn-ANd9-Gc-Td-Q5-IXFi4-Xd-Yt-Uuimv-J99h-JNk8xya-Ad-Kt-PQ-usqp-CAU.jpg"},
              {name:"UNILAG Water", price:50.80, image: "https://i.ibb.co/tJkNXz0/bottle-pics.jpg"},
              {name:"Malta Guiness", price:70, image: "https://i.ibb.co/k2FLWjQ/images-q-tbn-ANd9-Gc-SBuh-Wp84-Rsc-KB7e-Jpc-DWShkawcc-Kl3-R-FO7w-usqp-CAU.jpg"},
                ],
            id:3},
            ]

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
                <View>
                     <RestaurantHeader id ={id} navigation ={navigation} restaurantName ={route.params.name} />
                     {restaurantsData[id].discount &&
                        <View style ={styles.view1}>
                            <Text style ={styles.text1}>GET {restaurantsData[id].discount}% OFF ON FOOD TOTAL</Text>
                        </View>}
                </View>
                <ScrollView>
                <View style ={styles.view2}>
                    <View style ={styles.view3}>
                        <Text style ={styles.text2} >{restaurantsData[id].restaurantName}</Text>
                        <Text style ={styles.text3}>{restaurantsData[id].foodType}</Text>
                        <View style ={styles.view4}>
                            <MaterialCommunityIcons 
                                name="star" 
                                size={15} 
                                color={'#86939e'} />
                            <Text style ={styles.text4}>{restaurantsData[id].averageReview}</Text>
                            <Text style ={styles.text5}>{restaurantsData[id].numberOfReview}</Text>
                            <MaterialCommunityIcons 
                                name="map-marker" 
                                size={15} 
                                color = {'#86939e'} />
                            <Text style ={styles.text6}>{restaurantsData[id].farAway} meter away</Text> 
                        </View>
                    </View>
                    <View style ={styles.view5}>
                       <Text style = {styles.text6}>Collect</Text>
                       <View style ={styles.view7}>
                            <Text style ={styles.text7}>{restaurantsData[id].collectTime}</Text>
                            <Text style ={styles.text8}>min</Text>
                       </View>

                    </View>
                    <View style ={styles.view8}>
                        <Text style ={styles.text6}>Delivery</Text>
                        <View style ={styles.view9}>
                            <Text style = {styles.text9}>{restaurantsData[id].deliveryTime}</Text>
                            <Text style ={styles.text11}>min</Text>
                        </View>
                    </View>
                </View>
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
        <TouchableOpacity
            onPress={() => navigation.navigate("ViewCartScreen")}>
            <View style ={styles.view11}>
                <View style ={styles.view12}>
                    <Text style ={styles.text13}>View Cart</Text>
                    <View style ={styles.view13}>
                    <Text style ={styles.text13}> 0 </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    )
}
export default RestaurantHomeScreen

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
