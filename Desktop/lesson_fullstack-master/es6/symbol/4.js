const spread = [12,5,8,139,44];
const lt10 = spread.filter((item) => item > 10);
console.log(lt10); 

const users = [
    {
        'user': 'barney',
        'age': 36,
        'active': false 
    },
    {
        'user': '333',
        'age': 30,
        'active': false 
    },
    {
        'user': '222',
        'age': 40,
        'active': false 
    },
    {
        'user': '111',
        'age': 50,
        'active': false 
    },
]
const filteredUsers = users.filter(
    user => user.age == 24 || user.age == 40
    )
    console.log(filteredUsers);