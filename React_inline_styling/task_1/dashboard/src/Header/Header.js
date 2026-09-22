import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: { display: 'flex', borderBottom: '3px solid #e0354b' },
  logo: { width: '200px', height: '200px' },
  title: { marginTop: '100px', color: '#e0354b' },
});

function Header() {
  return <header className={css(styles.header)}><img className={css(styles.logo)} src="/holberton-logo.jpg" alt="School logo" /><h1 className={css(styles.title)}>School dashboard</h1></header>;
}

export default Header;
