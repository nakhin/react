// import React from 'react';
// import {SafeAreaView, View, Text, StyleSheet,Button, Alert,Image} from 'react-native';




//  export default function App() {

  
//   return (

    
//     <SafeAreaView>
//      <View style = {styles.view1}>
//       <Text style = {styles.text1}>Heartgifts</Text>
//      </View>
     
//     <View style={{alignItems:"center" , top:10}} >
//       <Image source={require("./image/home2.jpg")} />
//     </View>
      
//     <View style = {styles.view2}>
//       <Text style = {styles.text2}>Select where do you want to donate</Text>
//      </View>

     
//      <View style={styles.view3}>
//         <Image source={require('./image/shelter.png')} style={{width:100,borderColor:"black",borderWidth:2,borderRadius:10,}}></Image> 
//         <Text style = {styles.text3}>Foster home</Text>
//         <Image source={require('./image/help.png')} style={{width:100,borderColor:"black",borderWidth:2,borderRadius:10, left:80}}></Image>
//         <Text style = {styles.text4}>Homeless</Text>
//      </View>
     
//      <View style={styles.view4}>
//      <Image source={require('./image/disability.png')} style={{width:100,borderColor:"black",borderWidth:2,borderRadius:10,}}></Image>
//      <Text style = {styles.text3}>Disable people</Text>
//      <Image source={require('./image/flooded-house.png')} style={{width:100,borderColor:"black",borderWidth:2,borderRadius:10,left:80 }} ></Image>
//      <Text style = {styles.text4}>Flood victim</Text>
//      </View>
     

//     </SafeAreaView>
//   );


  

//  }
 


//   const styles = StyleSheet.create({
//     view1: {
//       position:"relative",
//       margin:10,
//       top:20
//     },
//     view3: {
//       flexDirection: "row",
//       left: 50,
//       marginTop:15,
      
//     },
//     view2: {
//      position:"relative",
//      marginTop:15,
//      alignItems:"center" 
//    },
//    view4: {
//     flexDirection: "row",
//     left: 50,
//     marginTop:50,
    
//   },
  
 
//     text1:{
      
//       color: "black",
//       fontSize:30,
//       fontWeight:"bold"
//     },
//     text2:{
      
//       color: "black",
//       fontSize:20,
//       fontWeight:"bold",
      
      
//     },
//     text3:{
      
//         color: "black",
//         fontSize:15,
//         fontWeight:"bold",
//         left:10,
//         top:100,
//         position:"absolute"
      
        

//       },
//       text4:{
      
//         color: "black",
//         fontSize:15,
//         fontWeight:"bold",
//         left:180,
//         top:100,
//         position:"absolute"
      
        

//       },
//       text5:{
      
//         color: "black",
//         fontSize:15,
//         fontWeight:"bold",
//         alignContent:"center",
//         left:50,
//         top:100
//       },
//       text6:{
      
//         color: "black",
//         fontSize:15,
//         fontWeight:"bold",
//         alignContent:"center",
//         left:250,
//         top:5
//       },
//       image: {
//         width: 100,
//         height: 100,
//         left: 50,
//         top: 200,
//         position: "absolute",
//         borderColor:"black",
//         borderWidth:2,
//         borderRadius:10,
//       }
//  });

import React from 'react';
import ForestHome from './component/fosterhome'; // Import the ForestHome component
import Home from './component/home';
const App = () => {
  return <Home />;
};

export default App;