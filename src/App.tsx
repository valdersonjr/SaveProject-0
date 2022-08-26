import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import toggleOffUrl from './assets/toggle_off.png';

import {
  Forecast,
  Home,
  CepSearch,
  WeatherSearch,
  WheatherInformations,
  CepDisplay,
  RegisterContact,
} from './pages';

import './styles.css';

interface ICoordinates {
  lat: number;
  lng: number;
}

interface ILocation {
  state: string;
  city: string;
  street: string;
}

function App() {
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [toggle, setToggle] = useState<string>(toggleOffUrl);
  const [location, setLocation] = useState<ILocation>({
    state: '',
    city: '',
    street: '',
  });

  let navigate = useNavigate();

  const coordinates: ICoordinates = { lat: lat, lng: lng };

  useEffect(() => {
    if (lat !== 0) {
      navigate('/buscar-clima-informacoes');
    }
  }, [lat]);

  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/buscar-clima'
          element={
            <WeatherSearch
              toggle={toggle}
              setToggle={setToggle}
              setLat={setLat}
              setLng={setLng}
            />
          }
        />
        <Route
          path='/buscar-clima-informacoes'
          element={
            <WheatherInformations
              coordinates={coordinates}
              toggle={toggle}
              setToggle={setToggle}
            />
          }
        />
        <Route
          path='/buscar-clima-previsao'
          element={
            <Forecast
              coordinates={coordinates}
              toggle={toggle}
              setToggle={setToggle}
            />
          }
        />
        <Route
          path='/buscar-cep'
          element={<CepSearch location={location} setLocation={setLocation} />}
        />
        <Route
          path='/listar-cep'
          element={
            <CepDisplay
              state={location.state}
              city={location.city}
              street={location.street}
            />
          }
        />
        <Route path='/cadastrar-contato' element={<RegisterContact />} />
      </Routes>
    </div>
  );
}

export default App;
