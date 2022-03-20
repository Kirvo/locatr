import { useNavigate } from 'react-router-dom';
import { useCurrentPosition } from '@capacitor-community/geolocation-react';

import { CogIcon } from '../../assets/icons/cog';

import './home.module.css';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const { currentPosition, getPosition } = useCurrentPosition();

  useEffect(() => {
    let interval = setInterval(() => handleRefreshPosition(), 3000);

    return () => clearInterval(interval);
  }, []);

  const handleRefreshPosition = () => {
    getPosition();
  };

  return (
    <div className="page-container relative p-4 flex flex-direction-column gap-4">
      <CogIcon className="absolute top-4 right-4 w-[32px] cursor-pointer" onClick={() => navigate('/settings')} />

      <h1 className="text-3xl font-bold underline">¡Hola mundo!</h1>

      <ul className="list-disc">
        <li>Latitud: {currentPosition?.coords?.latitude || '-'}</li>
        <li>Longitud: {currentPosition?.coords?.longitude || '-'}</li>
      </ul>
    </div>
  );
};

export default Home;
