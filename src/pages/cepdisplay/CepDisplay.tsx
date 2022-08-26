import { useEffect, useState } from 'react';

import { Return } from '../../components';

interface ILocation {
  state: string;
  city: string;
  street: string;
}

interface ILocationInformations {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function CepDisplay({ state, city, street }: ILocation) {
  const [locationList, setLocationList] = useState<ILocationInformations[]>([]);

  const verifyContent = (content: string) => {
    if (content === '') {
      return 'N/A';
    } else {
      return content;
    }
  };

  const axios = require('axios');

  useEffect(() => {
    axios
      .get(`https://viacep.com.br/ws/${state}/${city}/${street}/json/`)
      .then(function (response: any) {
        setLocationList(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <div className='mb-40'>
      <Return />
      {locationList[0] === undefined ? (
        <div className='mt-80 flex flex-col justify-center text-center'>
          <h2 className='text-5xl select-none  font-bold'>
            Por favor, insira um endereço válido!
          </h2>
          <h3 className='text-2xl'>Exemplo: RS / Porto Alegre / Domingos </h3>
        </div>
      ) : (
        locationList.map((location, key) => {
          return (
            <div
              key={key}
              className='w-[40%] m-auto mt-24  flex flex-col text-center border-2 bg-slate-700/80	'
            >
              <div className='mt-6'>
                <span>CEP: </span>{' '}
                <span className='text-slate-300'>
                  {verifyContent(location.cep)}
                </span>
              </div>
              <div>
                <span>Logradouro: </span>{' '}
                <span className='text-slate-300'>
                  {verifyContent(location.logradouro)}
                </span>
              </div>
              <div>
                <span>Complemento: </span>{' '}
                <span className='text-slate-300'>
                  {verifyContent(location.complemento)}
                </span>
              </div>
              <div>
                <span>Bairro: </span>{' '}
                <span className='text-slate-300'>
                  {verifyContent(location.bairro)}
                </span>
              </div>
              <div>
                <span>Localidade: </span>{' '}
                <span className='text-slate-300'>
                  {verifyContent(location.localidade)}
                </span>
              </div>
              <div className='mb-6'>
                <span>Uf: </span>{' '}
                <span className='text-slate-300'>
                  {verifyContent(location.uf)}
                </span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
