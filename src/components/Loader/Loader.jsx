import { Audio } from 'react-loader-spinner';
import React from 'react';
import S from './Loader.module.css';
const Loader = () => (
      <div className={S.Loader}>
        <Audio type="TailSpin" color="#02be6e" height={100} width={100} />
      </div>
    );
  

export default Loader;
