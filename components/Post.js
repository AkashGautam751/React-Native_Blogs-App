import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import {postBlogs} from '../actions';
import {connect} from 'react-redux'; 

class Post extends Component {

    state= {
        title: "",
        content: ""
    }

    submit = () => {
        this.props.postBlogs(this.state.title, this.state.content)
        this.setState({
            title: '',
            content: ''
        })
        this.props.navigation.navigate('NavStack')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 25,textAlign:'center', marginBottom: 25}}>Post your blog</Text>
                <TextInput style={styles.inputContainerTitle} multiline={true} placeholder="Title" onChangeText={title => this.setState({title})} value={this.state.title} />
                <TextInput style={styles.inputContainerContent} multiline={true} placeholder="Content" onChangeText={content => this.setState({content})} value={this.state.content}/>
                <Button title="Submit" onPress={this.submit} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
    },
    inputContainerTitle: {
        fontSize:20,
        height: 60,
        paddingLeft: 20,
        marginBottom: 5,
        marginLeft: 1,
        elevation:4, 
        marginBottom:15, 
        borderRadius:2
    },
    inputContainerContent: {
        fontSize:20,
        height: 350,
        paddingLeft: 20,
        elevation:4, 
        marginBottom:15, 
        borderRadius:2
    },
});

export default connect(null, {postBlogs})(Post);