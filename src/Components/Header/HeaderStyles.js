import {StyleSheet} from 'react-native';
import colors from './../../Global/Theme/colors';

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignContent: 'center',
    // alignItems: 'flex-end',
  },
  imgcontainer: {
    flex: 1,
    justifyContent: 'center',
  },
  info: {
    flex: 6,
  },
  name: {fontSize: 12, color: colors.text},
  bar: {
    alignItems: 'flex-end',
  },
  bell: {
    alignItems: 'flex-end',
  },
  img: {width: 50, height: 50},
  address: {fontSize: 14},
  imgsrc: {width: 40, height: 40},
});

export default style;
