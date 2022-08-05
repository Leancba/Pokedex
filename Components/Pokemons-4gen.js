import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
  
} from 'react-native';

const Pokemons = props => {
  const [pokemons, setPokemons] = useState([]);

       
  useEffect(() => {
    fetchPokemons();
  
  }, []);
 

  const fetchPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=107&offset=386')
      .then(response => response.json())
      .then(pokemons => setPokemons(pokemons.results));
  };

  return (
    <View style= {{flex: 1, backgroundColor: 'black'}}>
      <View style = {{backgroundColor : 'black', alignItems: 'center'}}>
        
        <Image style = {{backgroundColor: 'black', marginTop: 15, justifyContent: 'center'}} 
        source={{uri : 'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/04dbd-pikachu-saludando-png.png?fit=900%2C900&ssl=1',
         height: 110, width:110,} } >
        </Image>
      </View>
      
      <ScrollView
      horizontal= {true}
      showsHorizontalScrollIndicator= {true}
      indicatorStyle = 'white'
      alwaysBounceHorizontal = {true}
      persistentScrollbar= {true}
    >
      
        <View style={styles.subcontainer}>
        
          {pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase()
            )
            .map((pokemon, index) => {
              return (
                <ImageBackground source={require('../assets/Pokebola.png')} style = {styles.image}  >
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() =>
                    props.navigation.navigate('Info', {
                      pokemon: pokemon.name,
                    })
                  }>
                  <Image
                    style= {styles.image2}
                    source={{
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+387}.png`,
                    }}
                  />
                  <Text style= {styles.name}>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</Text>
                </TouchableOpacity>
                </ImageBackground>
              );
            })}
            
        </View> 
      </ScrollView>
    </View>
  );
};


export default Pokemons;

const styles = StyleSheet.create({

  name: {
    fontSize: 20,
    fontStyle:'italic',
    fontWeight: 'bold',
    color: 'rgba(000, 000, 000, 0.5)',
    marginTop: 25,
    backgroundColor: 'rgba(210, 210, 210, 0.2)',
    borderRadius: 15,
    padding: 5
  },

  subcontainer: {
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  
  },
  card: {
    width: 350,
    height: 360,
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
    marginVertical: 10,
    
  },
  searchCont: {
    position: 'absolute',
    marginBottom: 70,
    left: '20%',
    zIndex: 1,
    marginTop: 10,
  },
  searchfeild: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    width: 250,
    borderRadius: 50,
  },
  image: {
    resizeMode: 'cover',
    backgroundColor : 'black',
    height: 350,
    width: 350,
    margin: 40,
    marginStart: 1
  },
  image2 : {
    width: 120,
    height: 120,
    marginTop:105
  }
});