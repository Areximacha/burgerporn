import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/Feather'

export default class Home extends Component {
  static propTypes = {
    test: PropTypes.string
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Project B',
      headerRight: (
        <Button
          onPress={() => navigation.navigate('Settings')}
          title='Settings'
          color='#fff'
        />
      ),
      tabBarIcon: (
        <Icon name='home' size={30} color='#000' style={styles.icon} />
      )
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.home}>
          home
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
  home: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
