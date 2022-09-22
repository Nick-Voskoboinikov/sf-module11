// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

const minWeightInputField = document.querySelector('input.minweight__input');  // input field with minimum weight to filter
const maxWeightInputField = document.querySelector('input.maxweight__input');  // input field with maximum weight to filter
const colorList = document.querySelector('#colorlist');  // color list for suggestions



// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

// google-translated colors
let niceColorsJSON=`[{"id":"блёкло-голубой","#":"F0F8FF"},{"id":"античный белый","#":"FAEBD7"},{"id":"морской волны","#":"00FFFF"},{"id":"аквамариновый","#":"7FFFD4"},{"id":"лазурный","#":"F0FFFF"},{"id":"бежевый","#":"F5F5DC"},{"id":"бисквитный","#":"FFE4C4"},{"id":"черный","#":"000000"},{"id":"бланшированный миндаль","#":"FFEBCD"},{"id":"синий","#":"0000FF"},{"id":"сине-фиолетовый","#":"8A2BE2"},{"id":"коричневый","#":"A52A2A"},{"id":"старого дерева","#":"DEB887"},{"id":"серо-синий","#":"5F9EA0"},{"id":"зеленовато-жёлтый","#":"7FFF00"},{"id":"шоколадный","#":"D2691E"},{"id":"коралловый","#":"FF7F50"},{"id":"васильково-синий","#":"6495ED"},{"id":"светло-жёлтый","#":"FFF8DC"},{"id":"малиновый","#":"DC143C"},{"id":"голубой","#":"00FFFF"},{"id":"темно-синий","#":"00008B"},{"id":"темно-голубой","#":"008B8B"},{"id":"тёмный красно-золотой","#":"B8860B"},{"id":"темно-серый","#":"A9A9A9"},{"id":"темно-зеленый","#":"006400"},{"id":"тёмный хаки","#":"BDB76B"},{"id":"тёмно-пурпурный","#":"8B008B"},{"id":"тёмно-оливковый","#":"556b2f"},{"id":"тёмно-оранжевый","#":"FF8C00"},{"id":"тёмно-орхидейный","#":"9932CC"},{"id":"тёмно-красный","#":"8b0000"},{"id":"тёмный оранжево-розовый","#":"E9967A"},{"id":"тёмный морской волны","#":"8fbc8f"},{"id":"тёмный серовато-синий","#":"483D8B"},{"id":"тёмный синевато-серый","#":"2F4F4F"},{"id":"темно-бирюзовый","#":"00CED1"},{"id":"темно-фиолетовый","#":"9400D3"},{"id":"темно-розовый","#":"FF1493"},{"id":"тёмный небесно-синий","#":"00BFFF"},{"id":"тускло-серый","#":"696969"},{"id":"тускло-васильковый","#":"1E90FF"},{"id":"огнеупорного кирпича","#":"B22222"},{"id":"цветочно-белый","#":"fffaf0"},{"id":"зеленый лес","#":"228B22"},{"id":"фуксия","#":"FF00FF"},{"id":"Гейнсборо","#":"DCDCDC"},{"id":"туманно-белый","#":"F8F8FF"},{"id":"золотой","#":"FFD700"},{"id":"золотисто-берёзовый","#":"DAA520"},{"id":"серый","#":"808080"},{"id":"зеленый","#":"008000"},{"id":"желто-зеленый","#":"ADFF2F"},{"id":"белой мускатной дыни","#":"F0FFF0"},{"id":"ярко-розовый","#":"FF69B4"},{"id":"ярко-красный","#":"CD5C5C"},{"id":"индиго","#":"4B0082"},{"id":"слоновой кости","#":"FFFFF0"},{"id":"хаки","#":"F0E68C"},{"id":"бледно-лиловый","#":"E6E6FA"},{"id":"бледный розово-лиловый","#":"FFF0F5"},{"id":"зеленой травы","#":"7CFC00"},{"id":"лимонный","#":"FFFACD"},{"id":"светло-голубой","#":"ADD8E6"},{"id":"светло-коралловый","F08080"},{"id":"светлый циан","#":"E0FFFF"},{"id":"светлый золотисто-берёзовый","#":"fafad2"},{"id":"светло-серый","#":"D3D3D3"},{"id":"бледно-зелёный","#":"90ee90"},{"id":"светло-розовый","#":"ffb6c1"},{"id":"светлый оранжево-розовый","#":"ffa07a"},{"id":"светлый морской волны","#":"20b2aa"},{"id":"светлый небесно-синий","#":"87cefa"},{"id":"светлый синевато-серый","#":"778899"},{"id":"светло-стальной","#":"b0c4de"},{"id":"светло-желтый","#":"ffffe0"},{"id":"зелёный лаймовый","#":"00ff00"},{"id":"зеленовато-известковый","#":"32cd32"},{"id":"льняной","#":"faf0e6"},{"id":"фуксиево-красный","#":"ff00ff"},{"id":"тёмно-бордовый","#":"800000"},{"id":"умеренно-аквамариновый","#":"66cdaa"},{"id":"умеренно-голубой","#":"0000cd"},{"id":"умеренно-орхидейный","#":"ba55d3"},{"id":"умеренно-пурпурный","#":"9370db"},{"id":"умеренный морской волны","#":"3cb371"},{"id":"умеренный серовато-синий","#":"7b68ee"},{"id":"умеренный весенний зелёный","#":"00fa9a"},{"id":"умеренно-бирюзовый","#":"48d1cc"},{"id":"умеренный красно-фиолетовый","id":"C71585"},{"id":"ночной синий","#":"191970"},{"id":"мятно-кремовый","#":"f5fffa"},{"id":"туманно-розовый","#":"ffe4e1"},{"id":"болотный","#":"ffe4b5"},{"id":"грязно-серый","#":"ffdead"},{"id":"тёмно-синий","#":"000080"},{"id":"старого коньяка","#":"fdf5e6"},{"id":"оливковый","#":"808000"},{"id":"тускло-коричневый","#":"6b8e23"},{"id":"оранжевый","#":"ffa500"},{"id":"красно-оранжевый","#":"ff4500"},{"id":"светло-лиловый","#":"da70d6"},{"id":"бледно-золотой","#":"eee8aa"},{"id":"бледно-зелёный","#":"98fb98"},{"id":"бледно-бирюзовый","#":"afeeee"},{"id":"бледно-фиолетово-красный","#":"db7093"},{"id":"дыни","#":"ffefd5"},{"id":"персиковый","#":"ffdab9"},{"id":"рыжевато-коричневый","#":"cd853f"},{"id":"бледно-красный","#":"ffc0cb"},{"id":"сливно-чёрный","#":"dda0dd"},{"id":"туманно-голубой","#":"b0e0e6"},{"id":"тёмно-пурпурный","#":"800080"},{"id":"умеренный тёмно-фиолетовый","#":"663399"},{"id":"красный","#":"ff0000"},{"id":"серовато-красный","#":"bc8f8f"},{"id":"королевский голубой","#":"4169e1"},{"id":"старой кожи","#":"8b4513"},{"id":"оранжево-розовый","#":"fa8072"},{"id":"рыже-коричневый","#":"f4a460"},{"id":"зеленой морской волны","#":"2e8b57"},{"id":"морской пены","#":"fff5ee"},{"id":"охра","#":"a0522d"},{"id":"серебряный","#":"c0c0c0"},{"id":"небесно-голубой","#":"87ceeb"},{"id":"серовато-синий","#":"6a5acd"},{"id":"синевато-серый","#":"708090"},{"id":"цвета снега","#":"fffafa"},{"id":"весенний зеленый","#":"00ff7f"},{"id":"голубовато-стальной","#":"4682b4"},{"id":"загара","#":"d2b48c"},{"id":"сине-зелёный","#":"008080"},{"id":"чертополоха","#":"d8bfd8"},{"id":"томатный","#":"ff6347"},{"id":"бирюзовый","#":"40e0d0"},{"id":"фиолетовый","#":"ee82ee"},{"id":"пшеницы","#":"F5DEB3"},{"id":"белый","#":"ffffff"},{"id":"белый дымчатый","#":"f5f5f5"},{"id":"желтый","#":"ffff00"},{"id":"желто-зеленый","#":"9acd32"}]`;
// colors converted from JSON
let niceColors = JSON.parse(niceColorsJSON);

const colorSuggestions = () => {
  niceColors.forEach(col => {
    let option = document.createElement('option');
    option.value=col['id'];
    colorList.appendChild(option);
  
}); 
}

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = (fruitsShown=fruits) => {
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits
function rusColorName2hex(color='античный белый'){return '#'+(niceColors.find(x => x.id === color))['#'];}
  function addClassByColor(sapling,color){
    switch (color) {
      case 'фиолетовый':
        sapling.classList.add('fruit_violet');
      break;
      case 'зеленый':
        sapling.classList.add('fruit_green');
      break;
      case 'розово-красный':
        sapling.classList.add('fruit_carmazin');
      break;
      case 'желтый':
        sapling.classList.add('fruit_yellow');
      break;
      case 'светло-коричневый':
        sapling.classList.add('fruit_lightbrown');
      break;
      default:
        sapling.style.background=rusColorName2hex(color);
    }
    return 1;
  }
  let weedPlants=fruitsList.querySelectorAll('li.fruit__item');  // get weedplants
  weedPlants.forEach((plant) => {fruitsList.removeChild(plant);})  // get rid of those weedplants

  for (let i = 0; i < fruitsShown.length; i++) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild
    let sapling = document.createElement('li');
    let saplingCell = document.createElement('div');
    sapling.className='fruit__item';
    saplingCell.className='fruit__info';
    saplingCell.innerHTML=`<div>index: ${i+1}</div>
    <div>kind: ${fruitsShown[i].kind}</div>
    <div>color: ${fruitsShown[i].color}</div>
    <div>weight (кг): ${fruitsShown[i].weight}</div>`;
    addClassByColor(sapling,fruitsShown[i].color);
    fruitsList.appendChild(sapling);
    sapling.appendChild(saplingCell);
  }
};

// первая отрисовка карточек
display();

// provide color suggestions
colorSuggestions();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let result = [];
  let fruitsMemorized=JSON.stringify(fruits);

  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {
    // TODO: допишите функцию перемешивания массива
    //
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    // вырезаем его из fruits и вставляем в result.
    // ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    // (массив fruits будет уменьшатся, а result заполняться)
    let randomFruitIndex=getRandomInt(0,(fruits.length)-1);

    result.unshift(fruits[randomFruitIndex]);
    fruits.splice(randomFruitIndex, 1);
  }
  if(fruitsMemorized === JSON.stringify(result)){alert('Попытка перемешать не удалась.\nЕсли ожидается новый набор, то попробуйте повторить.')}
  fruits = result;
};

shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  let filteredOut=fruits.filter(item => {
    // TODO: допишите функцию
    let minWeight=(minWeightInputField.value>=0) ?minWeightInputField.value:0;
    let maxWeight=(maxWeightInputField.value>=0 && maxWeightInputField.value>minWeight)?maxWeightInputField.value:Infinity; // Heavy fruits
    
    return maxWeight>item.weight && item.weight>minWeight

  })
  .map(item => item);
  return filteredOut;
};

filterButton.addEventListener('click', () => {
  display(filterFruits());
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
  console.log(a.color, b.color)
  return (a.color == b.color) ? 0 : (a.color < b.color ?  1 : -1);
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком

    for (let i = 0; i < (arr.length-1); i++) { 
      for (let j = 0; j < (arr.length-1-i); j++) { 
        if (comparation(arr[j], arr[j+1])) { 
            let tempvar = arr[j+1]; 
            arr[j+1] = arr[j]; 
            arr[j] = tempvar; 
        }
      }
    } 
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
    function quickSortRec(arr, comparation){
      if (arr.length < 2) {
      return arr;
    }
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    let left = [];
    let right = [];
    let equal = [];
  
    for (let val of arr) {
      if (comparation(val,pivot)) {
        equal.push(val);
      } else if (!comparation(pivot,val)) {
        right.push(val);
      } else {
        left.push(val);
      }
    }
    fruits = [
      ...quickSortRec(left, comparation),
      ...equal,
      ...quickSortRec(right, comparation)
    ];
    }
    quickSortRec(arr, comparation);
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} мс`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
  sortKind = sortKind==='bubbleSort'? 'quickSort':'bubbleSort';
  sortKindLabel.textContent = sortKind;
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  sortTimeLabel.textContent = 'sorting...';
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
  sortTimeLabel.textContent = sortTime;
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  if (kindInput.value != '' && colorInput.value != '' && weightInput.value != '') {
let obj = {};
obj["kind"] = kindInput.value;
obj["color"] = colorInput.value;
obj["weight"] = weightInput.value;
fruits.push(obj);
  display();
  } else {
    if(kindInput.value === ''){kindInput.style.border='3px solid red'; setTimeout(()=>{kindInput.style.border='';}, 5000);}
    if(colorInput.value === ''){colorInput.style.border='3px solid red'; setTimeout(()=>{colorInput.style.border='';}, 5000);}
    if(weightInput.value === ''){weightInput.style.border='3px solid red'; setTimeout(()=>{weightInput.style.border='';}, 5000);}
alert('Выделенное поле не должно быть пустым - заполните его.');
  }
});
