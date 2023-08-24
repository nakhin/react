// ForestHome.tsx

import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, BackHandler, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from './Card'; // Import the Card component from the same directory
import { Appbar } from 'react-native-paper';

const cardData = [
  {
    title: 'SonPhao School',
    description: 'Khamkerd district, Bolikhamxay Province',
    imageSource: require('../assets/card1_image.jpg'), // Adjust the image path
    
  },
  {
    title: 'SOS School',
    description: 'Civilly Village, Xaythany district, Vientiane Capital',
    imageSource: require('../assets/card2_image.jpeg'), // Adjust the image path
  },
  {
    title: 'Hand of Hope Center',
    description: 'Savang Village, Chanthabouly district, Vientiane Capital',
    imageSource: require('../assets/card3_image.jpeg'), // Adjust the image path
  },
  {
    title: 'KM67 School',
    description: 'Namjaeng Village, Phoning district, Vientiane Province',
    imageSource: require('../assets/card4_image.jpeg'), // Adjust the image path
  },
  // Add more card data as needed
];

const ForestHome = () => {
  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false, // Hide the default header
  //   });
  // }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      {/* Add the Appbar component */}
      {/* <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Choose Foster Home" />
      </Appbar.Header> */}

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose Foster Home</Text>
        </View>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageSource={card.imageSource}
          />
        ))}
      </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  containerr: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    marginLeft: 16,
    padding: 8,
  },
  backButtonText: {
    fontSize: 18,
    color: 'blue',
  },
});

export default ForestHome;