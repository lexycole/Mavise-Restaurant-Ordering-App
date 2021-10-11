import React from 'react'
import { StyleSheet, Text, View,Dimensions,FlatList } from 'react-native'
import SearchResultCard from '../components/SearchResultCard';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation,route}) => {
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

    return (
        <View style ={styles.container}>
            <View>  
                <FlatList 
                     style ={{backgroundColor: "#fff"}}
                    data = {restaurantsData}
                    keyExtractor ={(item,index) =>index.toString()}
                    renderItem ={({item,index}) => (
                        <SearchResultCard
                            screenWidth = {SCREEN_WIDTH}
                            images = {item.images}
                            averageReview ={item.averageReview}
                            numberOfReview ={item.numberOfReview}
                            restaurantName ={item.restaurantName}
                            farAway ={item.farAway}
                            businessAddress ={item.businessAddress}
                            productData ={item.productData}
                            OnPressRestaurantCard ={()=>{navigation.navigate("RestaurantHomeScreen", {id:index,restaurant:item.restaurantName})}}
                        />        
                          )}
                     ListHeaderComponent ={
                        <View>
                            <Text style ={styles.listHeader}>{restaurantsData.length} Result for {route.params.item}</Text>
                        </View>
                     }   
                     showsVerticalScrollIndicator ={false}
                />
            </View>
           
        </View>
    )
}
export default SearchResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    listHeader: {
        color : '#43484d',
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
    }
})
