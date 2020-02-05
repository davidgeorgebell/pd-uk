import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Directory from './Pages/Homepage/Directory';
import ForceInfopage from './Pages/ForceInfopage/ForceInfopage';
import LoadingContextProvider from './contexts/LoadingContext';

function App() {
  return (
    <LoadingContextProvider>
      <Router>
        <div className='App'>
          <main>
            <Switch>
              <Route path='/' exact>
                <Directory />
              </Route>
              <Route path='/info/name' exact>
                <ForceInfopage />
              </Route>
              <Redirect to='/' />
            </Switch>
          </main>
        </div>
      </Router>
    </LoadingContextProvider>
  );
}

export default App;
