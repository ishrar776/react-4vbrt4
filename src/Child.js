import React, { useContext } from 'react';
import { FirstNmae } from './App';
const ComB = () => {
  const fName = useContext(FirstNmae);
  return (
    <>
      {/* <div>{fName}</div> */}
      <FirstNmae.Consumer>
        {(fNmae1) => {
          return <>{fNmae1}</>;
        }}
      </FirstNmae.Consumer>
    </>
  );
};
export default ComB;
