import React, { useEffect } from 'react';

import Header from '../../components/header/Header1Component';
import Select from '../../components/select/SelectComponent';

const SelectContainer = () => {
  useEffect(() => {
    console.log('SelectContainer:useEffectによる初回処理');
  }, []);
  return (
    <div>
      <Header title="報告書選択" />
      <Select />
    </div>
  );
};

export default SelectContainer;
