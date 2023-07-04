import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

interface Match {
  photos: Array<string>;
  location: string;
  time: string;
}

const matches: Array<Match> = [
  {
    photos: [
      'https://i.kym-cdn.com/photos/images/newsfeed/001/441/147/84e.jpg',
      'https://ih1.redbubble.net/image.1036116537.8224/flat,750x1000,075,f.jpg',
      'https://static.wikia.nocookie.net/evade-nextbot/images/7/75/Obunga.png/revision/latest?cb=20230123140751&path-prefix=es',
      'https://ih1.redbubble.net/image.712577887.9843/flat,750x,075,f-pad,750x1000,f8f8f8.u10.jpg',
    ],
    location: 'Padel Colors, Roquetes',
    time: '15/10/2023, 12:00 - 13:15',
  },
  {
    photos: [],
    location: 'WIN Tortosa, Tortosa',
    time: '15/10/2023, 9:00 - 10:30',
  },
  {
    photos: [],
    location: 'Deg Ref, Deg',
    time: '15/10/2023, 9:00 - 10:30',
  },
];

export default function MatchCarroussel(): JSX.Element {
  const [matchIndex, setMatchIndex] = useState(0);

  function updateMatch() {
    if (matchIndex === matches.length) {
      setMatchIndex(0);
    } else {
      setMatchIndex(a => ++a);
    }
  }

  let images = [];

  for (let i = 0; i < 4; i++) {
    if (i < matches[matchIndex].photos.length) {
      images.push(
        <Image
          style={styles.photo}
          source={{uri: matches[matchIndex].photos[i]}}
        />,
      );
    } else {
      images.push(
        <Image
          style={styles.photo}
          source={{
            uri: 'https://i.pinimg.com/originals/2b/05/ef/2b05ef3609b862dfb7dfcbe95b7de949.jpg',
          }}
        />,
      );
    }
  }

  return (
    <TouchableOpacity style={styles.match} onPress={() => updateMatch}>
      <View style={styles.row}>{images}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  match: {
    flex: 1,
    width: '80%',
    height: '100%',
    alignItems: 'center',
    borderColor: '#4D4D53',
    borderWidth: 1,
    borderRadius: 8,
    padding: '5%',

    alignSelf: 'center',
  },
  photo: {
    aspectRatio: 1 / 1,
    height: '40%',
    borderRadius: 999,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  title: {
    color: '#F5F5F5',
  },
});
