import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../config/colors';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface PaginationProps {
  data: Array<JSX.Element>;
  pos: SharedValue<number>;
  size: number;
}

const Pagination = ({data, pos, size}: PaginationProps) => {
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const animatedDotStyle = useAnimatedStyle(() => {
          const widthAnimation = interpolate(
            pos.value,
            [(i - 1) * size, i * size, (i + 1) * size],
            [10, 20, 10],
            Extrapolate.CLAMP,
          );
          const opacityAnimation = interpolate(
            pos.value,
            [(i - 1) * size, i * size, (i + 1) * size],
            [0.5, 1, 0.5],
            Extrapolate.CLAMP,
          );
          return {
            width: widthAnimation,
            opacity: opacityAnimation,
          };
        });
        return (
          <Animated.View style={[styles.dots, animatedDotStyle]} key={i} />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    height: 10,
    width: 10,
    backgroundColor: colors.primary500,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
