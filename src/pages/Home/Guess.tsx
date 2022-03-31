import React from 'react';
import {IGuess} from '@/modules/home';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

interface IProps {
  data: IGuess[];
}
class Guess extends React.Component<IProps> {
  renderItem = ({item}: any) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: item.image}} style={styles.image} />
        <Text numberOfLines={2}>{item.title}</Text>
      </View>
    );
  };
  render() {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <FlatList numColumns={3} data={data} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 16,
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 6,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default Guess;
