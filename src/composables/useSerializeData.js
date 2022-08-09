import { useObjToArr } from './useObjToArr';
import { useDate } from './useDate';

export function useSerializeData (data) {

  const currencies = useObjToArr(data.Valute)
  const date = useDate(data.Date)
  const currenciesList = useObjToArr(data.Valute).map((curr) => {
    return {
      name: curr.Name,
      value: curr.Value / curr.Nominal
    }
  })

  return { currencies, date, currenciesList }
}
