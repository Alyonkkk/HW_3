// 4. Дан обьект

// ```
//     let obj = {
//         'ru pum pu ru rum': ['голубой', 'красный', 'зеленый'],
//         'la la la la la': ['blue', 'red', 'green'],
//     };
// ```

// Вывести в консоль слово красный и green

let obj = {
    'ru pum pu ru rum': ['голубой', 'красный', 'зеленый'],
    'la la la la la': ['blue', 'red', 'green'],
};

// "красный"
console.log(obj['ru pum pu ru rum'][1]);

// "green"
console.log(obj['la la la la la'][2]);


// при условии что мы не знаем наличие и положение красного и green в массиве 

// let obj = {
//     'ru pum pu ru rum': ['голубой', 'красный', 'зеленый'],
//     'la la la la la': ['blue', 'red', 'green'],
// };


// if (obj['ru pum pu ru rum'].includes('красный')) {
//     console.log('красный');
// } else {
//     console.log('красного нет');
// }

// if (obj['la la la la la'].includes('green')) {
//     console.log('green');
// } else {
//     console.log('green не найден');
// }







