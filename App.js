import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';

const App = () => {

  //Definición del useState para conteo de likes 
  const [numberLikes, setLike] = useState(0); 
  //Definición del useState para cambio de color icono de likes y favorites
  const [color, setColor] = useState('black');
  const [colorG, setColorG] = useState('black');

  //Función manejador de likes
  const handleLikes = () => {
    //Condicionamos antes de setear el valor dentro de la función seteadora 
    setLike(() => {
      if(numberLikes < 10){
        return numberLikes + 1;
      }
      else{
        return numberLikes;
      }
    });
    handleColor();
  }
  
  //Función manejadora del cambio de color
  const handleColor = () => {
    setColor('red');
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Image style={styles.imageTitle}source={require('./assets/images/titulo.png')} />
      </View>
      <View style={styles.containerUser}>
        <View style={styles.imageUser}>
          <Image style={styles.imageU}source={require('./assets/images/jimin.jpeg')} />
        </View>
        <View style={styles.nameUser}>
          <Text style={styles.textName}>im_arifer</Text>
        </View>
        <View style={styles.optionsUser}>
          <Image style={styles.imageOptions}source={require('./assets/images/mas.png')}/>
        </View>
      </View>
      <View style={styles.containerPost}>
        <Image style={styles.imagePost}source={require('./assets/images/post.jpeg')} />
      </View>
      <View style={[styles.containerReactions, styles.margenCorazon]}>
        <View style={styles.iconReaction}>
          <TouchableOpacity onPress={() => handleLikes()}>
            <Ionicons name="heart-sharp" size={29} color={color} style={styles.iconLike}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.numbLikes}>{numberLikes}</Text>
        <View style={styles.iconReaction}>
          <Image style={styles.imageIcon} source={require('./assets/images/chat.png')}/>
        </View>
        <View style={styles.iconReaction}>
          <Image style={styles.imageIcon} source={require('./assets/images/enviar.png')}/>
        </View>
        <View style={styles.iconMore}>
          <Image style={styles.imageIcon} source={require('./assets/images/puntitos.png')}/>
        </View>
        <View style={styles.iconReaction}>
          <TouchableOpacity onPress={() => colorG === 'black' ? setColorG('#FFD700') : setColorG('black')}>
            <Fontisto name="favorite" size={29} color={colorG} style={styles.iconFavorite}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerAdditional}>
        <Text style={styles.textViews}>17.280 views</Text>
        <Text style={styles.textDescription}>im_arifer 😁</Text>
        <Text style={styles.textComments}>View all 370 comments</Text>
        <Text style={styles.textDays}>1 day ago</Text>
      </View>
      <View style={styles.containerMenu}>
        <View style={styles.iconMenu}>
          <Image style={styles.imageP}source={require('./assets/images/hogar.png')} />
        </View>
        <View style={styles.iconMenu}>
          <Image style={styles.imageP}source={require('./assets/images/lupa.png')} />
        </View>
        <View style={styles.iconMenu}>
          <Image style={styles.imageP}source={require('./assets/images/agregar.png')} />
        </View>
        <View style={styles.iconMenu}>
          <Image style={styles.imageP}source={require('./assets/images/corazon.png')} />
        </View>
        <View style={styles.iconMenu}>
          <Image style={styles.imageP}source={require('./assets/images/usuario.png')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitle: {
    width: '100%',
    height: '6%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerUser: {
    width: '100%',
    height: '6%',
    display: 'flex',
    flexDirection: 'row',
  },
  containerPost: {
    width: '100%',
    height: '53%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerReactions: {
    width: '100%',
    height: '5%',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  containerAdditional: {
    width: '100%',
    height: '11%',
    marginLeft: 20,
  },
  containerMenu: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '7%',
    gap: 42,
    paddingLeft: 14,
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
  imageTitle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  imageUser: {
    width: '12%',
    height: '100%',
    borderRadius: '100%',
    marginLeft: 15,
  },
  optionsUser: {
    width: '7%',
    height: '100%',
  },
  nameUser: {
    width: '72%',
    height: '100%',
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'start',
  },
  imageU: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  textName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  imageOptions: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  iconReaction: {
    width: '7%',
    height: '100%',
  },
  iconMore: {
    width: '15%',
    height: '100%',
    marginRight: '30%',
    marginLeft: '10%',
  },
  imageIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  margenCorazon: {
    marginLeft: 20,
  },
  textViews: {
    fontWeight: 'bold',
  },
  textDescription: {
    fontWeight: 'bold',
  },
  textComments: {
    color: 'gray',
  },
  textDays: {
    color: 'gray',
  },
  imagePost: {
    width: '98%',
    height: '97%',
    resizeMode: 'cover'
  },
  iconMenu :{
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageP: {
    width: '70%',
    height: '50%',
    resizeMode: 'contain',
  },
  numbLikes: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  iconLike: {
    marginTop: 6,
  },
  iconFavorite: {
    marginTop: 7,
  }
});

export default App;