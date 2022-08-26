import { kelvinConverterToType } from '../../service';
import { getDayOfTheWeekName } from '../../pages/forecast/service';

import toggleOnUrl from '../../assets/toggle_on.png';
import toggleOffUrl from '../../assets/toggle_off.png';

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

interface IForecastDataDay {
  toggle: string;
  timestamp: ITimestamp;
  day1: IForecastDisplayInformations;
  day2: IForecastDisplayInformations;
  day3: IForecastDisplayInformations;
  day4: IForecastDisplayInformations;
  day5: IForecastDisplayInformations;
}

export default function FiveDaysForecast({
  toggle,
  timestamp,
  day1,
  day2,
  day3,
  day4,
  day5,
}: IForecastDataDay) {
  const data = [day1, day2, day3, day4, day5];

  return (
    <>
      {data.map((data, key) => {
        let maxTemperature = data.temperature.max;
        let minTemperature = data.temperature.min;

        if (toggle === toggleOffUrl) {
          maxTemperature = kelvinConverterToType(maxTemperature, 'fahrenheit');
          minTemperature = kelvinConverterToType(minTemperature, 'fahrenheit');
        } else if (toggle === toggleOnUrl) {
          maxTemperature = kelvinConverterToType(maxTemperature, 'celsius');
          minTemperature = kelvinConverterToType(minTemperature, 'celsius');
        }

        let week;

        if (timestamp.week > 8) {
          week = getDayOfTheWeekName(timestamp.week + key - 7);
        } else {
          week = getDayOfTheWeekName(timestamp.week + key);
        }

        return (
          <div className='mb-4 flex flex-row items-center ' key={key}>
            <div className='w-50 text-center flex flex-row place-content-between'>
              <div className='w-32 text-lg text-start flex flex-row gap-2'>
                <span>{week},</span>
                <span>{timestamp.day + key}</span>
                <span>{timestamp.month}</span>
              </div>
              <div className='w-22 text-lg'>
                <span className='mr-4'>{Math.round(minTemperature)}</span>
              </div>
            </div>
            <div className='w-44 h-1 bg-gradient-to-r from-black to-indigo-500' />
            <div className='w-52 text-lg text-center flex flex-row gap-3'>
              <div className='ml-4'>
                <span className=''>{Math.round(maxTemperature)}</span>
              </div>
              <div className='w-40 text-center'>
                <span>
                  {data.weatherDescription !== undefined
                    ? data.weatherDescription
                    : 'N/A'}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
