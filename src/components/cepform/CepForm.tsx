import { useNavigate } from 'react-router-dom';

import { brazilianStates } from './BrazilianStates';

interface ILocation {
  state: string;
  city: string;
  street: string;
}

interface ILocationSet {
  location: ILocation;
  setLocation: (e: ILocation) => void;
}
export default function CepForm({ location, setLocation }: ILocationSet) {
  let navigate = useNavigate();

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    setLocation({ ...location, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(location);
    navigate('/listar-cep');
  };

  return (
    <>
      <form className='w-[25rem] flex flex-col gap-4 align-center '>
        <select
          className='h-12 mb-1 bg-white text-xl indent-6 text-blue-300 rounded-lg outline-0 placeholder:text-blue-300'
          name='state'
          value={location.state || ''}
          onChange={handleChange}
        >
          {brazilianStates.map((state, key) => {
            if (key === 0) {
              return (
                <option key={key} selected>
                  {state}
                </option>
              );
            } else {
              return <option key={key}>{state}</option>;
            }
          })}
        </select>
        <input
          className='h-12 mb-1 bg-white text-xl indent-6 text-blue-300 rounded-lg outline-0 placeholder:text-blue-300'
          placeholder='Digite o nome da cidade'
          name='city'
          type='text'
          value={location.city || ''}
          onChange={handleChange}
        />
        <input
          className='h-12 mb-1 bg-white text-xl indent-6 text-blue-300 rounded-lg outline-0 placeholder:text-blue-300'
          placeholder='Digite o logradouro'
          name='street'
          type='text'
          value={location.street || ''}
          onChange={handleChange}
        />
        <button
          className='w-20 h-10 text-blue-300 bg-white self-center hover:bg-blue-100'
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </form>
    </>
  );
}
