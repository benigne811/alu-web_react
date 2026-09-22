import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import BodySection from '../BodySection/BodySection';
import Footer from '../Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <BodySection title="News from the School" />
        <BodySection title="Course list" />
        <Footer />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func,
};

App.defaultProps = {
  logOut: () => {},
};

export default App;
