import React from 'react';
import {
  ScrollView,
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import BottomMenu from './component/BottomMenu';
import {getTrackEvents} from '../model/events';
import Event from './component/Event';
import {getFavourites} from '../service/event';

class Track extends React.Component {
  constructor(props) {
    super(props);
    const {navigation} = props;
    const track = navigation.getParam('name');
    this.state = {
      track: track,
      events: [],
      favourites: [],
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name'),
    };
  };

  componentDidMount = async () => {
    const events = await getTrackEvents(this.state.track);
    const favourites = await getFavourites();
    this.setState({
      events: events,
      favourites: favourites,
    });
  };

  render() {
    return (
      <>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.title}>{this.state.track}</Text>
            <FlatList
              data={this.state.events}
              keyExtractor={item => item.id}
              renderItem={({item}) => <Event item={item} navigation={this.props.navigation} favourites={this.state.favourites} />}
            />
          </View>
        </ScrollView>
        <BottomMenu navigation={this.props.navigation} />
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 15,
    marginBottom: 65,
  },
  container: {
    alignItems: 'center',
    paddingLeft:10,
    paddingRight:10,
    textAlign:'center'
  },
  title: {
    textAlign: 'center',
    fontSize:28,
    fontWeight:'bold',
    lineHeight: 28,
    marginBottom: 35
  },
});

export default Track;
