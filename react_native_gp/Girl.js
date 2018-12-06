import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import NavigationBar from './NavigationBar';

export default class Girl extends Component {

    renderButton(img) {
        return <TouchableOpacity
            onPress={() => {
                this.props.navigator.pop();
            }}
        >
            <Image style={{width:22, height:22, margin: 5}} source={img}></Image>
        </TouchableOpacity>
    }

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return(
            <View style={styles.container}>
                <NavigationBar
                    title={'Girl'}
                    style={{
                        backgroundColor:'#EE6363'
                    }}
                    leftButton={
                        this.renderButton(require('./res/image/ic_arrow_back_white_36pt.png'))
                    }
                    rightButton={
                        this.renderButton(require('./res/image/ic_star.png'))
                    }
                />
                <Text style={styles.text}>I am Girl.</Text>
                <Text style={styles.text}>我收到了男孩送的:{this.props.word}</Text>
                <Text
                    style={styles.text}
                    onPress={() => {
                        this.props.onCallBack('人家回送你一盒巧克力吧~');
                        this.props.navigator.pop();
                    }}
                >回送</Text>
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
        fontSize:20
    }
});
