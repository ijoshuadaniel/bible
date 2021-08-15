import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {imageIconStyles} from 'constants/globalstyles';
import {homeOrange, readBlack, menuBlack} from 'constants/icons';

import {styles} from './styles';

const CustomFooter = () => {
  return (
    <View style={styles.CustomFooter}>
      <TouchableOpacity>
        <View style={styles.CustomFooter_tabs}>
          <Image
            style={{...imageIconStyles, marginBottom: 5}}
            source={{uri: homeOrange}}
          />
          <Text>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.CustomFooter_tabs}>
          <Image
            style={{...imageIconStyles, marginBottom: 5}}
            source={{uri: readBlack}}
          />
          <Text>Read</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.CustomFooter_tabs}>
          <Image
            style={{...imageIconStyles, marginBottom: 5}}
            source={{uri: menuBlack}}
          />
          <Text>More</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomFooter;
