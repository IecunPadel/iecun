import {View, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from 'react-native-reanimated';
import Pagination from './Pagination';
import {colors} from '../config/colors';

interface CarouselProps {
  items: Array<JSX.Element>;
  pagination: boolean;
}

const Carousel = ({items, pagination}: CarouselProps) => {
  const [newItems] = useState([
    {key: 'spacer-left'},
    ...items,
    {key: 'spacer-right'},
  ]);
  const {width} = useWindowDimensions();
  const SIZE = width * 0.75;
  const SPACER = (width - SIZE) / 2;
  const pos = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      pos.value = event.contentOffset.x;
    },
  });
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        snapToInterval={SIZE}
        decelerationRate="fast"
        onScroll={onScroll}>
        {newItems.map((item, index) => {
          const style = useAnimatedStyle(() => {
            const scale = interpolate(
              pos.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [0.8, 1, 0.8],
            );
            const opacity = interpolate(
              pos.value,
              [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
              [0.7, 1, 0.7],
            );
            return {
              transform: [{scale}],
              opacity: opacity,
            };
          });
          if (item.key) {
            return <View style={{width: SPACER}} key={index} />;
          }
          return (
            <Animated.View style={[{width: SIZE}, style]} key={index}>
              {items[index - 1]}
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
      {pagination && <Pagination data={items} pos={pos} size={SIZE} />}
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
});
