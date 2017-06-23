import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class Feed extends Component {
  state = { articles: [] };
  componentWillMount(){
    axios.get('https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=0464d2c12cc9457ea41f3dd9415c7ba3')
      .then(response => this.setState({ articles: response.data }));
  }
  render() {
    console.log(this.state);
    return (
      <View>
        <Text>Feed</Text>
      </View>
    );
  }
}

export default Feed;
