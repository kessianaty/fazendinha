import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import{MaterialCommunityIcons} from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

import Ovelha from "./Ovelha";
import Galinha from "./Galinha";
import Porco from "./Porco";
import Home from "./Home";
import Cabra from "./Cabra";

const Tab = createBottomTabNavigator();

export default function Rotastab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
    
    <Tab.Screen name="Home"component={Home} options= {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name = "barn" color={'#930601'} size={38}/>}}/>
    <Tab.Screen name="Ovelha"component={Ovelha} options= {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name = "sheep" color={'Black'} size={38}/>}}/>
    <Tab.Screen name="Porco"component={Porco} options= {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name = "pig" color={'#f391cc'} size={38}/>}}/>
    <Tab.Screen name="Galinha"component={Galinha} options= {{
      tabBarIcon:({color,size})=><MaterialCommunityIcons name = "egg" color={'#ffefcc'} size={38}/>}}/>
    <Tab.Screen name="Cabra"component={Cabra} options= {{
    tabBarIcon:({color,size})=><MaterialIcons name="goat" size={38} color="black" />}}/>
    </Tab.Navigator>
    
  );
  
}