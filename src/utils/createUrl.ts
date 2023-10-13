interface ApiParams {
  parkCode?: string[];
  stateCode?: string[];
  limit?: number;
  start?: number;
  q?: string[];
}

const createApiUrl = ({ obj }: { obj: ApiParams }) => {
  const urlStart = 'http://developer.nps.gov/api/v1/parks?';
  const urlEnd = '&api_key=tZEBxgl9PvWVA6IoZ6geyHDasBEnQ1XwFNc8lbeo';
  const apiObj: { [key: string]: string } = {
    parkCode: '',
    stateCode: '',
    limit: '',
    start: '',
    q: '',
  };
  let apiParams = '';
  const objKeys = Object.keys(obj);

  for (const key of objKeys) {
    if (!apiObj.hasOwnProperty(key)) {
      return;
    }

    const paramValue = obj[key as keyof ApiParams] as string | string[];

    if (typeof paramValue === 'object') {
      paramValue.sort((a: string, b: string) => {
        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }

        return 0;
      });
      apiObj[key] = paramValue.join(',') as string;
    } else {
      apiObj[key] = paramValue;
    }
  }

  for (const param in apiObj) {
    if (apiObj[param] !== '') {
      apiParams += `&${param + '=' + apiObj[param]}`;
    }
  }

  return encodeURIComponent(urlStart + apiParams + urlEnd);
};

export default createApiUrl;
