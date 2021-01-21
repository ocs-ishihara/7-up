import React, { useEffect } from 'react';

import Confirm from '../../../components/book/bConfirm/ConfirmComponent';

const ConfirmContainer = () => {
  useEffect(() => {
    console.log('ConfirmContainer:useEffectによる初回処理');
  }, []);
  return (
    <div>
      <Confirm />
    </div>
  );
};

export default ConfirmContainer;
