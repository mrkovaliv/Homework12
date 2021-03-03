import React from 'react';
import styles from './App.module.css';
import RetroColomn from './Retrospective/RetroColomn/RetroColomn'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles['app-main']}>
        <RetroColomn title='Good things' color='#068E21' />
        <RetroColomn title='Bad things' color='#C62609' />
        <RetroColomn title='Action items' color='#0C2A99' />

      </div>
    );
  }

}

export default App;
