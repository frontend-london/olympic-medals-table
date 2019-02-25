import { AvailableCountryInterface } from './../interfaces/availableCountry';

export const get = (url: string, onError: any): Promise<Array<AvailableCountryInterface>> => {
  return new Promise<Array<AvailableCountryInterface>>(
    (resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => onError(err))
    }
  )
}

