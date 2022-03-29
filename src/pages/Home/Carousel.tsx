import React from 'react';
import SnapCarousel, {
  AdditionalParallaxProps,
  Pagination,
  ParallaxImage,
} from 'react-native-snap-carousel';
import {viewportWidth, wp, hp} from '@/utils/index';
import {StyleSheet, View} from 'react-native';
const data = [
  'https://d1f2504ijhdyjw.cloudfront.net/deals-img/3d0bc757891a6d6931b3277228da5e5d-demo1.png',
  'https://d1f2504ijhdyjw.cloudfront.net/deals-img/622dc98b7f3e963c74ea129a74fb3cd3-demo2.png',
  'https://d1f2504ijhdyjw.cloudfront.net/deals-img/73c2efc72d6afd930215a94ec5672cf7-demo3.png',
  'https://d1f2504ijhdyjw.cloudfront.net/deals-img/a75c6d38cbc91d60c4092036597ff463-demo4..png',
];

const sliderWidth = viewportWidth;
const sliderHeight = hp(26);
const sidewidth = wp(90); //图片宽度
const itemWidth = sidewidth + wp(2) * 2;
class Carousel extends React.Component {
  state = {
    activeSlide: 0,
  };
  onSnapToItem = (index: number) => {
    this.setState({
      activeSlide: index,
    });
  };
  renderItem = (
    {item}: {item: string},
    parallaxProps?: AdditionalParallaxProps,
  ) => {
    return (
      <ParallaxImage
        source={{uri: item}}
        style={styles.image}
        containerStyle={styles.imageContainer}
        parallaxFactor={0.8}
        showSpinner
        spinnerColor="rgba(0,0,0,0.25)"
        {...parallaxProps}
      />
    );
  };

  get pagination() {
    const {activeSlide} = this.state;
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          containerStyle={styles.paginationContainer}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          inactiveDotScale={0.7}
          inactiveDotOpacity={0.4}
        />
      </View>
    );
  }
  render() {
    return (
      <View>
        <SnapCarousel
          data={data}
          removeClippedSubviews={false}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages
          onSnapToItem={this.onSnapToItem}
          loop
          autoplay
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  imageContainer: {
    width: itemWidth,
    height: sliderHeight,
    borderRadius: 8,
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});
export default Carousel;
