export const get = (url: string, onError: any): Promise<Array<string>> => {
  return new Promise<Array<string>>(
    (resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => onError(err))
    }
  )
}

