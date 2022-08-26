import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  let navigate = useNavigate();
  const [navigation, setNavigation] = useState('');

  useEffect(() => {
    navigate(navigation);
  }, [navigation]);

  return (
    <div className='w-full h-14 flex justify-center'>
      <div className='h-full w-[60%] flex flex-row justify-evenly items-center text-3xl font-bold select-none '>
        <span
          className='font-sans cursor-pointer drop-shadow-3xl hover:text-4xl'
          onClick={() => {
            setNavigation('/');
          }}
        >
          Home
        </span>
        <span
          className='font-sans cursor-pointer drop-shadow-3xl hover:text-4xl'
          onClick={() => {
            setNavigation('/buscar-clima');
          }}
        >
          Consultar Clima
        </span>
        <span
          className='font-sans cursor-pointer drop-shadow-3xl hover:text-4xl'
          onClick={() => {
            setNavigation('/buscar-cep');
          }}
        >
          Buscar CEP
        </span>
        <span
          className='font-sans cursor-pointer drop-shadow-3xl hover:text-4xl'
          onClick={() => {
            setNavigation('/cadastrar-contato');
          }}
        >
          Cadastrar Contato
        </span>
      </div>
    </div>
  );
}
