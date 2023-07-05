import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {TPlayerInfo} from '../types';
import {colors} from '../config/colors';

interface PlayerProps {
  player: TPlayerInfo;
}

const Player = ({player}: PlayerProps) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: player.photo}} style={styles.photo} />
      <View style={styles.level}>
        <Text style={styles.levelText}>{player.level}</Text>
      </View>
      <Text style={styles.name}>{player.name}</Text>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '10%',
    // backgroundColor: colors.white,
  },
  photo: {
    borderRadius: 9999,
    width: '100%',
    aspectRatio: 1,
    marginBottom: '20%',
    backgroundColor: colors.white,
  },
  level: {
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    position: 'absolute',
    top: '55%',
  },
  levelText: {
    fontSize: 10,
  },
  name: {
    color: colors.neutral900,
    fontSize: 11,
  },
});
