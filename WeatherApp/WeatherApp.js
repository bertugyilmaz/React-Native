import React, {
  Component,
} from 'React';
import {
  AppRegistry,
  Text,
  styleSheet
} from 'react-native';

import Forecast from './Forecast';

const API_KEY = '6e44ce1e23be92f93fe388303696a999';

var WeatherApp = React.createClass({
  getInitialState: function() {
    return {
      zip: '',
      forecast: null
    };
  },

  class WeatherApp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        zip:'',
        forecast: null
      };
    }

    _handleTextChange(event){
      var zip = event.nativeEvent.text;
      this.setState({zip: zip});
      fetch('http://api.openweathermap.org/data/2.5/weather?q='
      + zip )
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
          }
        });
      })
      .catch((error) => {
        console.console.warn(error);
      });
    }

    render(){
      var content = null;
      if (this.state.forecast !== null) {
        content = <Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}/>;
      }
      return(
        <View style={style.container}>
          <Image source={require('./flowers.png')}
                 resizeMode="cover"
                 style={styles.backdrop}>

          <View style={styles.overlay}>
           <View style={styles.row}>
              <Text style={styles.mainText}>
                current weather for
              </Text>
              <View style={styles.zipContainer}>
                <TextInput style={[styles.zipCode, mainText]}
                           onSubmitEditing={(event) => this._handleTextChange(event)}/>
              </View>
           </View>
           {content}
          </View>
          </Image>
        </View>
      );
    }
  }

  const baseFontSize = 16;

  const styles =styleSheet.create({
    container: {
      flex:1,
      alingItems:'center',
      paddingTop:30
    },
    backdrop: {
      flex:1,
      flexDirection: 'column'
    },
    overlay: {
      paddingTop: 5,
      backgroundColor: '#000000',
      opacity: 0.5,
      flexDirection: 'column',
      alingItems: 'center'
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'flex-start',
      padding: 30
    },
    zipContainer: {
      flex: 1,
      borderBottomColor: '#DDDDDD',
      borderBottomWidth: 1,
      marginLeft: 5,
      marginTop: 3
    },
    zipCode: {
      width: 50,
      height: baseFontSize
    },
    mainText: {
      flex: 1,
      fontSize: baseFontSize,
      color: '#FFFFFF'
    }
  });

export default WeatherApp;
