// 7. Есть массив объектов

// ```
//     let persons = [
//         {id: 10, name: 'Vasya', age: 28},
//         {id: 11, name: 'Kolya', age: 16, parentId: 14},
//         {id: 12, name: 'Anna', age: 37},
//         {id: 13, name: 'Zoya', age: 9, parentId: 12},
//         {id: 14, name: 'Arkadiy', age: 45},
//     ];
// ```

// Разделить его на совершеннолетних и несовершеннолетних. 
// Для совершеннолетних людей узнать профессию у пользователя, обратившись 
// к нему по имени и добавить данный ключ в обьект, после чего вывести результат.
let persons = [
    {id: 10, name: 'Vasya', age: 28},
    {id: 11, name: 'Kolya', age: 16, parentId: 14},
    {id: 12, name: 'Anna', age: 37},
    {id: 13, name: 'Zoya', age: 9, parentId: 12},
    {id: 14, name: 'Arkadiy', age: 45},
];

let adults = persons.filter(person => person.age >= 18);
let kids = persons.filter(person => person.age < 18);

adults.forEach(adult => {
    let profession = prompt(`Введите профессию для ${adult.name}:`);
    adult.profession = profession;
});

console.log("Совершеннолетние:", adults);
console.log("Несовершеннолетние:", kids);
