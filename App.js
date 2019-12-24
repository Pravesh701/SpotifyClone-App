import React, {Component} from 'react';
import SplashSpotify from './src/components/Spotify/splash_Spotify';
import MAinContainer from './src/navigators/mainNavigators';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      wait: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        wait: true,
      });
    }, 3000);
  }

  render() {
    const {wait} = this.state;
    if (wait) {
      return <MAinContainer />;
    } else {
      return <SplashSpotify />;
    }
  }
}
