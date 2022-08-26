import { useNavigate } from 'react-router-dom';
import { Return } from '../return';

import FiveDaysForecast from './FiveDaysForecast';

interface IMaxMin {
  max: number;
  min: number;
}
interface ITimestamp {
  day: number;
  week: number;
  month: string;
}

interface IForecastDisplayInformations {
  temperature: IMaxMin;
  weatherDescription: string;
}

interface IDaysForecast {
  city: string;
  toggle: string;
  timestamp: ITimestamp;
  day1: IForecastDisplayInformations;
  day2: IForecastDisplayInformations;
  day3: IForecastDisplayInformations;
  day4: IForecastDisplayInformations;
  day5: IForecastDisplayInformations;
}

//change to array
export default function ForecastInformations({
  city,
  toggle,
  timestamp,
  day1,
  day2,
  day3,
  day4,
  day5,
}: IDaysForecast) {
  let navigate = useNavigate();

  return (
    <>
      <div>
        <Return />
      </div>

      <div className='mt-32 flex flex-col items-center'>
        <span className='font-sans bold text-6xl text-center leading-10'>
          {city}
        </span>
        <span className='mt-6 mb-24 font-sans leading-7 tracking-wide	'>
          Previsão para os próximos 5 dias
        </span>

        <FiveDaysForecast
          timestamp={timestamp}
          toggle={toggle}
          day1={day1}
          day2={day2}
          day3={day3}
          day4={day4}
          day5={day5}
        />
      </div>
    </>
  );
}
