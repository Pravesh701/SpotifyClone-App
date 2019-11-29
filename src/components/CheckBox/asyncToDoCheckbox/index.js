import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

// Custom Imports
import checkImage from '../../../images/checkBox/checked.png';
import unCheckedImage from '../../../images/checkBox/unchecked.png';
import styles from '../../../styles/MobXStyle/style';

/**
 * Custom CheckBox Functional Componet
 * @param {onpressCheckBox, isCompleted} param0
 */

const CheckBox = ({onpressCheckBox, isCompleted}) => (
  <TouchableOpacity style={styles.checkBox} onPress={() => onpressCheckBox()}>
    <Image
      source={isCompleted ? checkImage : unCheckedImage}
      style={styles.checkBoxImage}
    />
  </TouchableOpacity>
);

export default CheckBox;
