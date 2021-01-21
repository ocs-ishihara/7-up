import React, { useEffect, useRef } from 'react';

import Header from '../../components/header/Header1Component';
import Report from '../../components/report/ReportComponent';

const ReportContainer = () => {
  const messageEndRef = useRef();
  const scrollToLatest = () => {
    messageEndRef.current.scrollIntoView({
      block: 'center',
    });
  };

  useEffect(() => {
    console.log('ReportContainer:useEffectによる初回処理');
    scrollToLatest();
  }, []);

  return (
    <div>
      <Header title="各種書類提出" />
      <div id="top-of-list" ref={messageEndRef} />
      <Report />
    </div>
  );
};

export default ReportContainer;
