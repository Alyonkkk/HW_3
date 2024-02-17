// 8*. Мы на футбольном матче, счет забитых голов одной команды не может превышать 9 мячей. 
// Жаль что нам присылают результат матча в формате '2:5', 
// ведь нам надо это вывести в консоль словами. 
// Давайте напишем программу которая будет за нас переводить формат 
// и выводить результат в консоль. 

// https://code.mu/ru/javascript/manual/string/split/

const matchResult = prompt("Введите счет матча в формате '2:5':");

const scores = matchResult.split(':');
const benfica = parseInt(scores[0]);
const zenit = parseInt(scores[1]);

if (isNaN(benfica) || isNaN(zenit) || benfica > 9 || zenit > 9) {
    console.log("Некорректный формат счета");
} else {
    const scoreWords = [
        "Ноль", "Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять"
    ];

    const benficaWords = scoreWords[benfica];
    const zenitWords = scoreWords[zenit];


    console.log(`Счет: ${benficaWords} : ${zenitWords}`);
}
