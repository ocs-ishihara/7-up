import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../../components/header/Header3Component';
import History from '../../../components/report/rHistory/History';
import NotFound from '../../NotFound';

const useQuery = () => {
  // useLocationでlocationを取得
  const location = useLocation();

  // locationからクエリストリングを取得
  return new URLSearchParams(location.search);
};

const HistoryContainer = () => {
  const messageEndRef = useRef();
  const scrollToLatest = () => {
    messageEndRef.current.scrollIntoView({
      block: 'center',
    });
  };

  useEffect(() => {
    console.log('HistoryContainer:useEffectによる初回処理');
    scrollToLatest();
  }, []);

  // 対象のページをクエリストリングから取得
  const query = useQuery();
  const targetPage = query.get('page');

  let title = "";
  switch(targetPage) {
    case '1':
      title="インターンシップ報告書";
      break;
    case '2':
      title="各書類申請書";
      break;
    case '3':
      title="参加報告書";
      break;
    case '4':
      title="受験報告書";
      break;
    case '5':
      title="自己評価シート";
      break;
    case '6':
      title="内定報告書";
      break;
    case '7':
      title="内定者研修参加報告書";
      break;
    default:
      return (
        <div>
          <NotFound />
        </div>
      );
  };
  return (
    <div>
      <Header title={title} />
      <div id="top-of-list" ref={messageEndRef} />
      <History targetPage={targetPage} />
    </div>
  );
};

export default HistoryContainer;
