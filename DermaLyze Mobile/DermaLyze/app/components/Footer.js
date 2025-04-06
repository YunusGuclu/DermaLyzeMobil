import React from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';

export default function Footer() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <View style={styles.footer}>
      <View style={styles.icons}>
        <Image
          source={require('../../assets/resim/LinkedIn_icon.png')}
          style={styles.icon}
        />
        <Image
          source={require('../../assets/resim/github-icon-2.png')}
          style={styles.icon}
        />
      </View>
      <Text style={[styles.text, { fontSize: isMobile ? 12 : 14 }]}>
        @ 2025 Copyright: Yunus Güçlü
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'rgb(20, 20, 65)',
    paddingVertical: 15,
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
  text: {
    color: 'white',
  },
});
