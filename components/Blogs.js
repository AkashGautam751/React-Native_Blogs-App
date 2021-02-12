import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, FlatList, TouchableHighlight } from 'react-native';
import {getBlogs, deleteBlogs} from '../actions';
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

class Blogs extends Component {

    componentDidMount() {
        this.props.getBlogs()
    }

    render() {
        
        return (
            <View style={styles.container}>

                {
                    this.props.loadingReducer ? <Text>Loading Please Wait!!</Text> :

                    <FlatList style={{width: '100%'}}
                            data={this.props.listOfBlogs}
                            keyExtractor={(item) => item.key}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) => {
                                return (
                                    <View style={{elevation:8, marginBottom:15, borderRadius:10, backgroundColor:'#000099', padding: 20 }}>
                                        <Text style={{fontSize:25, color:'#fff'}}>{item.title}</Text>
                                        <Text style={{fontSize:20, color: '#fff'}}>{item.content}</Text>
                                        <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:25}}>
                                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Edit', {...item})}>
                                                <View style={{marginRight:15}}>
                                                    <Icon size={30} color="white" name="edit" />
                                                </View>
                                            </TouchableHighlight>
                                            <TouchableHighlight onPress={() => this.props.deleteBlogs(item.key)}>
                                                <View>
                                                    <Icon size={30} color="white" name="close" />
                                                </View>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                )
                    }}/>
                }

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
});

function mapStateToProps(state) {

    const listOfBlogs = _.map(state.blogsList.blogsList, (val, key) => {
        return {
            ...val,
            key: key
        }
    })

    return {
        listOfBlogs,
        loadingReducer: state.loadingReducer.loadingReducer
    }
}

export default connect(mapStateToProps, {getBlogs, deleteBlogs})(Blogs);