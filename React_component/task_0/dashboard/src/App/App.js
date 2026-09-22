import React from 'react';
import Header from '../Header/Header';
import BodySection from '../BodySection/BodySection';
import Footer from '../Footer/Footer';

class App extends React.Component {
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

export default App;