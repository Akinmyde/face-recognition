import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai'
import Navigation from './components/navigation/Navigations';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
const { CLARIFAI_API_KEY } = process.env

const app = new Clarifai.App({
  apiKey: CLARIFAI_API_KEY || 'cffd958a5c004502b559cd904a1892e6'
})

const particlesOptions = 
{ particles:
  { number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
    }
  }

  calculateFaceLocation = data => {
    const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const { width, height } = image;
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox = (box) => {
    this.setState({box})
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(resp => this.displayFaceBox(this.calculateFaceLocation(resp)))
      .catch(err => console.log(err)); 
  }

  onRouteChange = (route) => {
    if (route === 'home') { this.setState({ isSignedIn: true });}
    else if (route === 'signout') { this.setState({ isSignedIn: false });}
    this.setState({ route });
  }

  render() {
    const { onInputChange, onSubmit, onRouteChange } = this;
    const { imageUrl, box, isSignedIn, route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
        <Logo />
        { route === 'home'
        ? 
        <div>
          <Rank />
          <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onSubmit} />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
        : (
          route === 'signin'
          ? <Signin onRouteChange={onRouteChange} />
          : <Register onRouteChange={onRouteChange} />
        )
        }
      </div>
    );
  }
}

export default App;

