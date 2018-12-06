import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import NavigationBar from './NavigationBar';
import Toast, {DURATION} from 'react-native-easy-toast';

let data = {
    "result": [
        {
            "email": "s.hernandez@williams.net",
            "fullName": "张三张三张三"
        },
        {
            "email": "a.taylor@taylor.gov",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "v.wilson@rodriguez.co.uk",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "g.white@miller.net",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "b.walker@haris.org",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "s.hernandez@williams.net",
            "fullName": "张三张三张三"
        },
        {
            "email": "a.taylor@taylor.gov",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "v.wilson@rodriguez.co.uk",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "g.white@miller.net",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "b.walker@haris.org",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "v.wilson@rodriguez.co.uk",
            "fullName": "张三张三张三张三张三"
        },
        {
            "email": "g.white@miller.net",
            "fullName": "张三张三张三张三"
        },
        {
            "email": "b.walker@haris.org",
            "fullName": "张三张三张三张三"
        }
    ],
    "statusCode": 0
};

export default class ListViewTest extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(data.result),
            isLoading: true
        };

        this.onLoad();
    }

    renderRow(item) {
        return <View style={styles.row}>
            <TouchableOpacity
                onPress={()=>{
                    this.toast.show('你单击了:' + item.fullName, DURATION.LENGTH_SHORT);
                }}
            >
                <Text style={styles.tips}>{item.fullName}</Text>
                <Text style={styles.tips}>{item.email}</Text>
            </TouchableOpacity>
        </View>
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return <View key={rowID} style={styles.line}>

        </View>
    }

    renderFooter() {
        return <Image style={{width: 400, height: 100}}
                      source={{uri: 'https://images.gr-assets.com/hostedimages/1406479536ra/10555627.gif'}}/>
    }

    onLoad() {
        setTimeout(()=>{
            this.setState({
                isLoading: false
            })
        }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='ListViewTest'
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item) => this.renderRow(item)}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                    renderFooter={() => this.renderFooter()}
                    refreshControl={<RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={()=>this.onLoad()}
                    />}
                />
                <Toast ref={toast => {
                    this.toast = toast
                }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 20
    },
    tips: {
        fontSize: 18
    },
    row: {
        height: 60
    },
    line: {
        height: 1,
        backgroundColor: 'black'
    }
});