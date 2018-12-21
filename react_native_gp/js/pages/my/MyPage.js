/**
 * Created by penn on 2016/12/14.
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableHighlight,
    Image
} from 'react-native'
import CustomKeyPage from './CustomKeyPage'
import SortKeyPagePage from './SortKeyPagePage'
import {FLAG_LANGUAGE} from "../../expand/dao/LanguageDao";
import NavigationBar from '../../../js/common/NavigationBar';
import {MORE_MENU} from '../../common/MoreMenu';
import GlobalStyles from '../../../res/styles/GlobalStyles';
import ViewUtils from '../../util/ViewUtils';
import AboutPage from "../about/AboutPage";

export default class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            what: ''
        }
    }

    onClick(tab) {
        let TargetComponent, params = {...this.prop, menuType: tab};

        switch (tab) {
            // 自定义语言
            case MORE_MENU.Custom_Language:
                TargetComponent=CustomKeyPage;
                params.flag=FLAG_LANGUAGE.flag_language;
                break;
            // 自定义标签
            case MORE_MENU.Custom_Key:
                TargetComponent=CustomKeyPage;
                params.flag=FLAG_LANGUAGE.flag_key;
                break;
            // 移除标签
            case MORE_MENU.Remove_Key:
                TargetComponent=CustomKeyPage;
                params.flag=FLAG_LANGUAGE.flag_key;
                params.isRemoveKey = true;
                break;
            // 标签排序
            case MORE_MENU.Sort_Key:
                TargetComponent=SortKeyPagePage;
                params.flag=FLAG_LANGUAGE.flag_key;
                break;
            // 语言排序
            case MORE_MENU.Sort_Language:
                TargetComponent=SortKeyPagePage;
                params.flag=FLAG_LANGUAGE.flag_language;
                break;
            // 自定义主题
            case MORE_MENU.Custom_Theme:
                break;
            // 关于作者
            case MORE_MENU.About_Author:
                break;
            // 关于页面
            case MORE_MENU.About:
                TargetComponent=AboutPage;
                break;
        }

        if (TargetComponent) {
            this.props.navigator.push({
                component: TargetComponent,
                params: params
            })
        }
    }

    getItem(tag, icon, text) {
        return ViewUtils.getSettingItem(
            () => this.onClick(tag),
            icon,
            text,
            {tintColor: '#2196F3'},
            null
        )
    }

    render() {
        let navigationBar = <NavigationBar
            title='我的'
            style={{backgroundColor: "#2196F3"}}
        />;
        return (
            <View style={GlobalStyles.root_container}>
                {navigationBar}
                <ScrollView>
                    <TouchableHighlight
                        onPress={() => this.onClick(MORE_MENU.About)}
                    >
                        <View style={[styles.item, {height: 80}]}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image
                                    source={require('../../../res/image/ic_trending.png')}
                                    style={[{width: 40, height: 40, marginRight: 10}, {tintColor: '#2196F3'}]}
                                />
                                <Text>GitHub Popular</Text>
                            </View>
                            <Image
                                source={require('../../../res/image/ic_tiaozhuan.png')}
                                style={[
                                    {marginRight: 10, height: 22, width: 22},
                                    {tintColor: '#2196F3'}
                                ]}
                            />
                        </View>
                    </TouchableHighlight>
                    {/*线*/}
                    <View style={GlobalStyles.line}/>

                    {/*趋势管理*/}
                    <Text style={styles.groupTitle}>趋势管理</Text>
                    {/*自定义语言*/}
                    <View style={GlobalStyles.line}/>
                    {this.getItem(
                        MORE_MENU.Custom_Language,
                        require('./img/ic_custom_language.png'),
                        '自定义语言'
                    )}
                    {/*语言排序*/}
                    <View style={GlobalStyles.line}/>
                    {this.getItem(
                        MORE_MENU.Sort_Language,
                        require('./img/ic_swap_vert.png'),
                        '语言排序'
                    )}

                    {/*标签管理*/}
                    <View style={GlobalStyles.line}/>
                    <Text style={styles.groupTitle}>标签管理</Text>
                    {/*自定义标签*/}
                    <View style={GlobalStyles.line}/>
                    {this.getItem(
                        MORE_MENU.Custom_Language,
                        require('./img/ic_custom_language.png'),
                        '自定义标签'
                    )}
                    {/*标签排序*/}
                    <View style={GlobalStyles.line}/>
                    {this.getItem(
                        MORE_MENU.Sort_Key,
                        require('./img/ic_swap_vert.png'),
                        '标签排序'
                    )}
                    {/*标签移除*/}
                    <View style={GlobalStyles.line}/>
                    {this.getItem(
                        MORE_MENU.Remove_Key,
                        require('./img/ic_remove.png'),
                        '标签移除'
                    )}

                    {/*设置*/}
                    <View style={GlobalStyles.line}/>
                    <Text style={styles.groupTitle}>设置</Text>
                    {/*自定义主题*/}
                    <View style={GlobalStyles.line}/>
                    {this.getItem(
                        MORE_MENU.Custom_Theme,
                        require('./img/ic_view_quilt.png'),
                        '自定义主题'
                    )}
                    {/*关于作者*/}
                    <View style={GlobalStyles.line}/>
                    {this.getItem(
                        MORE_MENU.About_Author,
                        require('./img/ic_insert_emoticon.png'),
                        '关于作者'
                    )}
                </ScrollView>
            </View>)
    }
}
const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        height: 60,
        backgroundColor: 'white',
    },
    groupTitle: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        color: 'gray'
    }
});
