const users = [
    { name: 'Alice', friends: ['Joe', 'Bob'] },
    { name: 'Bob', friends: ['Joe', 'David'] },
    { name: 'David', friends: ['Alice', 'Bob'] },
];

let friendNameToSearch = 'Joe';
const usersWithFriend = users.reduce((result, user) => {
  if (user.friends.includes(friendNameToSearch)) {
    result.push(user.name);
  }
  return result;
}, []);
console.log(usersWithFriend)