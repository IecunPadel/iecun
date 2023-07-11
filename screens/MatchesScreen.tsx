import {Image, StyleSheet, Text, View} from 'react-native';
import {TMatch, TPlayerInfo} from '../types';
import Match from '../components/Match';
import Carousel from '../components/Carousel';
import {colors} from '../config/colors';

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

const matches = [
  <Match match={newMatch} />,
  <Match match={newMatch2} />,
  <Match match={newMatch} />,
];

export default function MatchesScreen(): JSX.Element {
  return (
    <View style={styles.background}>
      <View style={styles.gradient}>
        <Image style={styles.profile_photo} source={{uri: yobama}} />
      </View>
      <View style={styles.next}>
        <Text style={styles.title}>Next matches</Text>
        <Carousel items={matches} pagination={true} />
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
    flex: 1 / 4,
    width: '100%',
    borderBottomColor: colors.neutral100,
    borderBottomWidth: 7,
  },
  profile_photo: {
    aspectRatio: 1 / 1,
    height: '60%',
    borderRadius: 999,
  },
  next: {
    flex: 0.375,
    width: '100%',
    paddingTop: 10,
    borderBottomColor: colors.neutral100,
    borderBottomWidth: 7,
  },
  title: {
    fontFamily: 'Mulish-ExtraBold',
    marginLeft: '5%',
    marginTop: 5,
    marginBottom: 15,
    color: colors.neutral900,
    fontSize: 20,
  },
  carousel: {
    flex: 1,
    width: '100%',
    paddingVertical: '2%',
  },
});
