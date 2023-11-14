import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';

export default function Porco(){

  return(
   <View style={styles.container}>
      <ScrollView>
<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Pig
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/porco.jpg')}
          />
          <Text style={styles.texto}>
          Pigs are stout-bodied omnivores raised mainly for pork or ham meat. Modern pig farming involves keeping sows (female pigs) in gestation crates during pregnancy before moving them to farrowing crates to give birth and nurse piglets. Piglets are weaned after 3-4 weeks then kept in growing housing until maturity for slaughter.

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
    backgroundColor: '#204b0c',
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
    top: 10,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderStyle:'solid',
    borderWidth:2,
    borderRadius:50,
    margin:5,
    padding:20,
    borderColor:'#FFFACD'
  },
  texto:{
    textAlign:'center',
    paddingTop:50,
    color:'#FFFFE0',
    fontSize:20
  },
  nome:{
    textAlign:'center',
    fontSize:40,
    padding:20,
    color:'#DEB887'

  }
})
