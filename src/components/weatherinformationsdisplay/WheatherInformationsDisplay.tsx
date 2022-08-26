import { useNavigate } from 'react-router';

import { Return } from '../return';

import { kelvinConverterToType } from '../../service';

import toggleOnUrl from '../../assets/toggle_on.png';
import toggleOffUrl from '../../assets/toggle_off.png';

interface ICityDataNToggle {
  city: string;
  toggle: string;
  temperature: number;
  maxTemperature: number;
  minTemperature: number;
  weatherDescription: string;
}

export default function WheatherInformationsDisplay({
  city,
  toggle,
  temperature,
  maxTemperature,
  minTemperature,
  weatherDescription,
}: ICityDataNToggle) {
  let navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/buscar-clima-previsao');
  };

  if (toggle === toggleOffUrl) {
    temperature = kelvinConverterToType(temperature, 'fahrenheit');
    maxTemperature = kelvinConverterToType(maxTemperature, 'fahrenheit');
    minTemperature = kelvinConverterToType(minTemperature, 'fahrenheit');
  } else if (toggle === toggleOnUrl) {
    temperature = kelvinConverterToType(temperature, 'celsius');
    maxTemperature = kelvinConverterToType(maxTemperature, 'celsius');
    minTemperature = kelvinConverterToType(minTemperature, 'celsius');
  }

  return (
    <>
      <Return />
      <div className='mt-56 flex flex-col text-center'>
        <span className='uppercase bold font-sans text-5xl tracking-wider'>
          {city}
        </span>
        <span className='mb-2 font-sans text-2xl'>{weatherDescription}</span>

        <span className='font-sans text-6xl'>{Math.round(temperature)}</span>

        <div className='my-5 text-2xl leading-5'>
          <span className='mr-5 font-sans'>
            <span className='font-sans bold'>MAX: </span>
            {Math.round(maxTemperature)}
          </span>
          <span>
            <span className='font-sans bold'>MIN: </span>
            {Math.round(minTemperature)}
          </span>
        </div>
        <span
          className='font-sans text-sm cursor-pointer select-nonte underline leading-4'
          onClick={handleRedirect}
        >
          Previsão para os próximos 5 dias
        </span>
      </div>
    </>
  );
}
