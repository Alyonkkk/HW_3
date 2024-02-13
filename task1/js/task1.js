// 1. Удалить ключ из обьекта
// первый вариант:

// const animalSounds = {
//     'cow' : 'moo',
//     'cat' : 'meow',
//     'dog' : 'bark'
//  };

//  delete animalSounds.cow

//  console.log(animalSounds)

//  второй вариант:

const animalSounds = {
    'cow': 'moo',
    'cat': 'meow',
    'dog': 'bark'
};

function removeFromObjectByKey(animalSounds, key) {
    delete animalSounds[key];
}

removeFromObjectByKey(animalSounds, 'cow');

console.log(animalSounds);

