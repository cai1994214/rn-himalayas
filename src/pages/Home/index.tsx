import React from 'react';
import {Text, View, Button} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/modules/index';
import Carousel from './Carousel';

const mapStateToProps = ({home, loading}: RootState) => {
  //home是modules里的 loading是dva-loading插件内的
  return {
    num: home.num,
    loading: loading.effects['home/asyncAdd'], //定位到effects里的asyncAdd异步的loading
  };
};
const connector = connect(mapStateToProps);
type MadelState = ConnectedProps<typeof connector>; //使其props继承connect的值

interface IProps extends MadelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Detail', {
      id: 100,
    }); // 点击调换
  };

  handleAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/add',
      payload: {
        num: 1,
      },
    });
  };

  handleAsyncAdd = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/asyncAdd',
      payload: {
        num: 10,
      },
    });
  };

  render() {
    const {num, loading} = this.props;
    return (
      <View>
        <Text>Hello World{num}</Text>
        <Text>{loading ? '正在努力计算中啊' : ''}</Text>
        <Button title="跳转到详情页" onPress={this.onPress} />
        <Button title="加" onPress={this.handleAdd} />
        <Button title="异步加" onPress={this.handleAsyncAdd} />
        <Carousel />
        <Text>你好</Text>
      </View>
    );
  }
}

export default connector(Home);
