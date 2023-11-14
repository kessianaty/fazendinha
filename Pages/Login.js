import {useState,useEffect} from 'react';

import {
Text,
SafeAreaView, 
StyleSheet,
Image,
View,
TextInput,
TouchableOpacity 
} from 'react-native';

import Firebase from '../firebase';

export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');


  function login(){
    Firebase.auth().signInWithEmailAndPassword(email,senha).catch(function (error)
    {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode,errorMessage);

    })
  }
  useEffect(()=>{
    Firebase.auth().onAuthStateChanged(function(user){
      setUser(user)
      if(initializing) setInitializing(false)
    });
  },[])

  if(user){
    alert('Bem-Vindo'+ user.uid);
    return navigation.navigate('Home');
  }
  else{
    //dsa
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textoentrada}>
       Farm Willkest
      </Text>

      <View style={styles.cont}>
      <TextInput
      placeholderTextColor={'#fff'}
      style={styles.textoinput}
      placeholder="Digite o Email de Acesso"
      onChangeText={(email) => setEmail(email)}
      value={email}
      />
      <TextInput
      placeholderTextColor={'#fff'}
      style={styles.textoinput}
      placeholder="Digite a Senha Secreta"
      onChangeText={(senha) => setSenha(senha)}
      value={senha
      }
      />
      
      <TouchableOpacity 
      style={styles.botao}
      onPress={() =>{
        login();
      }}>
      <Text style={styles.textobotao}> Acessar </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#307050',
    padding: 8,

  },
  textoentrada:{
    marginTop:55,
    marginBottom:55,
    fontSize:40,
    color:'#ecc251',
    fontWeight:'bold',
    paddingVertical:14
  },
  textoinput:{
    width:250,
    paddingLeft:10,
    backgroundColor:'#000',
    color:'#fff',
    marginTop:10,
    fontSize:20,
    fontWeight:'bold',
    borderRadius:10
  },
  botao:{
    margin: 28,
    width:200,
    backgroundColor:'#ecc251',
    height:40,
    marginTop:35,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  
    textobotao:{
    justifyContent:'center',
    fontsize:30,
    color:'dark',
    fontWeight: 'bold'
  }
});