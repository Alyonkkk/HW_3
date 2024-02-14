// 3. Дан обьект

// ```
//     let obj = {
//         name: 'John',
//         age: 19,
//         isHappy: true
//     }
// ```

// Вывести в консоль сначала все ключи, потом значения ключей обьекта.

let obj = {
    name: 'John',
    age: 19,
    isHappy: true
};

// все ключи
console.log("Keys:", Object.keys(obj));

// значения ключей объекта
console.log("Values:", Object.values(obj));
