import React from 'react';
import {Text, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '@/navigator/index';
interface IProps {
  route: RouteProp<RootStackParamList, 'Detail'>;
}

class Detail extends React.Component<IProps> {
  render() {
    const {route} = this.props;
    console.log(route, 'route');
    return (
      <View>
        <Text>Hello World</Text>
        <Text>{route.params.id}</Text>
      </View>
    );
  }
}

export default Detail;
