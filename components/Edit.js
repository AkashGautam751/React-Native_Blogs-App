import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import {editBlog} from '../actions';
import {connect} from 'react-redux'; 

class Edit extends Component {

    state= {
        title: this.props.navigation.state.params.title,
        content: this.props.navigation.state.params.content,
        key: this.props.navigation.state.params.key
    }

    submit = () => {
        this.props.editBlog(this.state.title, this.state.content, this.state.key)
        this.props.navigation.navigate("Blogs")
        this.setState({
            title: '',
            content: '',
            key: ''
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20, marginBottom: 15}}>Title</Text>
                <TextInput style={styles.inputContainerTitle} multiline={true} placeholder="Title" onChangeText={title => this.setState({title})} value={this.state.title} />
                <Text style={{fontSize: 20, marginBottom: 15}}>Content</Text>
                <TextInput style={styles.inputContainerContent} multiline={true} placeholder="Content" onChangeText={content => this.setState({content})} value={this.state.content}/>
                <Button style={{borderRadius: 8}} title="Submit" onPress={this.submit} /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
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

export default connect(null, {editBlog})(Edit);