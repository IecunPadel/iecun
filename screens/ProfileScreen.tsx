import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../config/colors';

const ProfileScreen = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary300,
  },
  title: {
    fontFamily: 'Mulish-Black',
    fontSize: 40,
    color: colors.neutral100,
  },
});
