import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

import {colors} from '../config/colors';
import TennisBall from './icons/TennisBall';
import Profile from './icons/Profile';
import LinearGradient from 'react-native-linear-gradient';
import IconSelector from './IconSelector';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const MainTab = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {height} = useWindowDimensions();
  const icons = [
    <TennisBall size={20} color={colors.primary500} />,
    <Profile size={20} color={colors.primary500} />,
  ];
  return (
    <LinearGradient
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      colors={['transparent', colors.white]}
      style={[styles.row, {top: height - 70}]}>
      {state.routes.map((route, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            // @ts-ignore
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        if (typeof label === 'string')
          return (
            <TouchableWithoutFeedback
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <View style={styles.option}>
                <IconSelector
                  name={label}
                  size={20}
                  color={isFocused ? colors.primary500 : colors.neutral300}
                />
                <Text
                  style={{
                    color: isFocused ? colors.primary500 : colors.neutral300,
                    fontFamily: isFocused ? 'Mulish-Bold' : 'Mulish-SemiBold',
                  }}>
                  {label}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
      })}
    </LinearGradient>
  );
};

export default MainTab;

const styles = StyleSheet.create({
  row: {
    width: '100%',
    height: 70,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
});
