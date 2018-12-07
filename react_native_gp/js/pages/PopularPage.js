import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ListView,
    RefreshControl
} from 'react-native';
import NavigationBar from '../common/NavigationBar';
import DataRepository from '../expand/dao/DataRepository';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import RepositoryCell from '../common/RepositoryCell';
import LanguageDao, {FLAG_LANGUAGE} from "../expand/dao/LanguageDao";

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component {

    constructor(props){
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.state={
            languages:[]
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.languageDao.fetch()
            .then(result => {
                this.setState({
                    languages: result
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        let content = this.state.languages.length>0?
            <ScrollableTabView
                tabBarBackgroundColor={"#2196F3"}
                tabBarActiveTextColor={"mintcream"}
                tabBarInactiveTextColor={"white"}
                tabBarUnderlineStyle={{backgroundColor:"#e7e7e7",height:2}}
                renderTabBar={()=><ScrollableTabBar/>}
            >
                {this.state.languages.map((result, i, arr)=>{
                    let lan = arr[i];
                    return lan.checked? <PopularTab key={i} tabLabel={lan.name}></PopularTab>:null;
                })}
            </ScrollableTabView>:null;
        return(
            <View style={{flex:1}}>
                <NavigationBar
                    title={'最热'}
                    statusBar={{
                        backgroundColor: '#2196F3'
                    }}
                />
                {content}
            </View>
        )
    }

}

class PopularTab extends Component{
    constructor(props){
        super(props);
        this.dataRepository = new DataRepository();
        this.state={
            result: '',
            dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2}),
            isLoading: false
        }
    }

    componentDidMount() {
        this.onLoad();
    }

    /**
     * 网址拼接
     * @param key
     * @returns {string}
     */
    genUrl() {
        return URL + this.props.tabLabel + QUERY_STR;
    }

    /**
     * 网络请求
     */
    onLoad() {
        this.setState({
            isLoading: true
        });
        let url = this.genUrl();
        console.log("---url---:" + url);
        this.dataRepository.fetchNetRepository(url)
            .then(result=>{
                console.log("---result---:" + JSON.stringify(result));
                this.setState({
                    // result: JSON.stringify(result)
                    dataSource:this.state.dataSource.cloneWithRows(result.items),
                    isLoading: false
                })
            })
            .catch(error=>{
                this.setState({
                    result: JSON.stringify(error)
                })
            })
    }

    renderRow(data) {
        return <RepositoryCell data={data}/>
    }

    render() {
        return <View style={{flex:1}}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data)=>this.renderRow(data)}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={()=>this.onLoad()}
                        colors={['#2196F3']}
                        tintColor={'#2196F3'}
                        title={'loading...'}
                        titleColor={'#2196F3'}
                    />
                }
            />
        </View>
    }
}