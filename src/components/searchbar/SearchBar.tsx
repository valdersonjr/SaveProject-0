import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

interface ICoordinates {
  setLat: (e: number) => void;
  setLng: (e: number) => void;
}

const SearchBar = ({ setLat, setLng }: ICoordinates) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ['administrative_area_level_2'],
      componentRestrictions: {
        country: 'br',
      },
    },
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);

        setLat(lat);
        setLng(lng);
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text },
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className='mr-auto pl-5 text-xl text-blue-300 leading-6 flex flex-col hover:text-stone-400 hover:cursor-pointer'
        >
          {main_text}
        </li>
      );
    });

  return (
    <div ref={ref}>
      <input
        className='w-[42rem] h-12 mb-1 bg-white text-xl indent-6 text-blue-300 rounded-lg outline-0 placeholder:text-blue-300'
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='Digite o nome da cidade'
      />

      {status === 'OK' && (
        <ul className='w-[42rem] bg-white rounded-lg flex flex-col pt-4 pb-4 gap-4'>
          {renderSuggestions()}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
