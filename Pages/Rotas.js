import {createStackNavigator} from '@react-navigation/stack';

import Rotastab from './Rotastab';
import Login from './Login';

const Stack = createStackNavigator();

export default function Rotas(){
  return(
    <Stack.Navigator>
      <Stack.Screen name ='Login' component={Login} options={{headerShown:false, title:'Login'}}/>
      <Stack.Screen name = 'Home' component={Rotastab} options={{headerShown:false, title:'Home'}}/>
    </Stack.Navigator>
  );
}
