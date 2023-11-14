import {NavigationContainer} from "@react-navigation/native";

import Rotas from './Pages/Rotas';

export default function App(){
  return(
    <NavigationContainer>
    <Rotas/>
    </NavigationContainer>
    
  );
}
import Rotastab from './Pages/Rotastab';

export function Home(){
  return(
    <NavigationContainer>
    <Rotastab/>
    </NavigationContainer>
  );
}