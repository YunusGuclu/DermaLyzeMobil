import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navigateTo = (path) => {
    setMenuOpen(false);
    router.push(path);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigateTo('/')}>
        <Image source={require('../../assets/resim/6025105.png')} style={styles.icon} />
        <Text style={styles.title}>DermaLyze</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuToggle} onPress={() => setMenuOpen(!menuOpen)}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigateTo('/asistan')}>
            <Text style={styles.menuItem}>Sağlık Asistanım</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('/lezyon')}>
            <Text style={styles.menuItem}>Lezyon Analizi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('/cilt')}>
            <Text style={styles.menuItem}>Cilt Analizi</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo('/deri')}>
            <Text style={styles.menuItem}>Deri Analizi</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'rgb(30, 30, 64)',
    padding: 16,
    borderBottomWidth: 4,
    borderBottomColor: 'rgb(39, 39, 79)',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuToggle: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  menuText: {
    fontSize: 24,
    color: 'white',
  },
  menu: {
    marginTop: 16,
    backgroundColor: 'rgb(30, 30, 64)',
    borderRadius: 10,
    padding: 10,
  },
  menuItem: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 4,
  },
});
