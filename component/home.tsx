import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet,Button, Alert,Image, TouchableOpacity,ScrollView, TouchableWithoutFeedback} from 'react-native';
import { TextInput } from 'react-native-paper';



var name: string;


 export default function home() {

  
  return (
    <TouchableWithoutFeedback>
    <ScrollView contentContainerStyle={styles.container}>
    <SafeAreaView>
     <View style = {styles.view1}>
      <Text style = {styles.text1}>Heartgifts</Text>
     </View>
     
    <View style={{alignItems:"center" , top:10}} >
      <Image source={require('../image/home2.jpg')} />
    </View>
      
    <View style = {styles.view2}>
      <Text style = {styles.text2}>Select where do you want to donate</Text>
     </View>

     
     <View style={styles.view3}>
        <TouchableOpacity >
          <TouchableOpacity  >
        <Image source={require('../image/shelter.png')} style={{width:100,borderColor:"black",borderWidth:2,borderRadius:10,}}></Image> 
        <Text style = {styles.text3}>Foster home</Text></TouchableOpacity>
</TouchableOpacity>

        <Image source={require('../image/help.png')} style={{width:100,borderColor:"black",borderWidth:2,borderRadius:10, left:80}}></Image>
        <Text style = {styles.text4}>Homeless</Text>

        
     </View>
     
     <View style={styles.view4}>
     <Image source={require('../image/disability.png')} style={{width:100,borderColor:"black",borderWidth:2,borderRadius:10,}}></Image>
     <Text style = {styles.text3}>Disable people</Text>
     <Image source={require('../image/flooded-house.png')} style={{width:100,borderColor:"black",borderWidth:2,borderRadius:10,left:80 }} ></Image>
     <Text style = {styles.text4}>Flood victim</Text>
     </View>
     <View>
      <Text style={styles.text5}> Learn more about us</Text>
      <Text style={styles.text6}>We've developed an application for everyone, restaurants, hotels, or anyone who wants to donate to a community through our suggestion. It is helpful for those who want convenience in donating with our app to help the community and save the environment.</Text>
      <Text style={styles.text7}> Contact us</Text>
     
     </View>
    
     <View>
      <TextInput 
      style={styles.textinput}
      placeholder= " FULL NAME"
      onChangeText={(text: string) => {
        name = text;
      }}
      />
      <TextInput 
      style={styles.textinput}
      placeholder= " E-mail"
      keyboardType="email-address"
      />
      <TextInput 
      style={styles.textinput}
      placeholder= " Message"
      keyboardType="email-address"
      />
     </View>
     
     <Button title="Submit" onPress={() =>{
      Alert.alert("Successfully");
     }}/> 
     

    </SafeAreaView>
    </ScrollView>
    
    </TouchableWithoutFeedback>
  );



 }
 


  const styles = StyleSheet.create({
    view1: {
      position:"relative",
      margin:10,
      top:20
    },
    view3: {
      flexDirection: "row",
      left: 50,
      marginTop:30,
    
    },
    view2: {
     position:"relative",
     marginTop:250,
     alignItems:"center" 
   },
   view4: {
    flexDirection: "row",
    left: 50,
    marginTop:50,
    
  },
  view5: {
    borderWidth:1,
    borderColor:"pink",
    borderRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
    
  },
  text:{
    fontSize:20,
    color:"black"
  },
  textinput:{
    borderWidth:1,
    borderColor:"pink",
    borderRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
    
    
  },
  Button:{
    color:"yellow",
  borderWidth:1,
    borderColor:"pink",
    borderRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
 
    text1:{
      
      color: "black",
      fontSize:30,
      fontWeight:"bold"
    },
    text2:{
      
      color: "black",
      fontSize:20,
      fontWeight:"bold",
      
      
    },
    text3:{
      
        color: "black",
        fontSize:15,
        fontWeight:"bold",
        left:10,
        top:100,
        position:"absolute"
      
        

      },
      text4:{
      
        color: "black",
        fontSize:15,
        fontWeight:"bold",
        left:180,
        top:100,
        position:"absolute"
      
        

      },
      text5:{
      
        color: "black",
        fontSize:20,
        fontWeight:"bold",
        alignContent:"center",
        top:30,
        left:90,
       
      },
      text6:{
      
        color: "black",
        fontSize:15,
        
        alignContent:"center",
        left:10,
        top:50,
        marginEnd:20,
        marginBottom:50
      
      },
      text7:{
      
        color: "black",
        fontSize:20,
        fontWeight:"bold",
        alignContent:"center",
        top:30,
        left:120,
        marginBottom:50
      },
      image: {
        width: 100,
        height: 100,
        left: 50,
        top: 200,
        position: "absolute",
        borderColor:"black",
        borderWidth:2,
        borderRadius:10,
      },
      container: {
        padding: 16
      }
 });