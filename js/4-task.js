const users = [
    {name: 'Alice', skills: ['HTML', 'CSS']},
    {name: 'Bob', skills: ['JavaScript', 'CSS']},
    {name: 'Charlie', skills: ['HTML', 'JavaScript', 'Python']}
];

const uniqueSkills = users.reduce((skills, user) => {
    user.skills.forEach(skill => {
        if (!skills.includes(skill)) {
            skills.push(skill);
        }
    });
    return skills;
}, []);
uniqueSkills.sort();

console.log(uniqueSkills);