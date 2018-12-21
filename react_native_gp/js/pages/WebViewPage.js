import React, {Component} from 'react';
import {
    View,
    WebView
} from 'react-native';
import NavigationBar from '../../js/common/NavigationBar';
import GlobalStyles from '../../res/styles/GlobalStyles';
import ViewUtils from "../util/ViewUtils";

export default class WebViewPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            url: this.props.url,
            canGoBack: false,
            title: this.props.title
        }
    }
    
    onNavigationStateChange(e) {
        this.setState({
            canGoBack: e.canGoBack,
            url: e.url
        });
    }
    
    onBackPress() {
        if (this.state.canGoBack) {
            this.webView.goBack();
        } else {
            this.props.navigator.pop();
        }
    }

    render() {
        return (
            <View style={GlobalStyles.root_container}>
                <NavigationBar
                    title={this.state.title}
                    style={{backgroundColor:'#2196F3'}}
                    leftButton={ViewUtils.getLeftButton(() => this.onBackPress())}
                />
                <WebView
                    ref={webView=>this.webView = webView}
                    onNavigationStateChange={(e) => this.onNavigationStateChange(e)}
                    source={{uri:this.state.url}}
                />
            </View>
        )
    }
    

}