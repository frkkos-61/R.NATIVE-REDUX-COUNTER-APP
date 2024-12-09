import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = props => {
  const {title, color} = props;
  return (
    <TouchableOpacity
      {...props}
      style={{
        padding: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color,
        borderRadius: 8,
      }}>
      <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
