const forest = {
    location: 'Sweden',
    animals: 3,
    animalsTypes: ['Lions', 'Tigers', 'Bears']
};
const location = 'dfdf';
// es6 解构
const { location:lo, animals, animalsTypes, nickname } = forest;
console.log(lo, nickname);