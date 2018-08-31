import React from 'react';
import Top from './Top';
import Content from './Content';

function App(props) {
  const {toggleTheme} = props;
  return (
      <div>
          <Top toggleTheme={toggleTheme}/>
          <Content/>
      </div>
  )
}

export default App;