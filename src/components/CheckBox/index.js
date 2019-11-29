import React from 'react'
import checkImage from '../../images/checkBox/checked.png';
import unCheckedImage from '../../images/checkBox/unchecked.png';
import styles from '../../styles/MobXStyle/style';
import { TouchableOpacity, Text , Image} from 'react-native';

const CheckBox = ({selected, onPress,indexArray, text, currentIndex, index}) => (
    <TouchableOpacity 
        style={styles.checkBox}
        onPress={onPress}>
        <Image 
            source = {(selected &&   currentIndex == index) ? checkImage : unCheckedImage}
            style = {styles.checkBoxImage}
            img
        />
        {/* <Text style={styles.textStyle}> {text} </Text> */}
    </TouchableOpacity>
)

export default CheckBox