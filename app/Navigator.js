import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Tracks from './screen/Tracks';
import Track from './screen/Track';
import Event from './screen/Event';
import Favourites from './screen/Favourites';
import Settings from './screen/Settings';

const MainNavigator = createStackNavigator({
  Tracks: {screen: Tracks},
  Track: {screen: Track},
  Event: {screen: Event},
  Favourites: {screen: Favourites},
  Settings: {screen: Settings},
});

const App = createAppContainer(MainNavigator);

export default App;
