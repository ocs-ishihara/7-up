import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../components/home/Home2Component';
import TalkContainer from '../talk/TalkContainer';
import Settings from '../../components/settings/SettingsComponent';

import BookContainer from '../book/BookContainer';
import ConfirmContainer from '../book/bConfirm/ConfirmContainer';
import LessContainer from '../less/LessContainer';

import ChatContainer from '../talk/tChat/ChatContainer';

const Home2Container = () => {
  useEffect(() => {
    console.log('Home2Container:useEffectによる初回処理');
  }, []);

  return (
    <div>
      <Switch>
        <Route
          path="/home2"
          exact
          component={Home}
        />
        <Route
          path="/home2/talk"
          exact
          render={() => <TalkContainer page={2} />}
        />
        <Route
          path="/home2/settings"
          exact
          render={() => <Settings page={2} />}
        />

        <Route
          path="/home2/book"
          exact
          component={BookContainer}
        />
        <Route
          path="/home2/book/bConfirm"
          exact
          component={ConfirmContainer}
        />
        <Route
          path="/home2/less"
          exact
          component={LessContainer}
        />

        <Route
          path="/home2/talk/tChat"
          exact
          render={() => <ChatContainer />}
        />
      </Switch>
    </div>
  );
};

export default Home2Container;
