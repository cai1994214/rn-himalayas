import React, {Component} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LogBox} from 'react-native';
import HomeTabs from './HomeTabs';
import Listen from '@/pages/Listen';
import Found from '@/pages/Found';
import Account from '@/pages/Account';
import Icon from '@/assets/iconfont/index';
import {
  RouteProp,
  TabNavigationState,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {RootStackNavigation, RootStackParamList} from '.';

export type BottomTabParamList = {
  HomeTabs: undefined;
  Listen: undefined;
  Found: undefined;
  Account: undefined;
};
const Tab = createBottomTabNavigator<BottomTabParamList>();

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
  state?: TabNavigationState<BottomTabParamList>;
};

interface IProps {
  navigation: RootStackNavigation;
  route: Route;
}

function getHeaderTitle(route: Route) {
  const routerName = getFocusedRouteNameFromRoute(route as object);
  switch (routerName) {
    case 'Home':
      return '首页';
    case 'Listen':
      return '我听';
    case 'Found':
      return '发现';
    case 'Account':
      return '账户';
    default:
      return '首页';
  }
}

class BottomTabs extends Component<IProps> {
  componentDidMount() {
    //忽略在安卓中的报错
    LogBox.ignoreAllLogs();
  }

  componentDidUpdate() {
    this.setOptions();
  }
  setOptions = () => {
    //切换底部标签页的时候设置标题
    const {navigation, route} = this.props;
    navigation.setOptions({
      headerTransparent: false,
      headerTitle: getHeaderTitle(route),
    });
  };
  render() {
    return (
      // <NavigationContainer>
      <Tab.Navigator tabBarOptions={{activeTintColor: '#f86442'}}>
        <Tab.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <Icon name="icon-shouye" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Listen"
          component={Listen}
          options={{
            tabBarLabel: '我听',
            tabBarIcon: ({color, size}) => (
              <Icon name="icon-yinletianchong" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <Icon name="icon-faxian" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <Icon name="icon-wode" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      // </NavigationContainer>
    );
  }
}

export default BottomTabs;
