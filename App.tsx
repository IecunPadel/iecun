import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {colors} from './config/colors';
import LinearGradient from 'react-native-linear-gradient';
import Match from './components/Match';
import {TMatch, TPlayerInfo} from './types';
import Carousel from './components/Carousel';

const yobama =
  'https://i.kym-cdn.com/photos/images/newsfeed/001/441/147/84e.jpg';

const teamA: Array<TPlayerInfo> = [
  {
    name: 'Yobama',
    level: 5.36,
    photo: 'https://i.kym-cdn.com/photos/images/newsfeed/001/441/147/84e.jpg',
  },
  {
    name: 'Obamos',
    level: 5.25,
    photo:
      'https://ih1.redbubble.net/image.1036116537.8224/flat,750x1000,075,f.jpg',
  },
];

const teamB: Array<TPlayerInfo> = [
  {
    name: 'Dr. Phil',
    level: 5.47,
    photo:
      'https://miro.medium.com/v2/resize:fit:2400/1*utCq9YCvCfkTFklSeaSgAw.jpeg',
  },
  {
    name: 'Obunga',
    level: 5.51,
    photo: 'https://i1.sndcdn.com/artworks-000369589368-pucuvi-t500x500.jpg',
  },
];

const newMatch: TMatch = {
  teamA: teamA,
  teamB: teamB,
  datetime: new Date(),
  ranked: true,
  location: 'Pàdel Colors, Roquetes',
  duration: 90,
};

const newMatch2: TMatch = {
  teamA: teamB,
  teamB: teamA,
  datetime: new Date(),
  ranked: true,
  location: 'Pàdel Colors, Roquetes',
  duration: 90,
};

const matches = [<Match match={newMatch} />, <Match match={newMatch2} />];

export default function App(): JSX.Element {
  return (
    <View style={styles.background}>
      <LinearGradient
        colors={[colors.primary200, colors.white]}
        style={styles.gradient}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        locations={[0.9, 0.95]}>
        <Image style={styles.profile_photo} source={{uri: yobama}} />
      </LinearGradient>
      <View style={styles.next}>
        <Text style={styles.title}>Next matches</Text>
        <Carousel items={matches} pagination={true} />
        {/* <Match match={newMatch} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1 / 3,
    width: '100%',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '100%',
  },
  title: {
    fontFamily: 'Mulish-ExtraBold',
    marginLeft: '5%',
    marginBottom: '2%',
    color: colors.neutral900,
    fontSize: 20,
  },
  carousel: {
    flex: 1,
    width: '100%',
    paddingVertical: '2%',
  },
});
