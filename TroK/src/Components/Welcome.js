import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Card from './Card';
import { StackNavigator } from 'react-navigation';

export default class Welcome extends Component {
  static navigationOptions = {
    title: 'TroK',
  };

  state = {
    profileIndex: 0,
  }

  nextCard = () => {
    this.setState({ profileIndex: this.state.profileIndex + 1 });
  }
  render() {
    const { profileIndex } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#EAECEE' }}>
      <View style={{ flex: 10 }}>
      {profiles.slice(profileIndex, profileIndex + 4).reverse().map((profile) => {
        return (
          <Card
          key={profile.id}
          profile={profile}
          onSwipeOff={this.nextCard}
          />
        )
      })}
      </View>

      <View style={{ flex: 1, backgroundColor: '#29088A' }}>
      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff', padding: 12 }} onPress={() => alert('Under development')}>Menu do aplicativo</Text>
      </View>
      </View>
    );
  }
}


export const App = StackNavigator({
  Home: { screen: Welcome }
});


const profiles = [
  {
    id: 'https://cdn.pixabay.com/photo/2015/01/29/11/36/mobile-616012_960_720.jpg',
    name: 'Leandro Araujo',
    bio: 'Troco iPhone 7 em otimo estado, usado poucas vezes + carregado e fone de ouvido.',
  },
  {
    id: 'https://cdn.pixabay.com/photo/2017/07/03/11/52/sound-2467421_960_720.jpg',
    name: 'Claudio Palas',
    bio: 'Vendo HeadSet semi-novo em otimo estado de conservação.',
  },
  {
    id: 'https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_960_720.jpg',
    name: 'Antonio dos santos',
    bio: 'Troco MacBook por computador desktop.',
  },
  {
    id: 'https://cdn.pixabay.com/photo/2016/02/02/21/27/stack-of-books-1176150_960_720.jpg',
    name: 'Amanda Oliveira',
    bio: 'Troco livros colecionais, varios titulos e generos diferentes.',
  },
]

/*
import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (
<Image style={{ flex: 1, width: null }} source={require('../images/Background.png')}>
<View style={{ flex: 1, padding: 15 }}>
<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
<Image style={{ width: 150, height: 150 }} source={require('../images/logoTrok.jpeg')} />
<Text style={{ color: '#fff', fontSize: 15, textAlign: 'center', marginTop: 10 }}>Welcome to TroK!</Text>
</View>
<View style={{ flex: 1 }}>
<Button title="Get in" onPress={() => Actions.loginScreen()} />
</View>
</View>
</Image>
);


*/