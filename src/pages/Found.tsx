import React from 'react';
import {Text, View, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation;
}

class Found extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 100,
    }); // 点击调换
  };

  render() {
    return (
      <View>
        <Text>Hello World</Text>
        <Button title="跳转到详情页" onPress={this.onPress} />
      </View>
    );
  }
}

export default Found;
