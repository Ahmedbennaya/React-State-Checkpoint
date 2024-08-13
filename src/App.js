import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Ahmed Bennaya',
        bio: 'A beginner software developer.',
        imgSrc: 'https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/347240984_6558379937547307_4719219808834246356_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9j6X4PJhzjMQ7kNvgEF3oSB&_nc_ht=scontent.ftun10-1.fna&oh=00_AYDF1-TmB37zCKW8e2a-jE3MzhBdCIM80iJGsVMOIzXn3Q&oe=66C193A1',
        profession: 'Software Developer',
      },
      shows: false,
      intervalId: null,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, elapsedTime } = this.state;

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      paddingTop: '60px',
    };

    const navStyle = {
      width: '100%',
      padding: '15px',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    };

    const profileCardStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '30px',
      maxWidth: '350px',
      margin: '20px',
    };

    const imgStyle = {
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      objectFit: 'cover',
      marginBottom: '20px',
    };

    const buttonStyle = {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      backgroundColor: '#007BFF',
      color: '#ffffff',
      fontSize: '16px',
      marginBottom: '20px',
      transition: 'background-color 0.3s',
    };

    const titleStyle = {
      marginBottom: '20px',
      fontWeight: 'normal',
      color: '#333333',
    };

    return (
      <div style={containerStyle}>
        <div style={navStyle}>
          <h2>My Portfolio</h2>
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <h1 style={titleStyle}>Welcome to My Profile</h1>
          <button onClick={this.toggleProfile} style={buttonStyle}>
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>
          {shows && (
            <div style={profileCardStyle}>
              <img src={person.imgSrc} alt={person.fullName} style={imgStyle} />
              <h2>{person.fullName}</h2>
              <p>{person.bio}</p>
              <h3>{person.profession}</h3>
            </div>
          )}
          <p>Time since last mount: {elapsedTime} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;
