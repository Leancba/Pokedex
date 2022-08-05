import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { Image } from 'react-native';
import Pokemons from '../Components/Pokemons-4gen';
import Details from '../Components/Details';


const appNavigator = createStackNavigator(
  {
    'First Generation': {
      screen: Pokemons,
      navigationOptions: {
        headerBackImage:true,
        title: false,
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTitleStyle: {
          fontSize:20,
          fontWeight: 'bold',
          textAlign: 'center', 
        },
        headerBackground: () => (
          <Image
            style= {{flex:1}}
            source={{ uri: 'https://get.wallhere.com/photo/white-black-illustration-red-logo-cartoon-Pok-mon-ash-Pikachu-Ash-Ketchum-Pok-balls-brand-Squirtle-Charmander-font-106376.jpg' }}
          />
        ),
      }
    },
    Info: {
      screen: Details,
      navigationOptions: {
        title: false,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor : 'black'
        },

        headerBackground: () => (
          <Image
            style= {{flex:1, resizeMode: 'cover'}}
            source={{ uri: 'https://w0.peakpx.com/wallpaper/359/206/HD-wallpaper-pikachu-comic-logo-logos-pokemon.jpg' }}/>
        )
      }
    }
  } 
);

const AppContainer = createAppContainer(appNavigator);

class App extends Component {
  render() {
      return (

    <AppContainer />
    
    )
    
  }
}

export default App;