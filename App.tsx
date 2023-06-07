import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import ImageButton from './button-component';
import { useImageState } from './image-component';


interface State {
  imagem1: any;
  imagem2: any;
}

const images: State = {
  imagem1: require('./assets/caça1.jfif'),
  imagem2: require('./assets/caça2.jfif'),
};

export default function App() {
  const [imageSource, changeImage] = useImageState(images);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mostrador de Imagens</Text>
      <Image source={imageSource} style={styles.image} />
      <ImageButton onPress={changeImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  titulo:{
    fontSize:40
  },
});
