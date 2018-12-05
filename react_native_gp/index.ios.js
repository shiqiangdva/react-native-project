/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Navigator,
    Image,
    View,
} from 'react-native';
// 引入tab组件
import TabNavigator from 'react-native-tab-navigator';
import ListViewTest from './ListViewTest';
import Boy from './Boy';


export default class react_native_gp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'tb_popular',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<TabNavigator>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_popular'}*/}
                        {/*selectedTitleStyle={{color:'red'}}*/}
                        {/*title="最热"*/}
                        {/*renderIcon={() => <Image style={styles.image} source={require('./res/image/ic_polular.png')}/>}*/}
                        {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/image/ic_polular.png')}/>}*/}
                        {/*badgeText="1"*/}
                        {/*onPress={() => this.setState({selectedTab: 'tb_popular'})}>*/}
                        {/*/!*{homeView}*!/*/}
                        {/*<View style={styles.page1}></View>*/}
                    {/*</TabNavigator.Item>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_trending'}*/}
                        {/*selectedTitleStyle={{color:'yellow'}}*/}
                        {/*title="趋势"*/}
                        {/*renderIcon={() => <Image style={styles.image} source={require('./res/image/ic_trending.png')}/>}*/}
                        {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]} source={require('./res/image/ic_trending.png')}/>}*/}
                        {/*// renderBadge={() => <CustomBadgeView/>}*/}
                        {/*onPress={() => this.setState({selectedTab: 'tb_trending'})}>*/}
                        {/*/!*{profileView}*!/*/}
                        {/*<View style={styles.page2}></View>*/}
                    {/*</TabNavigator.Item>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_favorite'}*/}
                        {/*selectedTitleStyle={{color:'red'}}*/}
                        {/*title="收藏"*/}
                        {/*renderIcon={() => <Image style={styles.image} source={require('./res/image/ic_polular.png')}/>}*/}
                        {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/image/ic_polular.png')}/>}*/}
                        {/*badgeText="1"*/}
                        {/*onPress={() => this.setState({selectedTab: 'tb_favorite'})}>*/}
                        {/*/!*{homeView}*!/*/}
                        {/*<View style={styles.page1}></View>*/}
                    {/*</TabNavigator.Item>*/}
                    {/*<TabNavigator.Item*/}
                        {/*selected={this.state.selectedTab === 'tb_my'}*/}
                        {/*selectedTitleStyle={{color:'yellow'}}*/}
                        {/*title="我的"*/}
                        {/*renderIcon={() => <Image style={styles.image} source={require('./res/image/ic_trending.png')}/>}*/}
                        {/*renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]} source={require('./res/image/ic_trending.png')}/>}*/}
                        {/*// renderBadge={() => <CustomBadgeView/>}*/}
                        {/*onPress={() => this.setState({selectedTab: 'tb_my'})}>*/}
                        {/*/!*{profileView}*!/*/}
                        {/*<View style={styles.page2}></View>*/}
                    {/*</TabNavigator.Item>*/}
                {/*</TabNavigator>*/}




                {/*<Navigator*/}
                    {/*initialRoute={{*/}
                        {/*component: Boy*/}
                    {/*}}*/}
                    {/*renderScene={(route, navigator) => {*/}
                        {/**/}
                        {/*// 这里注意!!!Component是从route.component中取出来的 不是react中的*/}
                        {/*// 不然会报错:inst.render is not a function*/}
                        {/**/}
                        {/*let Component = route.component;*/}
                        {/*return <Component navigator={navigator} {...route.params}/>*/}
                    {/*}}*/}
                {/*>*/}
                {/*</Navigator>*/}



                <ListViewTest/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor:'red'
    },
    page2: {
        flex: 1,
        backgroundColor:'yellow'
    },
    image: {
        width:22,
        height:22
    }
});

AppRegistry.registerComponent('react_native_gp', () => react_native_gp);
