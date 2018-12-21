import React, {Component} from 'react';
import {
    View,
    Linking
} from 'react-native';

import ViewUtils from "../../util/ViewUtils";
import GlobalStyles from '../../../res/styles/GlobalStyles';
import {MORE_MENU} from "../../common/MoreMenu";
import AboutCommon, {FLAG_ABOUT} from "./AboutCommon";
import WebViewPage from "../WebViewPage";


export default class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.aboutCommon = new AboutCommon(props, (div) => this.updateState(div), FLAG_ABOUT.flag_about);
    }

    updateState(dic) {
        this.setState(dic)
    }

    onClick(tab) {
        let TargetComponent, params = {...this.prop, menuType: tab};

        switch (tab) {
            // 关于作者
            case MORE_MENU.About_Author:

                break;
            // 官网
            case MORE_MENU.WebSite:
                TargetComponent = WebViewPage;
                // params.url = 'http://www.devio.org/io/GitHubPopular/';
                params.url = 'https://github.com/';
                params.title = 'GitHubPopular';
                break;
            // 反馈
            case MORE_MENU.Feedback:
                var url = 'mailto://1114005726@qq.com';
                Linking.canOpenURL(url).then(supported => {
                    if (!supported) {
                        console.log('Can\'t handle url: ' + url);
                    } else {
                        return Linking.openURL(url);
                    }
                }).catch(err => console.error('An error occurred', err));

                break;
        }

        if (TargetComponent) {
            this.props.navigator.push({
                component: TargetComponent,
                params: params
            })
        }
    }

    render() {
        let content = <View>
            {ViewUtils.getSettingItem(
                () => this.onClick(MORE_MENU.WebSite),
                require('../../../res/image/ic_computer.png'),
                '官网',
                {tintColor: '#2196F3'}
            )}
            <View style={GlobalStyles.line}/>

            {ViewUtils.getSettingItem(
                () => this.onClick(MORE_MENU.About_Author),
                require('../my/img/ic_insert_emoticon.png'),
                '关于作者',
                {tintColor: '#2196F3'}
            )}
            <View style={GlobalStyles.line}/>

            {ViewUtils.getSettingItem(
                () => this.onClick(MORE_MENU.Feedback),
                require('../../../res/image/ic_feedback.png'),
                '反馈',
                {tintColor: '#2196F3'}
            )}
            <View style={GlobalStyles.line}/>
        </View>;

        return this.aboutCommon.render(content, {
            name: 'GitHub Popular',
            description: 'GitHub浏览项目,基于React Native技术开发完成',
            avatar: 'https://avatars2.githubusercontent.com/u/24239375?s=400&u=228d0daae33138e52728ce86b44983faafa6d1bb&v=4',
            backgroundImg: 'http://www.devio.org/io/GitHubPopular/img/for_githubpopular_about_me.jpg'
        })
    }
}