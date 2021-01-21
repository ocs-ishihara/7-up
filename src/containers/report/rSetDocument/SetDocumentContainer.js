import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../../components/header/Header3Component';
import Intern from '../../../components/report/rSetDocument/InternComponent';
import Application from '../../../components/report/rSetDocument/ApplicationComponent';
import Participation from '../../../components/report/rSetDocument/ParticipationComponent';
import Assessment from '../../../components/report/rSetDocument/AssessmentComponent';
import Examination from '../../../components/report/rSetDocument/ExaminationComponent';

import Offer from '../../../components/report/rSetDocument/OfferComponent';
import Training from '../../../components/report/rSetDocument/TrainingComponent';
import NotFound from '../../NotFound';

const useQuery = () => {
  // useLocationでlocationを取得
  const location = useLocation();

  // locationからクエリストリングを取得
  return new URLSearchParams(location.search);
};

const SampleContainer = () => {
  const messageEndRef = useRef();
  const scrollToLatest = () => {
    messageEndRef.current.scrollIntoView({
      block: 'center',
    });
  };

  useEffect(() => {
    console.log('SetDocumentContainer:useEffectによる初回処理');
    scrollToLatest();
  }, []);

  // 対象のページをクエリストリングから取得
  const query = useQuery();
  const targetPage = query.get('page');

  if (targetPage === '1') {
    return (
      <div>
        <Header title="インターンシップ報告書" />
        <div ref={messageEndRef} />
        <Intern />
      </div>
    );
  } 
  if (targetPage === '2') {
    return (
      <div>
        <Header title="各書類申請書" />
        <div ref={messageEndRef} />
        <Application />
      </div>
    );
  }
  if (targetPage === '3') {
    return (
      <div>
        <Header title="参加報告書" />
        <div ref={messageEndRef} />
        <Participation />
      </div>
    );
  }
  if (targetPage === '4') {
    return (
      <div>
        <Header title="受験報告書" />
        <div ref={messageEndRef} />
        <Examination />
      </div>
    );
  }
  if (targetPage === '5') {
    return (
      <div>
        <Header title="自己評価シート" />
        <div ref={messageEndRef} />
        <Assessment />
      </div>
    );
  }

  if (targetPage === '6') {
    return (
      <div>
        <Header title="内定報告書" />
        <div ref={messageEndRef} />
        <Offer />
      </div>
    );
  } 
  if (targetPage === '7') {
    return (
      <div>
        <Header title="内定者研修 参加報告書" />
        <div ref={messageEndRef} />
        <Training />
      </div>
    );
  }
  return (
    <div>
      <NotFound />
    </div>
  );
};

export default SampleContainer;
