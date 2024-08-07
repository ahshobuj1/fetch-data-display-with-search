const fetchingUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => displayUsersData(users));
};

function displayUsersData(users) {
    const parent = document.getElementById('parent');

    parent.content = '';
    users.forEach((user) => {
        const div = document.createElement('div');

        parent.content = '';
        div.innerHTML = `
        <div class="bg-gray-300 shadow-xl text-center p-5">
                        <h2 class="text-5xl">Id: ${user.id} </h2>
                        <h3 class="text-2xl font-bold text-amber-800">Name: ${user.name}</h3>
                        <p class="text-xl font-bold">Email: ${user.email}}</p>
                        <p class="text-xl font-bold">Company: ${user.company.name}}</p>
                        <p class="text-xl font-bold">City: ${user.address.city}}</p>
                    </div>
        `;
        parent.appendChild(div);
    });
}

//* posts data

const fetchingPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => displayPostsData(posts));
};

const displayPostsData = (posts) => {
    const parent = document.getElementById('parent');
    posts.forEach((post) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-gray-300 shadow-xl p-5">
                        <h2 class="text-5xl">Id: ${post.id} </h2>
                        <h3 class="text-2xl font-bold text-amber-800">title: ${post.title}</h3>
                        <p class="text-xl font-bold">Body: ${post.body}}</p>
                    </div>
        `;
        parent.appendChild(div);
    });
};
