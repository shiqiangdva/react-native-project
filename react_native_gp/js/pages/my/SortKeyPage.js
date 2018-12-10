import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';

import CustomKeyPage from "./CustomKeyPage";
import NavigationBar from "../../common/NavigationBar";
import LanguageDao, {FLAG_LANGUAGE} from "../../expand/dao/LanguageDao";
import ArrayUtils from "../../util/ArrayUtils";
import SortableListView from 'react-native-sortable-listview';
import ViewUtils from "../../util/ViewUtils";

export default class SortKeyPage extends Component {

    constructor(props) {
        super(props);
        this.dataArray = [];
        this.sortResultArray = [];
        this.originalCheckedArray = [];

        this.state = {
            checkedArray: []
        }
    }

    componentDidMount() {
        this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.loadData();
    }

    loadData() {
        this.languageDao.fetch()
            .then(result => {
                //
                this.getCheckedItems(result);
            })
            .catch(error => {

            })
    }

    getCheckedItems(result) {
        this.dataArray = result;
        let checkedArray = [];
        for (let i = 0, len = result.length; i < len; i++) {
            let data = result[i];
            if (data.checked) checkedArray.push(data);
        }
        this.setState({
            checkedArray: checkedArray
        });
        this.originalCheckedArray = ArrayUtils.clone(checkedArray);
    }

    onBack() {
        if (ArrayUtils.isEqual(this.originalCheckedArray, this.state.checkedArray)) {
            this.props.navigator.pop();
            return;
        }
        Alert.alert(
            '提示',
            '是否保存修改?',
            [
                {
                    text: '否', onPress: () => {
                        this.props.navigator.pop();
                    }
                },
                {
                    text: '是', onPress: () => {
                        this.onSave(true);
                    }
                }
            ]
        )

    }

    onSave(isChecked) {
        if (!isChecked&&ArrayUtils.isEqual(this.originalCheckedArray, this.state.checkedArray)) {
            this.props.navigator.pop();
            return;
        }
        this.getSortResult();
        this.languageDao.save(this.sortResultArray);
        this.props.navigator.pop();
    }

    getSortResult() {
        this.sortResultArray = ArrayUtils.clone(this.dataArray);
        for (let i = 0, l = this.originalCheckedArray.length; i < l; i++) {
            let item = this.originalCheckedArray[i];
            let index = this.dataArray.indexOf(item);
            this.sortResultArray.splice(index, 1, this.state.checkedArray[i])
        }
    }

    render() {
        let rightButton = <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => this.onSave()}
        >
            <View>
                <Text style={styles.title}>保存</Text>
            </View>
        </TouchableOpacity>;

        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'我的'}
                    style={{backgroundColor: '#6495ED'}}
                    leftButton={ViewUtils.getLeftButton(() => this.onBack())}
                    rightButton={rightButton}
                />
                <SortableListView
                    style={{flex: 1}}
                    data={this.state.checkedArray}
                    order={Object.keys(this.state.checkedArray)}
                    onRowMoved={e => {
                        this.state.checkedArray.splice(e.to, 0, this.state.checkedArray.splice(e.from, 1)[0]);
                        this.forceUpdate()
                    }}
                    renderRow={row => <SortCell data={row}/>}
                />
            </View>
        )
    }

}

class SortCell extends Component {

    render() {
        return (
            <TouchableHighlight
                underlayColor={'#eee'}
                style={styles.item}
                {...this.props.sortHandlers}
            >
                <View style={styles.row}>
                    <Image
                        style={styles.image}
                        source={require('./img/ic_sort.png')}
                    />
                    <Text>{this.props.data.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tips: {
        fontSize: 29
    },
    item: {
        padding: 20,
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        tintColor: '#2196F3',
        height: 16,
        width: 16,
        marginRight: 10
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF'
    }
});