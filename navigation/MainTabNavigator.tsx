import React from 'react';
import MatchesScreen from '../screens/MatchesScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainTab from '../components/MainTab';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MainTab {...props} />}
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Matches" component={MatchesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
