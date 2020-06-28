import React from 'react';
import axios from 'axios';
import {Container, Button, Text} from 'native-base';
import Header from 'components/Header';

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
      <Container>
        <Header />
        <Button>
          <Text>Button</Text>
        </Button>
      </Container>
    );
  }
}

export default App;
