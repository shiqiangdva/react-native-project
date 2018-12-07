import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import React from "react";


export default class ViewUtils{
    static getLeftButton(callback) {
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={callback}
        >
            <Image
                style={{width: 26,height:26,tintColor:'white'}}
                source={require('../../res/image/ic_arrow_back_white_36pt.png')}
            />
        </TouchableOpacity>
    }
}