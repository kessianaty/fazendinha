import { Text, SafeAreaView, StyleSheet, ScrollView,View,Image,TouchableOpacity, ImageBackground } from 'react-native';

export default function Home() {
   
  return (

    <SafeAreaView style={styles.container}> 

     <ScrollView>
<View style={styles.caixa}>
        <View style={styles.cxFoto}>
        <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/logo_farm.png')}
          />        
          </View>
          <Text style={styles.texto}>
          Farm Willkest is a working farm that raises a variety of livestock. Owned and operated by the Willkest family, the farm is home to chickens, sheep, goats 
          and pigs.
          </Text>
          <Text style={styles.texto}>
          Chickens roam free on the grounds, providing fresh eggs. A flock of sheep also graze the pastures. Dairy goats are milked to produce yogurt, cheese and more. A pig farm raises sows and piglets. The pigs are reared for their high-quality pork.

          </Text>
</View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor:'#307050'
  },
  img: {
    width:300,
    height:250,
    paddingTop:50
  },
   cxFoto: {
    margin:5,
    alignItems:"center",
    width:300,
    height:250,
    borderWidth:2,
    borderRadius:900,
    borderColor:'#C1CDCD'
   },
  caixa:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    borderStyle:'solid',
    margin:20,
    padding:30,
    borderColor:'#C1CDCD'
  },
   texto:{
    textAlign:'center',
    paddingTop:50,
    color:'yellow',
    fontSize:20
  },
});

