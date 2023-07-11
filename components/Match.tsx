import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TMatch} from '../types';
import {colors} from '../config/colors';
import Player from './Player';
import CalendarDate from 'react-native-bootstrap-icons/icons/calendar-date';
import GeoAltFill from 'react-native-bootstrap-icons/icons/geo-alt-fill';
import Clock from 'react-native-bootstrap-icons/icons/clock';

interface MatchProps {
  match: TMatch;
}

const borderColor = 'neutral500';
const textColor = 'neutral700';

const Match = ({match}: MatchProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{match.ranked ? 'Ranked' : 'Friendly'}</Text>
        <View style={styles.date}>
          <Text style={styles.text}>{match.datetime.toLocaleString()}</Text>
          <CalendarDate style={styles.icon} />
        </View>
      </View>
      <View style={styles.players}>
        <View style={styles.player}>
          <Player player={match.teamA[0]} />
        </View>
        <View style={styles.player}>
          <Player player={match.teamA[1]} />
        </View>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <Text style={{fontWeight: '900'}}>vs.</Text>
        <View style={styles.player}>
          <Player player={match.teamB[0]} />
        </View>
        <View style={styles.player}>
          <Player player={match.teamB[1]} />
        </View>
      </View>
      <View style={styles.moreInfo}>
        <View style={styles.row}>
          <GeoAltFill style={styles.icon} />
          <Text style={styles.text}>{match.location}</Text>
        </View>
        <View style={styles.row}>
          <Clock style={styles.icon} />
          <Text style={styles.text}>{`${match.duration}min`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Match;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderColor: colors[borderColor],
    borderWidth: 1,
    borderRadius: 16,
    padding: '2%',
    overflow: 'hidden',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors[borderColor],
    borderBottomWidth: 1,
    paddingHorizontal: '2%',
  },
  date: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 5,
  },
  icon: {
    color: colors[textColor],
    justifyContent: 'center',
    alignItems: 'center',
  },
  players: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  player: {
    width: '18%',
  },
  moreInfo: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: '8%',
    gap: 5,
  },
  text: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    color: colors[textColor],
  },
  title: {
    fontFamily: 'Mulish-ExtraBold',
    fontSize: 16,
    color: colors[textColor],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    height: 'auto',
  },
});
