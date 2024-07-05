/* const user = {
    id: 1,
    name: 'a h shobuj',
    address: {
        village: 'Joyag',
        city: 'Cumilla',
        town: 'Dhaka',
        country: 'BD',
    },
};

const convertJson = JSON.stringify(user);
console.log(convertJson);

const convertObj = JSON.parse(convertJson);
console.log(convertObj);

//* Data Fetching
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => console.log(users)); */

const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => res.json())
        .then((user) => console.log(user));
};
