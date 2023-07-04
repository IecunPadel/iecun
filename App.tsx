import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import MatchCarroussel from './components/MatchCarroussel';

const yobama =
  'https://i.kym-cdn.com/photos/images/newsfeed/001/441/147/84e.jpg';

export default function App(): JSX.Element {
  return (
    <View style={styles.background}>
      <View style={styles.profile}>
        <Image style={styles.profile_photo} source={{uri: yobama}} />
      </View>
      <View style={styles.next}>
        <Text style={styles.title}>Your next matches:</Text>
        <View style={styles.carroussel}>
          <MatchCarroussel />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121218',
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#222231',
    // borderColor: '#3C3C53',
    // borderBottomWidth: 1,
    flex: 1 / 3,
    width: '100%',
  },
  profile_photo: {
    aspectRatio: 1 / 1,
    height: '50%',
    borderRadius: 999,
  },
  next: {
    flex: 1 / 3,
    paddingVertical: '10%',
    width: '100%',
  },
  title: {
    marginLeft: '15%',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  carroussel: {
    flex: 1,
    width: '100%',
    paddingVertical: '5%',
  },
});
