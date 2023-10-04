import React, { Component } from 'react';
import './App.css'; // Import the CSS file
import image0 from './00.jpg';
class App extends Component {
  constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      person: {
        fullName: 'Anonymous',
        bio: 'Anonymous est un groupe organisé de pirates informatiques.',
        imgSrc: image0,
        profession: 'Software Engineer',
      },
      show: false,
      mountedTime: null,
    };
  }

  componentDidMount() {
    // Set the mounted time when the component is mounted
    this.setState({ mountedTime: new Date().toLocaleTimeString() });
  }

  toggleProfile = () => {
    // Toggle the 'show' state
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Person State</h1>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {show && (
          <div>
            <h2>Anonymous's Profile</h2>
            <img src={imgSrc} alt={fullName} />
            <p>Full Name: {fullName}</p>
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Mounted Time: {mountedTime}</p>
      </div>
    );
  }
}

export default App;


