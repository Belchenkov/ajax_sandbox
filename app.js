/*
async function myFunc() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 2000)
    });

    const error = false;

    if (!error) {
        return await promise; // Wait until promise is resolved
    } else {
        await Promise.reject(new Error('Something went wrong!!!'))
    }
}

myFunc()
    .then(res => console.log(res))
    .catch(err => console.error(err));*/

async function getUsers () {
    // await response of the fetch call
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    // Only proceed once its resolved
    const data = await res.json();

    // only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));