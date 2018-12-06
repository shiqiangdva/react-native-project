import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Navigator
} from 'react-native';
import NavigationBar from '../common/NavigationBar';
import HomePage from './HomePage';

export default class WelcomePage extends Component {

    componentDidMount() {
        setTimeout(()=>{
            this.timer = this.props.navigator.resetTo({
                component: HomePage
            })
        },2000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        return(
            <View>
                <NavigationBar
                    title={'欢迎'}
                />
                <Text>来啦~老弟~</Text>
            </View>
        )
    }

}