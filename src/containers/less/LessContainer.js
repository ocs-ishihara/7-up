import React, { useEffect } from 'react';

import Header from '../../components/header/Header3Component';
import Less from '../../components/less/LessComponent';

const LessContainer = () => {
  useEffect(() => {
    console.log('LessContainer:useEffectによる初回処理');
  }, []);
  return (
    <div>
      <Header title="タイムライン投稿画面" />
      <Less />
    </div>
  );
};

export default LessContainer;
