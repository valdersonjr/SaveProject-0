import { useEffect, useState } from 'react';

import axios from 'axios';

import openWheatherApiKey from '../../APIKeys/openWheatherAPIKey';

import { WheatherInformationsDisplay } from '../../components';

import toggleOnUrl from '../../assets/toggle_on.png';
import toggleOffUrl from '../../assets/toggle_off.png';

interface ICoordinates {
  lat: number;
  lng: number;
}

interface ICoordinatesNToggle {
  toggle: string;
  coordinates: ICoordinates;
  setToggle: (e: string) => void;
}

export default function WheatherInformations({
  toggle,
  coordinates,
  setToggle,
}: ICoordinatesNToggle) {
  const [cityData, setCityData] = useState<any>(null);

  const api = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&lang=pt_br&appid=${openWheatherApiKey}`,
  });

  const handleToggleChange = () => {
    if (toggle === toggleOffUrl) {
      setToggle(toggleOnUrl);
    } else {
      setToggle(toggleOffUrl);
    }
  };

  useEffect(() => {
    api
      .get('')
      .then((response) => {
        setCityData(response.data);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, []);

  return (
    <>
      <img
        className='inline w-24 h-8 mt-4 mr-4 fixed top-0 right-9'
        src={toggle}
        alt='Icon of a toggle button off'
        onClick={handleToggleChange}
      />
      <WheatherInformationsDisplay
        toggle={toggle}
        city={cityData?.name}
        weatherDescription={cityData?.weather[0]?.description}
        temperature={cityData?.main?.temp}
        maxTemperature={cityData?.main?.temp_max}
        minTemperature={cityData?.main?.temp_min}
      />
    </>
  );
}
