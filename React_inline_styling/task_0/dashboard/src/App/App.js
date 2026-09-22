import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
        <CourseList />
        <Notifications />
      </main>
      <Footer />
    </>
  );
}

export default App;
