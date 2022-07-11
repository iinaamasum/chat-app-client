import React from 'react';
import loading from '../images/logo/loading.gif';

const LoadingComponent = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div>
        <img className="w-48 h-28" src={loading} alt="" />
      </div>
    </section>
  );
};

export default LoadingComponent;
