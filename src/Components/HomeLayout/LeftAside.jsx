import React from 'react';
import Catagories from '../Catagories/Catagories.jsx';
import { Suspense } from 'react';

const LeftAside = () => {
    return (
      <div>
        <Suspense
          fallback={
            <div className="flex justify-center items-center ">
              Loading
              <span className="loading loading-spinner loading-xs"></span>
            </div>
          }
        >
          <Catagories></Catagories>
        </Suspense>
      </div>
    );
};

export default LeftAside;