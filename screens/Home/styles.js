import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    container:{
        flex:1,
        paddingTop:25
    },
    deliveryButton: {
        paddingHorizontal:20,
         borderRadius:15,
         paddingVertical:5
    },

    deliveryText:{
        marginLeft:5,
        fontSize:16
    },

    filterView:{flexDirection:"row" ,
                 alignItems:"center", 
                 justifyContent:"space-evenly",
                 marginHorizontal: 10,
                 marginVertical: 20
                },

    clockView:{flexDirection:"row",
                alignItems:'center',
                marginLeft:20,
                backgroundColor:"white",
                borderRadius:15,
                paddingHorizontal:5,
                marginRight:20
             },
    addressView:{flexDirection:"row",
                 backgroundColor:"white",
                 borderRadius:15,
                 paddingVertical:3,
                 justifyContent:"space-between",
                 paddingHorizontal:10
                },

    headerText:{
        color:'#5e6977',
        fontSize:24,
        fontWeight:"bold",
        paddingLeft:10,
    },
    headerTextView:{
        backgroundColor:'#e1e8ee',
        paddingVertical:3,
    },

    smallCard :{
        borderRadius:30,
        backgroundColor: '#e1e8ee',
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },
    smallCardSelected:{
        borderRadius:30,
        backgroundColor: "#FFCC2A",
        justifyContent:"center",
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:100
    },
    smallCardTextSected :{
        fontWeight:"bold",
        color:"white"
    },
    smallCardText :{
        fontWeight:"bold",
        color: "white"
    },
    floatButton: {
        position:'absolute',
        bottom:10,right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,height:60,
        borderRadius:30,
        alignItems:'center'
    }
})