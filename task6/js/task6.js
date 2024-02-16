// 6. Создать валидатор, запросить у пользователя логин и пароль. 
// Далее попросить юзера залогиниться поочередно запросив, ввести данные. 
// Если верно введен логин и пароль, вывести сообщение **Добро пожалоВать**. 
// Далее записать эти данные в обьект и поместить их в нужные ключи, 
// и если пользователь ввел все верно вывести ключи в консоль.

const userData = {};

function login() {
    const userLogin = prompt("Введите логин:");
    const userPassword = prompt("Введите пароль:");

    if (userLogin === "Alyona" && userPassword === "Javascript") {
        console.log("Добро пожаловать!");

        userData.login = userLogin;
        userData.password = userPassword;

        console.log("Ключи объекта userData:", Object.keys(userData));
    } else {
        console.log("Неверный логин или пароль. Попробуйте еще раз.");
        login(); // Recursive call to prompt login/password again
    }
}
login();


// const loginCred = [
//     {
//       username: "Alyona",
//       password: "Javascript"
//     }
//   ];
  
//   const userData = {};
  
//   function LogIn() {
//     const username = prompt("Введите логин:");
//     const password = prompt("Введите пароль:");
  
//     for (let i = 0; i < loginCred.length; i++) {
//       if (username === loginCred[i].username && password === loginCred[i].password) {
//         console.log("Добро пожаловать!");
  
//         userData.login = username;
//         userData.password = password;
  
//         console.log("Ключи объекта userData:", Object.keys(userData));
//         return;
//       }
//     }
  
//     console.log("Неверный логин или пароль. Попробуйте еще раз.");
//     LogIn(); 
//   }
  
//   LogIn();
  
