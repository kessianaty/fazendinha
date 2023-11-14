import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';

export default function Porco(){

  return(
   <View style={styles.container}>
      <ScrollView>
<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Sheep
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/ovelha.jpg')}
          />
          <Text style={styles.texto}>
          Sheep are raised primarily for their fleece, which is sheared and made into wool. Some breeds are also farmed for lamb meat. Sheep generally graze on pasture and rangeland and may be herded or kept in fenced pens.

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
    backgroundColor: '#e8e8e8',
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
    borderColor:'black'
  },
  texto:{
    textAlign:'center',
    paddingTop:50,
    color:'black',
    fontSize:20
  },
  nome:{
    textAlign:'center',
    fontSize:40,
    padding:20,
    color:'black'

  }
})
