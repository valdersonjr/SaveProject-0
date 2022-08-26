import { Header } from '../../components';
import { SearchBar } from '../../components/searchbar';

import toggleOnUrl from '../../assets/toggle_on.png';
import toggleOffUrl from '../../assets/toggle_off.png';

interface IProps {
  toggle: string;
  setToggle: (e: string) => void;
  setLat: (e: number) => void;
  setLng: (e: number) => void;
}

export default function WeatherSearch({
  toggle,
  setToggle,
  setLat,
  setLng,
}: IProps) {
  const handleToggleChange = () => {
    if (toggle === toggleOffUrl) {
      setToggle(toggleOnUrl);
    } else {
      setToggle(toggleOffUrl);
    }
  };

  return (
    <>
      <Header />
      <img
        className='inline w-24 h-8 mt-4 mr-4 fixed top-0 right-9'
        src={toggle}
        alt='Icon of a toggle button off'
        onClick={handleToggleChange}
      />

      <div className='mt-80 flex justify-center'>
        <div className='flex flex-col text-center select-none'>
          <h2 className='mb-4 font-sans bold text-5xl tracking-widest cursor-default'>
            Como está o tempo hoje?
          </h2>
          <SearchBar setLat={setLat} setLng={setLng} />
        </div>
      </div>
    </>
  );
}
