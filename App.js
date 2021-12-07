import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Fooldal from './Fooldal';
import Mell from './Mell';
import Bicepsz from './Bicepsz';
import Tricepsz from './Tricepsz';
import Vall from './Vall';
import Hat from './Hat';
import HasTorzs from './HasTorzs';
import Vadli from './Vadli';
import CombFar from './CombFar';
import Alkar from './Alkar';

function Fooldallap({ navigation }) {
  return (
    <Fooldal/>
  );
}

function Mellworkout({ navigation }) {
  return (
    <Mell/>
  );
}

function Bicepszworkout({ navigation }) {
  return (
    <Bicepsz/>
  );
}

function Tricepszworkout({ navigation }) {
  return (
    <Tricepsz/>
  );
}

function Vallworkout({ navigation }) {
  return (
    <Vall/>
  );
}

function Hatworkout({ navigation }) {
  return (
    <Hat/>
  );
}

function HasTorzsworkout({ navigation }) {
  return (
    <HasTorzs/>
  );
}

function Vadliworkout({ navigation }) {
  return (
    <Vadli/>
  );
}

function CombFarworkout({ navigation }) {
  return (
    <CombFar/>
  );
}

function Alkarworkout({ navigation }) {
  return (
    <Alkar/>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Főoldal" component={Fooldallap} />
        <Drawer.Screen name="Mell" component={Mellworkout} />
        <Drawer.Screen name="Bicepsz" component={Bicepszworkout} />
        <Drawer.Screen name="Tricepsz" component={Tricepszworkout} />
        <Drawer.Screen name="Váll" component={Vallworkout} />
        <Drawer.Screen name="Hát" component={Hatworkout} />
        <Drawer.Screen name="Has/Törzsizom" component={HasTorzsworkout} />
        <Drawer.Screen name="Vádli" component={Vadliworkout} />
        <Drawer.Screen name="Comb/Far izom" component={CombFarworkout} />
        <Drawer.Screen name="Alkar" component={Alkarworkout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
