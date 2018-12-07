import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput
} from 'react-native';
import NavigationBar from '../common/NavigationBar';
import DataRepository from '../expand/dao/DataRepository';
// import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component {

    constructor(props){
        super(props);
        this.dataRepository = new DataRepository();
        this.state={
            result: ''
        }
    }

    /**
     * 网址拼接
     * @param key
     * @returns {string}
     */
    genUrl(key) {
        return URL + key + QUERY_STR;
    }

    /**
     * 网络请求
     */
    onLoad() {
        let url = this.genUrl(this.text);
        console.log("url--->" + url);
        this.dataRepository.fetchNetRepository(url)
            .then(result=>{
                console.log("result--->" + JSON.stringify(result));
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error=>{
                console.log("error--->" + JSON.stringify(error));
                this.setState({
                    result: JSON.stringify(error)
                })
            })
    }

    render() {
        return(
            <View>
                <NavigationBar
                    title={'最热'}
                />
                <Text
                    onPress={()=>{
                        this.onLoad()
                    }}
                    style={styles.tip}>获取数据</Text>
                <TextInput
                    style={{height:30,borderWidth:1}}
                    onChangeText={text=>this.text = text}
                />
                <Text style={{height:500}}>{this.state.result}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tip: {
        fontSize: 29
    }
});