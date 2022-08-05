import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import firstgen from './Containers/1gen';
import secondgen from './Containers/2gen';
import thirdndgen from './Containers/3gen';
import fourdgen from './Containers/4gen';
import fivedgen from './Containers/5gen';
import sixgen from './Containers/6gen';

import Icon1 from './icons/icon1.png'


function Home () {
  return (
    
    <View style= {{flex:1}} >
      
      <ImageBackground source={require('./icons/fondo.jpg')} style= {{flex: 1, width: '100%', height: '101%'}}>
        
      
        <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 40, marginStart: 10 }}>Swipe right to start !  ➙ </Text>
        
        </ImageBackground> 
        
    </View>
    
    
  )
}

const MyTheme = {
  colors: {
    primary: "white",
    card: 'rgba(  000, 000, 000  , 0.8)',
    text: 'white',
    border: 'white',
    notification: 'yellow',
  },
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
    <NavigationContainer theme={MyTheme}>
      
      <Drawer.Navigator initialRouteName="Home" >

        <Drawer.Screen name= "Home" component = {Home} options= {{headerShown: false, 
        drawerIcon: () => (
          <Image
            source={require('./icons/icon.png')}
            style={{width:100,height: 100,}}
          />
        )
        }} />
        <Drawer.Screen name="First Generation" component={firstgen} options= {{headerShown: false,  drawerIcon: () => (
          <Image
            
            source={require('./icons/icon1.png')}
            style={{width:24,height: 24,}}
          />
        )
        }}/>

        <Drawer.Screen name="Second Generation" component={secondgen} options= {{headerShown: false, drawerIcon: () => (
          <Image
            source={require('./icons/icon4.png')}
            style={{width:24,height: 24,}}
          />
        )
        }}/>
        <Drawer.Screen name="Third Generation" component={thirdndgen} options= {{headerShown: false, drawerIcon: () => (
          <Image
            source={require('./icons/icon3.png')}
            style={{width:24,height: 24,}}
          />
        )
        }}/>
        <Drawer.Screen name="Four Generation" component={fourdgen} options= {{headerShown: false, drawerIcon: () => (
          <Image
            source={require('./icons/icon2.png')}
            style={{width:24,height: 24,}}
          />
        )
        }}/>
        <Drawer.Screen name="Five Generation" component={fivedgen} options= {{headerShown: false, drawerIcon: () => (
          <Image
            source={require('./icons/icon5.png')}
            style={{width:24,height: 24,}}
          />
        )
        }}/>
        <Drawer.Screen name="Six Generation" component={sixgen} options= {{headerShown: false, drawerIcon: () => (
          <Image
            source={require('./icons/icon6.png')}
            style={{width:24,height: 24,}}
          />
        )
        }}/>
        
        
        

      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}
