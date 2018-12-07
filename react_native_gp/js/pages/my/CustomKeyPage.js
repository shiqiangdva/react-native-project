import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert
} from 'react-native';
import NavigationBar from "../../common/NavigationBar";
import ViewUtils from "../../util/ViewUtils";
import LanguageDao, {FLAG_LANGUAGE} from "../../expand/dao/LanguageDao";
import Checkbox from 'react-native-check-box';
import ArrayUtils from "../../util/ArrayUtils";

export default class CustomKeyPage extends Component {

    constructor(props) {
        super(props);
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.chanageValues = [];
        this.state = {
            dataArray: []
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.languageDao.fetch()
            .then(result => {
                this.setState({
                    dataArray: result
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onSave() {
        if (this.chanageValues.length === 0) {
            this.props.navigator.pop();
            return;
        }
        this.languageDao.save(this.state.dataArray);
        this.props.navigator.pop();
    }

    onBack() {
        if (this.chanageValues.length === 0) {
            this.props.navigator.pop();
            return;
        }
        Alert.alert(
            '提示',
            '需要保存修改么?',
            [
                {text: '不保存', onPress: () => {
                    this.props.navigator.pop();
                    }},
                {text: '保存', onPress: () => {
                    this.onSave();
                    }},
            ],
            { cancelable: false }
        )

    }

    renderView() {
        if (!this.state.dataArray || this.state.dataArray.length === 0) return null;
        let len = this.state.dataArray.length;
        let views = [];
        for (let i = 0, l = len - 2; i < l; i += 2) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckbox(this.state.dataArray[i])}
                        {this.renderCheckbox(this.state.dataArray[i + 1])}
                    </View>
                    <View style={styles.line}/>
                </View>
            )
        }
        views.push(
            <View key={len - 1}>
                <View style={styles.item}>
                    {len % 2 === 0 ? <Text>{this.renderCheckbox(this.state.dataArray[len - 2])}</Text> : null}
                    {this.renderCheckbox(this.state.dataArray[len - 1])}
                </View>
                <View style={styles.line}/>
            </View>
        );
        return views;
    }

    onClick(data) {
        data.checked = !data.checked;
        ArrayUtils.updataArray(this.chanageValues, data)
    }

    renderCheckbox(data) {
        let leftText = data.name;
        return <Checkbox
            style={{flex: 1, padding:10}}
            onClick={() => this.onClick(data)}
            leftText={leftText}
            isChecked={data.checked}
            checkedImage={<Image
                style={{tintColor:'#6495ED'}}
                source={require('./img/ic_check_box.png')}/>}
            uncheckedImage={<Image
                style={{tintColor:'#6495ED'}}
                source={require('./img/ic_check_box_outline_blank.png')}/>}
        />
    }

    render() {
        let rightButton = <TouchableOpacity
            onPress={() => this.onSave()}
        >
            <View style={{marginRight: 10}}>
                <Text style={styles.title}>保存</Text>
            </View>
        </TouchableOpacity>;
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'自定义标签'}
                    style={{backgroundColor: '#6495ED'}}
                    leftButton={ViewUtils.getLeftButton(() => this.onBack())}
                    rightButton={rightButton}
                />
                <ScrollView>
                    {this.renderView()}
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tips: {
        fontSize: 29
    },
    title: {
        fontSize: 20,
        color: 'white'
    },
    line: {
        height: 0.3,
        backgroundColor: 'darkgray'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});