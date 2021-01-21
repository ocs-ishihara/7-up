import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import * as Colors from '@material-ui/core/colors';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOn } from "../slices/darkMode";

import LoginContainer from './login/LoginContainer';
import HomeContainer from './home/Home1Container';
import Home2Container from './home/Home2Container';

import PrivateRoute from './privateRoute';
import NotFound from './NotFound';

import SignUp from '../components/SignUp';
import CounterContainer from './counter/CounterContainer';

const AppContainer = () => {
  useEffect(() => {
    console.log('AppContainer:useEffectによる初回処理');
  }, []);

  const dispatch = useDispatch();
  if (localStorage.getItem("dark") === "on") dispatch(toggleOn());
  const mode = useSelector(state => state.dark.mode);

  const theme = createMuiTheme({
    palette: {
      type: mode ? 'dark' : 'light',
      primary: mode ? Colors.indigo : Colors.lightBlue,
      secondary: mode ? Colors.amber : Colors.yellow,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div id="contents">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" exact>
              <LoginContainer />
            </Route>
            <Route path="/SignUp" exact>
              <SignUp />
            </Route>
            
            <PrivateRoute>
              <Switch>
                <Route
                  path="/home"
                  component={HomeContainer}
                />
                <Route
                  path="/home2"
                  component={Home2Container}
                />
                <Route
                  path="/counter"
                  exact
                  render={() => <CounterContainer />}
                />
                <Route component={NotFound} />
              </Switch>
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default AppContainer;
