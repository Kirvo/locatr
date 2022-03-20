import { useNavigate } from 'react-router-dom';
import { CogIcon } from '../../assets/icons/cog';

import './home.module.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container relative p-4">
      <CogIcon className="absolute top-4 right-4 w-[32px] cursor-pointer" onClick={() => navigate('/settings')} />

      <h1 className="text-3xl font-bold underline">¡Hola mundo!</h1>
    </div>
  );
};

export default Home;
