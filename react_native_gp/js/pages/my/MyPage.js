import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import CustomKeyPage from "./CustomKeyPage";
import NavigationBar from "../../common/NavigationBar";

export default class MyPage extends Component {

    render() {
        return(
            <View>
                <NavigationBar
                    title={'我的'}
                    style={{backgroundColor: '#6495ED'}}
                />
                <Text
                    style={styles.tips}
                    onPress={()=>{
                        this.props.navigator.push({
                            component: CustomKeyPage,
                            params: {...this.props}
                        })
                    }}
                >自定义标签页</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    tips: {
        fontSize: 29
    }
});