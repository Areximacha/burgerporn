import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Feather'

export default class Feed extends Component {
  static propTypes = {
    test: PropTypes.string
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Feed',
      tabBarIcon: (
        <Icon name='grid' size={30} color='#000' />
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.home}>
          Feed
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  home: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
