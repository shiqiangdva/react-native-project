/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    Image,
    View,
} from 'react-native';
// 引入tab组件
import TabNavigator from 'react-native-tab-navigator';


export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'tb_popular',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_popular'}
                        selectedTitleStyle={{color: 'red'}}
                        title="最热"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/image/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('../../res/image/ic_polular.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_popular'})}>
                        {/*{homeView}*/}
                        <View style={styles.page1}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_trending'}
                        selectedTitleStyle={{color: 'yellow'}}
                        title="趋势"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/image/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}
                                                         source={require('../../res/image/ic_trending.png')}/>}
                        // renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'tb_trending'})}>
                        {/*{profileView}*/}
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_favorite'}
                        selectedTitleStyle={{color: 'blue'}}
                        title="收藏"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/image/ic_favorite.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'blue'}]}
                                                         source={require('../../res/image/ic_favorite.png')}/>}
                        onPress={() => this.setState({selectedTab: 'tb_favorite'})}>
                        {/*{homeView}*/}
                        <View style={styles.page3}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_my'}
                        selectedTitleStyle={{color: 'pink'}}
                        title="我的"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/image/ic_my.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'pink'}]}
                                                         source={require('../../res/image/ic_my.png')}/>}
                        // renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'tb_my'})}>
                        {/*{profileView}*/}
                        <View style={styles.page4}></View>
                    </TabNavigator.Item>
                </TabNavigator>

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
        backgroundColor: 'red'
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page3: {
        flex: 1,
        backgroundColor: 'blue'
    },
    page4: {
        flex: 1,
        backgroundColor: 'pink'
    },
    image: {
        width: 22,
        height: 22
    }
});
