const createApiUrl = ({
  obj,
}: {
  obj: {
    parkCode?: string | string[];
    stateCode?: string | string[];
    limit?: string | string[];
    start?: string | string[];
    q?: string | string[];
  };
}) => {
  const urlStart = 'http://developer.nps.gov/api/v1/parks?';
  const urlEnd = '&api_key=tZEBxgl9PvWVA6IoZ6geyHDasBEnQ1XwFNc8lbeo';
  const apiObj = {
    parkCode: '',
    stateCode: '',
    limit: '',
    start: '',
    q: '',
  };
  let apiParams = '';
  for (const key in obj) {
    if (Object.hasOwn(apiObj, key) === false) {
      return;
    }
    if (typeof obj[key] === 'object') {
      obj[key].sort((a, b) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      });
      apiObj[key] = obj[key].join(',');
    } else {
      apiObj[key] = obj[key];
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
