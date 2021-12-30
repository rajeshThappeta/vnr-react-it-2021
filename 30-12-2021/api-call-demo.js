//make api call
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(apiData => console.log(apiData))
    .catch(err => console.log(err))