import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../components/home/Home1Component';
import TalkContainer from '../talk/TalkContainer';
import Settings from '../../components/settings/SettingsComponent';

import SelectContainer from '../select/SelectContainer';
import ReportContainer from '../report/ReportContainer';

import AbsenceContainer from '../select/sAbsence/AbsenceContainer';
import SetDocumentContainer from '../report/rSetDocument/SetDocumentContainer';
import HistoryContainer from '../report/rHistory/HistoryContainer';

import ChatContainer from '../talk/tChat/ChatContainer';

const Home1Container = () => {
  useEffect(() => {
    console.log('HomeContainer:useEffectによる初回処理');
  }, []);

  return (
    <div>
      <Switch>
        <Route
          path="/home"
          exact
          component={Home}
        />
        <Route
          path="/home/talk"
          exact
          render={() => <TalkContainer page={1} />}
        />
        <Route
          path="/home/settings"
          exact
          render={() => <Settings page={1} />}
        />

        <Route
          path="/home/select"
          exact
          component={SelectContainer}
        />
        <Route
          path="/home/select/report"
          exact
          component={ReportContainer}
        />

        <Route
          path="/home/select/sAbsence"
          exact
          component={AbsenceContainer}
        />
        <Route
          path="/home/select/report/rSetDocument"
          exact
          render={() => <SetDocumentContainer />}
        />
        <Route
          path="/home/select/report/rHistory"
          exact
          render={() => <HistoryContainer />}
        />

        <Route
          path="/home/talk/tChat"
          exact
          render={() => <ChatContainer />}
        />
      </Switch>
    </div>
  )
};

export default Home1Container;
