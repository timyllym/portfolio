import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import DesignView from './views/DesignView';
import VideoView from './views/VideoView';
import CodeView from './views/CodeView';
import './App.scss';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
          <Switch>
            <Route path="/design">
              <DesignView />
            </Route>
            <Route path="/video">
              <VideoView />
            </Route>
            <Route path="/code">
              <CodeView />
            </Route>
            <Route path="/">
              <Redirect to="/design" />
            </Route>
          </Switch>
      </main>
    </div>
  );
}

export default App;
