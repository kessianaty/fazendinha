import { Text, Image, StyleSheet, View, ScrollView } from 'react-native';

export default function Porco(){

  return(
   <View style={styles.container}>
      <ScrollView>
<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Text style= {styles.nome}>Chicken
          </Text>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/galinha.jpg')}
          />
          <Text style={styles.texto}>
          Whether raised for eggs or meat, chickens are one of the most common and widespread types of poultry. Laying hens are kept in large barns and produce eggs nearly every day, while broiler chickens bred for meat are raised until they reach marketable weight in about 6 weeks. Turkey and other types of poultry are also commercially farmed
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
    backgroundColor: '#c38b50',
    padding: 8
  },
  img: {
    width:200,
    height:250,
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
    color:'Black'

  }
})
