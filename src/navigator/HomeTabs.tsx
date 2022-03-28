import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '@/pages/Home';
import {LogBox} from 'react-native';

export type TopTabParamList = {
  Home: undefined;
  Home1: undefined;
  Home2: undefined;
};
const Tab = createMaterialTopTabNavigator<TopTabParamList>();

class HomeTabs extends React.Component {
  componentDidMount() {
    //忽略在安卓中的报错
    LogBox.ignoreAllLogs();
  }
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            height: 4,
            width: 20,
            marginLeft: 30,
            borderRadius: 2,
            backgroundColor: '#f86442',
          },
          tabBarScrollEnabled: true,
          tabBarItemStyle: {
            width: 80,
          },
          lazy: true,
          tabBarActiveTintColor: '#f86442',
          tabBarInactiveTintColor: '#333',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '推荐',
          }}
        />
        <Tab.Screen
          name="Home1"
          component={Home}
          options={{
            tabBarLabel: '推荐',
          }}
        />
        <Tab.Screen
          name="Home2"
          component={Home}
          options={{
            tabBarLabel: '推荐',
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default HomeTabs;
