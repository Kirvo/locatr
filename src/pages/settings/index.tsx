import { useNavigate } from 'react-router-dom';

import { ChevronIcon } from '../../assets/icons/chevron';

import './settings.module.css';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container relative p-4">
      <ChevronIcon className="absolute top-4 right-4 w-[32px] cursor-pointer" onClick={() => navigate('/')} />

      <h1 className="text-3xl font-bold underline">Estás en Settings</h1>
    </div>
  );
};

export default Settings;
