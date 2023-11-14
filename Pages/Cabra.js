import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';

export default function Porco(){

  return(
   <View style={styles.container}>
      <ScrollView>
<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Goats
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/cabra.jpg')}
          />
          <Text style={styles.texto}>
           Goats are versatile multipurpose animals that produce milk, fiber, and meat. Dairy goats are milked and the milk processed into cheese and other products. Angora and cashmere goats are raised for their fine hair fleece
          </Text>
          </View>
          
</View>
</ScrollView>
</View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d6d6d6',
    padding: 8
  },
  img: {
    width:200,
    height:200,
    borderRadius:90,
    paddingTop:50
  },
  cxFoto:{
    margintop:10,
    margin:5,
    alignItems:"center" 
  },
  caixa:{
    top:10,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderStyle:'solid',
    borderWidth:2,
    borderRadius:50,
    margin:5,
    padding:20,
    borderColor:'#858585'
  },
  texto:{
    textAlign:'center',
    paddingTop:50,
    color:'#FF',
    fontSize:20
  },
  nome:{
    textAlign:'center',
    fontSize:40,
    padding:20,
    color:'black'

  }
})
