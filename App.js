import React, { useState, useEffect } from 'react'
import { Image, MaskedViewIOS, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Constants from 'expo-constants'

import logo from './assets/logo.png'

export default function App() {
  useEffect(() => {
    
  },[])

  const [ip, setIp] = useState('')

  const handleSearch = async () => {
    setIp(
       'Descobrindo IP...'
    )

    const ipSearch = await fetch('https://httpbin.org/ip')
    const data = await ipSearch.json()

    setIp(
      data.origin
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Image source={logo} />
        <Text style={styles.ip}>{ip}</Text>
        <TouchableOpacity
          style={styles.btnDescobrir}
          activeOpacity={0.4}
          onPress={() => handleSearch()}
        >
          <Text style={styles.btnText}>Descobrir meu IP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Matheus Fernandes ©</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: Constants.statusBarHeight,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ip: {
    fontSize: 18,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
  },
  btnDescobrir: {
    borderWidth: 2,
    borderColor: '#44D2F2',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#44C1F2',
  },
  btnText: {
    fontSize: 18,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#FFF',
  },
  footer: {
    alignItems: 'center',
    padding: 10,
  },
  footerText: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#0D0D0D',
  }
})
