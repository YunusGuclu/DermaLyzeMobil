import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Platform,
} from 'react-native';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { WebView } from 'react-native-webview';

export default function Asistan() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isWeb = Platform.OS === 'web';

  return (
    <ScrollView style={styles.container}>
      <Navbar />

      {/* Üst Resim */}
      <View style={styles.headerImageContainer}>
        <Image
          source={require('../assets/resim/360_F_619411419_TI1j5q8ItTz6VTFxFtSUm0m8n5wYSWNy.jpg')}
          style={[styles.headerImage, { height: isMobile ? 250 : 400 }]}
          resizeMode="cover"
        />
      </View>

      {/* Başlık */}
      <View style={styles.introTextContainer}>
        <Text style={[styles.title, { fontSize: isMobile ? 22 : 30 }]}>SAĞLIK ASİSTANIM</Text>
        <Text style={[styles.subtitle, { fontSize: isMobile ? 16 : 20 }]}>
          Akıllı sağlık asistanımıza danışarak hızlı yanıtlar alın.
        </Text>
      </View>

      {/* Chatbot */}
      <View style={[styles.chatbotContainer, { height: isMobile ? 600 : 700 }]}>
        {isWeb ? (
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/92Xly1zD9f8TD7Qvwsi9O"
            width="100%"
            height="100%"
            style={{ borderRadius: 15, border: 'none' }}
            title="Chatbot"
          />
        ) : (
          <WebView
            source={{ uri: 'https://www.chatbase.co/chatbot-iframe/92Xly1zD9f8TD7Qvwsi9O' }}
            style={{ borderRadius: 15 }}
          />
        )}
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerImageContainer: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
  },
  introTextContainer: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    zIndex: 2,
  },
  title: {
    fontWeight: 'bold',
    color: 'rgb(30, 30, 64)',
  },
  subtitle: {
    color: 'rgb(30, 30, 64)',
    marginTop: 8,
  },
  chatbotContainer: {
    marginHorizontal: '5%',
    marginTop: 40,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
});
