import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* Header Component */}
        <Header />
        <div className='app__body'>
          {/* Sidebar Component */}
          <Sidebar /> {/* React Router -> Chat Screen */}
          <Switch>
            <Route path='/room/:roomId'>
              <Chat />
            </Route>
            <Route path='/'>
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
