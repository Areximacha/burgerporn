import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

export default class Settings extends Component {
  static propTypes = {
    test: PropTypes.string
  }

  static navigationOptions = {
    title: 'Settings'
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.settings}>
          settings
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  settings: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
