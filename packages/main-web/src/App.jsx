import React from 'react';
import './App.css';
import { App1 } from 'app1';
import { Button } from 'common-components';

function App() {
  return (
    <div>
      <h1>Main Application</h1>
      <App1 />
      <Button variant={'primary'}>Primary</Button>
      <Button variant={'secondary'}>Secondary</Button>
      <Button variant={'teritiary'}>Teritiary</Button>

      {/* <App2 /> */}
    </div>
  );
}

export default App;