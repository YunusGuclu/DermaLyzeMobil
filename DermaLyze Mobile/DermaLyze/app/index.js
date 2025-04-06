import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Navbar from './components/Navbar';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ScrollView style={styles.container}>
      <Navbar />

      <View style={styles.headerImageContainer}>
        <Image
          source={require('../assets/resim/360_F_1002528808_bJI4Gn2lusUNarSS7ZYCTeE5DUr0qMWL.jpg')}
          style={[styles.headerImage, { height: isMobile ? 220 : 300 }]}
          resizeMode="cover"
        />
      </View>

      <View style={styles.textBelowImage}>
        <Text style={[styles.welcome, { fontSize: isMobile ? 28 : 36, textAlign: 'center' }]}>HOŞGELDİNİZ</Text>
        <Text style={[styles.subtitle, { fontSize: isMobile ? 18 : 22, textAlign: 'center' }]}>DermaLyze ile Cildinizi Keşfedin</Text>
      </View>

      {sections.map((section, index) => (
        <View style={styles.section} key={index}>
          <Image source={section.image} style={styles.cardImage} resizeMode="cover" />
          <View
            style={[
              styles.cardOverlayBox,
              {
                width: isMobile ? '90%' : '30%',
                left: isMobile ? '5%' : 20,
                padding: isMobile ? 12 : 15,
              },
            ]}
          >
            <Text style={[styles.cardTitle, { fontSize: isMobile ? 16 : 18 }]}>{section.title}</Text>
            <Text style={[styles.cardSubtitle, { fontSize: isMobile ? 14 : 16 }]}>{section.subtitle}</Text>
            <TouchableOpacity
              style={styles.darkButton}
              onPress={() => router.push(section.route)}
            >
              <Text style={styles.darkButtonText}>{section.buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* FOOTER */}
      <View style={styles.footer}>
        <View style={styles.footerIcons}>
          <Image source={require('../assets/resim/LinkedIn_icon.png')} style={styles.footerIcon} />
          <Image source={require('../assets/resim/github-icon-2.png')} style={styles.footerIcon} />
        </View>
        <Text style={styles.footerText}>@ 2025 Copyright: Yunus Güçlü</Text>
      </View>
    </ScrollView>
  );
}

const sections = [
  {
    title: 'SAĞLIK ASİSTANIM',
    subtitle: 'Akıllı sağlık asistanımıza danışarak hızlı yanıtlar alın.',
    image: require('../assets/resim/360_F_619411419_TI1j5q8ItTz6VTFxFtSUm0m8n5wYSWNy.jpg'),
    route: '/asistan',
    buttonText: 'Sağlık Asistanım',
  },
  {
    title: 'LEZYON ANALİZİ',
    subtitle: 'Şüpheli cilt lezyonlarını yapay zekâ ile inceleyin.',
    image: require('../assets/resim/360_F_283884186_YBKqPDaRmGJ0eh3nu6ZOcq6yvvO8NzLm.jpg'),
    route: '/lezyon',
    buttonText: 'Lezyon Analizi',
  },
  {
    title: 'CİLT ANALİZİ',
    subtitle: 'Cildinizin genel sağlık durumu hakkında bilgi alın.',
    image: require('../assets/resim/DERMATOLOJI-banner.jpg'),
    route: '/cilt',
    buttonText: 'Cilt Analizi',
  },
  {
    title: 'DERİ ANALİZİ',
    subtitle: 'AI destekli derinlemesine deri analiziyle tanıya yaklaşın.',
    image: require('../assets/resim/depositphotos_254341448-stock-photo-face-beautiful-girl-scnanning-grid.jpg'),
    route: '/deri',
    buttonText: 'Deri Analizi',
  },
];

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
  textBelowImage: {
    marginTop: 25,
    marginBottom: 30,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontWeight: 'bold',
    color: 'rgb(30, 30, 64)',
  },
  subtitle: {
    color: 'rgb(30, 30, 64)',
    marginTop: 5,
  },
  section: {
    marginBottom: 30,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 220,
    borderRadius: 20,
  },
  cardOverlayBox: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -60 }],
    backgroundColor: 'rgba(245, 244, 244, 0.6)',
    borderRadius: 15,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: 'rgba(5, 1, 25, 1)',
  },
  cardSubtitle: {
    color: 'rgba(5, 1, 25,1)',
    marginVertical: 8,
  },
  darkButton: {
    backgroundColor: 'rgb(20, 20, 65)',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  darkButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: 'rgb(20, 20, 65)',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
});
