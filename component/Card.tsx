// Card.tsx

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface CardProps {
  title: string;
  description: string;
  imageSource: any; // This should be the require statement or image URL
}

const Card = ({ title, description, imageSource }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default Card;