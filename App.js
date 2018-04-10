import React, { Component } from 'react'
import {
  Platform,
  StatusBar,
  Dimensions,
  StyleSheet,
  View
} from 'react-native'
import Router from './app/Router/Router'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu'
// })

const height = Dimensions.get('screen').height

type Props = {}
export default class App extends Component<Props> {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='dark-content'
        />
        <Router />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: height
  }
})
