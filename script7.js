const axios = require('axios').default;

axios({
   method: 'POST',
   url: 'https://jsonplaceholder.typicode.com/posts',
   data: { userId: 1, title: 'My title', body: 'My body' },
})
   .then((response) => console.log(response.data))
   .catch((e) => console.error(e));
