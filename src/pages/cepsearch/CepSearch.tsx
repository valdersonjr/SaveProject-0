import { CepForm, Header } from '../../components';

interface ILocation {
  state: string;
  city: string;
  street: string;
}

interface ILocationSet {
  location: ILocation;
  setLocation: (e: ILocation) => void;
}

export default function CepSearch({ location, setLocation }: ILocationSet) {
  return (
    <>
      <Header />
      <div className='mt-80 flex justify-center'>
        <div className='flex flex-col text-center select-none'>
          <h2 className='mb-4 font-sans bold text-5xl tracking-widest cursor-default'>
            Buscar CEP
          </h2>
          <CepForm location={location} setLocation={setLocation} />
        </div>
      </div>
    </>
  );
}
