import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';

const Home = () => {
  return (
    <div>
      home
      <button onClick={() => signOut(auth)}>sdah</button>
    </div>
  );
};

export default Home;
