import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  PanResponder,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.pan = new Animated.ValueXY()

    this.cardPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.pan.x, dy: this.pan.y },
      ]),
      onPanResponderRelease: (e, { dx }) => {
        const absDx = Math.abs(dx)
        const direction = absDx / dx

        if (absDx > 120) {
          Animated.decay(this.pan, {
            velocity: { x: 3 * direction, y: 0 },
            deceleration: 0.995,
          }).start(this.props.onSwipeOff)
        } else {
          Animated.spring(this.pan, {
            toValue: { x: 0, y: 0 },
            friction: 4.5,
          }).start()
        }
      },
    })
  }

  render() {
    const { name, bio, id, email } = this.props.profile;
    const fbImage = id;

    const rotateCard = this.pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['10deg', '0deg', '-10deg'],
    })
    const animatedStyle = {
      transform: [
        { translateX: this.pan.x },
        { translateY: this.pan.y },
        { rotate: rotateCard },
      ],
    }

    return (
      <Animated.View
      {...this.cardPanResponder.panHandlers}
      style={[styles.card, animatedStyle]}>
      <Image
      style={{ flex: 1 }}
      source={{ uri: fbImage }}
      />

      <TouchableOpacity onPress={() => this.props.testeProps()}>
      <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 20 }}>{name}</Text>
      <Text style={{ fontSize: 17, marginTop: 10, color: 'black' }}>{bio}</Text>
      </View>
      </TouchableOpacity>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: width - 20,
    height: height * 0.7,
    marginTop: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
  }
});
