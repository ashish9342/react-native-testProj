import React from 'react';
import {View, Text} from 'react-native';
import styles from './HeaderStyles';

// Funtional Component
const header = props => {
  console.log('props', props);
  const {name, address} = props;
  // const name = props.name;
  // const address = props.address;

  // const {}
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{address}</Text>
    </View>
  );
};
export default header;
