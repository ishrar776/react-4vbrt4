import React, { createContext } from 'react';
import './style.css';
import ComB from './Child.js';
const FirstNmae = createContext();
export default function App() {
  return (
    <>
      <FirstNmae.Provider value={'israrKhan'}>
        <ComB />
      </FirstNmae.Provider>
    </>
  );
}
export { FirstNmae };
