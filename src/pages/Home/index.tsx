import React from 'react';
import {View} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '@/modules/index';
import Guess from './Guess';
import Carousel from './Carousel';

const mapStateToProps = ({home, loading}: RootState) => {
  //home是modules里的 loading是dva-loading插件内的
  return {
    carousels: home.carousels,
    guess: home.guess,
    loading: loading.effects['home/featchCarousels'], //定位到effects里的featchCarousels异步的loading
  };
};
const connector = connect(mapStateToProps);
type MadelState = ConnectedProps<typeof connector>; //使其props继承connect的值

interface IProps extends MadelState {
  navigation: RootStackNavigation;
}

class Home extends React.Component<IProps> {
  componentDidMount() {
    this.getCarouselsList();
    this.getGuessList();
  }

  getCarouselsList = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/featchCarousels',
    });
  };

  getGuessList = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'home/featchGuess',
    });
  };

  render() {
    //获取props里的carousels
    const {carousels, guess} = this.props;
    return (
      <View>
        <Carousel data={carousels} />
        <Guess data={guess} />
      </View>
    );
  }
}

export default connector(Home);
