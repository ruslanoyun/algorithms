// Пробую бинарный поиск

const arr = [
  {
    name: 'John',
    phoneNumber: 111,
  },
  {
    name: 'Serg',
    phoneNumber: 222,
  },
  {
    name: 'Eugene',
    phoneNumber: 333,
  },
  {
    name: 'Anna',
    phoneNumber: 444,
  },
  {
    name: 'Mary',
    phoneNumber: 555,
  },
  {
    name: 'Poly',
    phoneNumber: 666,
  },
  {
    name: 'Russell',
    phoneNumber: 777,
  },
  {
    name: 'Sam',
    phoneNumber: 888,
  },
  {
    name: 'Max',
    phoneNumber: 999,
  },
];

// Бинарный поиск
function binarySearch(arr, name) {
  arr.sort((a, b) => a.name.localeCompare(b.name));
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    console.log('iterations'); // этот лог для того, что бы понять сколько было итераций
    let mid = Math.floor((left + right) / 2);
    if (arr[mid].name === name) {
      return arr[mid].phoneNumber;
    } else if (arr[mid].name < name) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

// Классический линейный поиск занимет n количество итераций, в худшем случае займет 9 итераций (исходя из нашего массива)
function linearySearch(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    console.log('iteration:', i); // этот лог для того, что бы понять сколько было итераций
    if (arr[i].name === name) {
      return arr[i].phoneNumber;
    }
  }
  return -1;
}

console.log(linearySearch(arr, 'Max'));
console.log(binarySearch(arr, 'Serg'));
