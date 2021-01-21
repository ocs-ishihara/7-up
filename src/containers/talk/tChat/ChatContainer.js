import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../../components/header/Header3Component';
import Chat from '../../../components/talk/tChat/ChatComponent';

const useQuery = () => {
  // useLocationでlocationを取得
  const location = useLocation();

  // locationからクエリストリングを取得
  return new URLSearchParams(location.search);
};

const ChatContainer = () => {
  const messageEndRef = useRef();
  const scrollToLatest = () => {
    messageEndRef.current.scrollIntoView({
      block: 'end',
    });
  };

  useEffect(() => {
    console.log('ChatContainer:useEffectによる初回処理');
    scrollToLatest();
  }, []);

  // 対象のページをクエリストリングから取得
  const query = useQuery();
  const targetPage = query.get('page');

  return (
    <div>
      <Header title={targetPage} />
      <Chat />
      <div id="bottom-of-list" ref={messageEndRef} />
    </div>
  );
};

export default ChatContainer;
