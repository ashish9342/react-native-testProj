import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from './../../Global/Theme/colors';

import style from './HeaderStyles';

// const _onPress = () => {
//   console.log('pressed');
// };

const header = props => {
  const {name, address, onPress} = props;
  return (
    <View style={style.header}>
      <View style={style.imgcontainer}>
        <Icon name="user-circle" size={34} color={colors.white} />
      </View>

      <View style={style.info}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.address}>{address}</Text>
      </View>

      <View style={[style.imgcontainer, style.bell]}>
        <TouchableOpacity onPress={onPress}>
          <Ionicons name="md-qr-scanner" size={28} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View style={[style.imgcontainer, style.bell]}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="bell-o" size={28} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View style={[style.imgcontainer, style.bar]}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="navicon" size={28} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default header;
