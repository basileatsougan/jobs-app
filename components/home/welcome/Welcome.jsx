import React from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import styles from './welcome.style'
import { COLORS, SIZES } from '../../../constants';

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Basile</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you lookong for?"          
          />
        </View>

      </View>




    </View>
  )
}

export default Welcome