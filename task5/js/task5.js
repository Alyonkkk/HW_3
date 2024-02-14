// 5. Дан обьект:

// ```
//     let salaries = {
//         andrey: 500,
//         sveta: 413,
//         anton: 987,
//         andrey: 664,
//         alexandra: 199
//     }
// ```
// Вывести максимальную зарплату сотрудника.

// // убираем одного андрея для начала ))

let salaries = {
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
};

let maxSalary = 0;
let employeeWithMaxSalary = '';

for (let employee in salaries) {
    if (salaries[employee] > maxSalary) {
        maxSalary = salaries[employee];
        employeeWithMaxSalary = employee;
    }
}

console.log(`Максимальная зарплата: ${employeeWithMaxSalary}: ${maxSalary}`);


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// let salaries = {
//     sveta: 413,
//     anton: 987,
//     andrey: 664,
//     alexandra: 199
// };

// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }

// let maxSalary = getMaxOfArray(Object.values(salaries));

// console.log(`Максимальная зарплата: ${maxSalary}`);

