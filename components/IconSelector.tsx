import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Profile from './icons/Profile';
import TennisBall from './icons/TennisBall';

interface IconSelectorProps {
  name: string;
  size: number;
  color: string;
}
const IconSelector = ({name, size, color}: IconSelectorProps) => {
  switch (name) {
    case 'Profile':
      return <Profile size={size} color={color} />;
    case 'Matches':
      return <TennisBall size={size} color={color} />;
  }
};

export default IconSelector;

const styles = StyleSheet.create({});
