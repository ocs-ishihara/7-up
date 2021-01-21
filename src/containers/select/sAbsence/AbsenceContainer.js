import React, { useEffect } from 'react';

import Header from '../../../components/header/Header3Component';
import Absence from '../../../components/select/sAbsence/AbsenceComponent';

const AbsenceContainer = () => {
  useEffect(() => {
    console.log('AbsenceContainer:useEffectによる初回処理');
  }, []);
  return (
    <div>
      <Header title="欠課届" />
      <Absence />
    </div>
  );
};

export default AbsenceContainer;
