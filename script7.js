const axios = require('axios').default;

axios
   .get('https://fortnite-api.com/v1/map', {
      header: {
         'Content/type': 'application/json',
      },
   })
   .then((response) => console.log(response.data))
   .catch((e) => console.error(e));
