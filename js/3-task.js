const users = [
    { name: 'Alice', friends: 5 },
    { name: 'Bob', friends: 8 },
    { name: 'Davad', friends: 3 },
];

users.sort((a, b) => {
    return  b.friends.length - a.friends.length
});

const sortedNames = users.map(user => user.name);
console.log(sortedNames);