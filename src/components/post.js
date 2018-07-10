/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {new_posts, create_posts} from '../redux/actions/postActions'
class Post extends Component<Props> {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.submitform = this.submitform.bind(this)
    }

// For Fetch request
    // componentWillMount(){
    //     this.props.new_posts()
    // }

// For Fetch request

    // For Post request
    submitform(){
        console.log("email", this.state.email)
        console.log("password", this.state.password)
         const postsdetails = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(postsdetails)
        this.props.create_posts(postsdetails)
    }
    // For Post request
  render() {
    return (
        <View>
            <Text>Forms</Text>
            <TextInput
            placeholder = {'email'}
            style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
      />
          <TextInput
            placeholder = {'Password'}
            style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
      />
      <TouchableOpacity onPress={()=>this.submitform()}><Text>Submit</Text></TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(null, {create_posts})(Post);