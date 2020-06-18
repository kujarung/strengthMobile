import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    const data = await axios({
      method: 'get',
      url: 'http://www.strengthschool.co.kr/selectReview',
    });
    console.log(data);
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View>
            <Text>aaaa</Text>
          </View>
        </SafeAreaView>
        <ScrollView style={styles.body}>
          <Text>aaaa</Text>
        </ScrollView>
        <View style={styles.footer}>
          <Text>footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemImg: {
    width: 300,
    height: 500,
  },
  container: {
    flex: 1,
  },
  body: {
    marginBottom: 80,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 50,
  },
});

export default App;
