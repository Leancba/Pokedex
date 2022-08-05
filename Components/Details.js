import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator, ImageBackground} from 'react-native';

const Details = props => {
  const [details, setDetails] = useState([]);
 
   
  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    
    const {state} = props.navigation;
    fetch(`https://pokeapi.co/api/v2/pokemon/${state.params.pokemon}`)
      .then(res => res.json())
      .then(details => setDetails(details));

  };
   
  return details.name ? (   
    <View style = {styles[details.types[0].type.name]} >
      <View style= {{flexDirection: 'row', justifyContent: 'space-between'}} >
        <Text style={{fontSize: 32 , fontWeight: 'bold', color: 'white', marginLeft: 15}}>{details.name[0].toUpperCase() + details.name.substring(1)}</Text>
        <Text style={{fontSize: 20, marginRight: 10, marginTop:10 , justifyContent: 'center', alignItems:'center', color: 'white'}}>#{details.id}</Text> 
    </View>

    <View style = {{flexDirection: 'row', display: 'flex' , justifyContent: 'flex-start'}} >
    <Text style= {styles.typeText}>{details.types[0].type.name[0].toUpperCase() + details.types[0].type.name.substring(1)}</Text>
    
    </View>
       
      <View style = {{backgroundColor: 'white', width:'100%', height: '70%',marginTop: 130,  borderTopStartRadius: 30, borderTopEndRadius: 30 ,  }} >
      <Image 
        style={ {height: 180, width: 180, resizeMode: 'cover', bottom: 125 , left: 100} } 
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`,
        }}/>
        <View style = {{flexDirection: 'row', justifyContent: 'space-around', bottom: 110 , }} >
            <View  >
              <Text style={styles.text}>Ability:</Text>
              <Text style={styles.text}>hp:</Text>
              <Text style={styles.text}>Attack:</Text>
              <Text style={styles.text}>Defense:</Text>
              <Text style={styles.text}>Speed:</Text>
              <Text style={styles.text}>Special-attack:</Text>
              <Text style={styles.text}>Special-defense:</Text>
            </View>
      <View>
               <Text style={styles.text2}>{details.abilities[0].ability.name[0].toUpperCase()+ details.abilities[0].ability.name.substring(1) }</Text>
               <Text style={styles.text2} > {details.stats[0].base_stat}</Text>
               <Text style={styles.text2} > {details.stats[1].base_stat}</Text>
               <Text style={styles.text2} > {details.stats[2].base_stat}</Text>
               <Text style={styles.text2} > {details.stats[5].base_stat}</Text>
               <Text style={styles.text2} > {details.stats[3].base_stat}</Text>
               <Text style={styles.text2} > {details.stats[4].base_stat}</Text>
      </View>
      </View>
     </View>           
    </View>
    
    
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" color="#E63F34" />
    </View>
  );
};

  

 //{details.types[0].type.name}
export default Details;



const styles = StyleSheet.create({
  image: {
    backgroundColor: 'black',
    borderRadius: 90,
    padding:80
    
  },
  text: {
    fontSize: 15,
   
    marginBottom: 10,
    textAlign:'center',
    borderRadius: 10,
    color: 'grey',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  text2: {
    fontWeight: '200',
    fontSize: 15,
    marginBottom: 10,
    backgroundColor: 'rgba(210, 210, 210, 0.5)',
    textAlign:'center',
    borderRadius: 10,
    color: 'black',
    paddingHorizontal: 10,

  },
  indicator: {
    flex: 1,
    alignItems: 'center',
  },
  type: {
    flexDirection: 'row',
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
  },
  typeText: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 40,
    paddingEnd: 0,
    marginStart: 10,
    justifyContent: 'center',
    alignContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom:5,
    marginTop: 5

  },
  poison: {
    fontSize : 22,
    backgroundColor: '#A040A0',
    borderColor: '#662966',
    padding: 5,
    marginEnd: 20,
    borderRadius: 15,
  },
  grass: {
    fontSize: 22,
    backgroundColor: '#78C850',
    borderColor: '#4A892B',
    
  },
  water: {
    backgroundColor: '#6890F0',
    color: '#6890F0',
    borderColor: '#1753E3',
  },
  fire: {
    backgroundColor: '#F08030',
    borderColor: '#B4530D',
    fontSize: 22,
    
  },
  ice: {
    backgroundColor: '#98D8D8',
    borderColor: '#45B6B6',
  },
  electric: {
    backgroundColor: '#F8D030',
    borderColor: '#C19B07',
  },
  dark: {
    backgroundColor: '#705848',
    borderColor: '#362A23',
  },
  fairy: {
    backgroundColor: '#78C850',
    borderColor: '#D547D5',
  },
  backgroundColor: {
    color: '#C03028',
    borderColor: '#82211B',
  },
  normal: {
    backgroundColor: '#8A8A59',
    borderColor: '#79794E',
  },
  fly : {
    backgroundColor: '#A890F0',
    borderColor: '#7762B6',
  },
  psychic: {
    backgroundColor: '#F85888',
    borderColor: '#D60945',
  },
  bug: {
    backgroundColor: '#A8B820',
    borderColor: '#616B13',
  },
  rock: {
    backgroundColor: '#B8A038',
    borderColor: '#746523',
  },
  ghost: {
    backgroundColor: '#705898',
    borderColor: '#413359',
  },
  dragon: {
    backgroundColor: '#7038F8',
    borderColor: '#3D07C0',
  },
  steel: {
    backgroundColor: '#B8B8D0',
    borderColor: '#7A7AA7',
  },
  ground: {
    backgroundColor: '#E0C068',
    borderColor: '#AA8623',
  },
  default: {
    backgroundColor: 'grey',
    borderColor: 'black',
  }
  
});