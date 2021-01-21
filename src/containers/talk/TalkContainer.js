import React, { useEffect } from 'react';

import Header from '../../components/header/Header1Component';
import Header2 from '../../components/header/Header2Component';
import Talk from '../../components/talk/TalkComponent';

const TalkContainer = (props) => {
  useEffect(() => {
    console.log('TalkContainer:useEffectによる初回処理');
  }, []);

  if(props.page === 1) {
    return (
      <div>
        <Header title="トークページ(生徒)" />
        <Talk />
      </div>
    );
  }
  if(props.page === 2) {
    return (
      <div>
        <Header2 title="トークページ(講師)" />
        <Talk />
      </div>
    );
  }
};

export default TalkContainer;
