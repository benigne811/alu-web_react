import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';

const styles = StyleSheet.create({
  body: { padding: '2rem', minHeight: '35vh' },
  footer: { borderTop: '3px solid #e0354b', textAlign: 'center', fontStyle: 'italic' },
});

function App() {
  return (
    <>
      <Header />
      <main className={css(styles.body)}><Login /><CourseList /><Notifications /></main>
      <Footer className={css(styles.footer)} />
    </>
  );
}

export default App;
