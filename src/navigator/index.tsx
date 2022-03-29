import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationProp,
} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Detail from '@/pages/Detail';
import {Platform, StyleSheet} from 'react-native';

//创建一个泛型
export type RootStackParamList = {
  BottomTabs: {
    screen?: string;
  };
  Detail: {
    //传递参数
    id: number;
  };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

/*
    Stack 是个对象 Navigator 是个数组 Screen 是个对象
 */
let Stack = createStackNavigator<RootStackParamList>();

class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                },
                ios: {}, //不用设置样式
              }),
            },
          }}>
          <Stack.Screen
            options={{headerTitle: '首页'}}
            name="BottomTabs"
            component={BottomTabs}
          />
          <Stack.Screen
            options={{headerTitle: '详情页'}}
            name="Detail"
            component={Detail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
