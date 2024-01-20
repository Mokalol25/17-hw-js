const users = [
    { userId: 1, balance: 100 },
    { userId: 2, balance: 150 },
    { userId: 3, balance: 200 }
];

const totalBalance = users.reduce((total, user) => {
    return total = total + user.balance
}, 0);
console.log(totalBalance);