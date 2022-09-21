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
let niceColorsJSON =`[{"id":"Алиса Блю","#":"F0F8FF"},{"id":"античный белый","#":"FAEBD7"},{"id":"Аква","#":"00FFFF"},{"id":"Аквамарин","#":"7FFFD4"},{"id":"Лазурный","#":"F0FFFF"},{"id":"Бежевый","#":"F5F5DC"},{"id":"Биск","#":"FFE4C4"},{"id":"Черный","#":"000000"},{"id":"Бланшированный миндаль","#":"FFEBCD"},{"id":"Синий","#":"0000FF"},{"id":"сине-фиолетовый","#":"8A2BE2"},{"id":"Коричневый","#":"A52A2A"},{"id":"Берливуд","#":"DEB887"},{"id":"Кадет Синий","#":"5F9EA0"},{"id":"шартрез","#":"7FFF00"},{"id":"Шоколад","#":"D2691E"},{"id":"коралловый","#":"FF7F50"},{"id":"ВасилекСиний","#":"6495ED"},{"id":"Кукурузные рыльца","#":"FFF8DC"},{"id":"малиновый цвет","#":"DC143C"},{"id":"голубой","#":"00FFFF"},{"id":"темно-синий","#":"00008B"},{"id":"Темно-голубой","#":"008B8B"},{"id":"ТемноЗолотойРод","#":"B8860B"},{"id":"темно-серый","#":"A9A9A9"},{"id":"темно-зеленый","#":"006400"},{"id":"ТемныйХаки","#":"BDB76B"},{"id":"Темно-пурпурный","#":"8B008B"},{"id":"Темно-оливковый зеленый","#":"556B2F"},{"id":"темно-оранжевый","#":"FF8C00"},{"id":"Темная орхидея","#":"9932CC"},{"id":"темно-красный","#":"8B0000"},{"id":"темный лосось","#":"E9967A"},{"id":"ТемноМореЗеленый","#":"8FBC8F"},{"id":"темно-синий","#":"483D8B"},{"id":"темный шиферно-серый","#":"2F4F4F"},{"id":"темно-бирюзовый","#":"00CED1"},{"id":"темно-фиолетовый","#":"9400D3"},{"id":"темно-розовый","#":"FF1493"},{"id":"DeepSkyBlue","#":"00BFFF"},{"id":"тускло-серый","#":"696969"},{"id":"Доджер Блю","#":"1E90FF"},{"id":"огнеупорный кирпич","#":"B22222"},{"id":"ЦветочныйБелый","#":"FFFFAF0"},{"id":"зеленый лес","#":"228B22"},{"id":"фуксия","#":"FF00FF"},{"id":"Гейнсборо","#":"DCDCDC"},{"id":"белый призрак","#":"F8F8FF"},{"id":"Золото","#":"FFD700"},{"id":"золотой жезл","#":"DAA520"},{"id":"серый","#":"808080"},{"id":"зеленый","#":"008000"},{"id":"Желто-зеленый","#":"ADFF2F"},{"id":"нектар","#":"F0FFF0"},{"id":"ярко-розовый","#":"FF69B4"},{"id":"ИндийскийКрасный","#":"CD5C5C"},{"id":"Индиго","#":"4B0082"},{"id":"слоновая кость","#":"FFFFF0"},{"id":"Хаки","#":"F0E68C"},{"id":"лаванда","#":"E6E6FA"},{"id":"лаванда румянец","#":"FFF0F5"},{"id":"Зеленый газон","#":"7CFC00"},{"id":"ЛимонШифон","#":"FFFACD"},{"id":"светло-синий","#":"ADD8E6"},{"id":"Светло-Коралловый"},{"id":"№ F08080"},{"id":"светло-голубой","#":"E0FFFF"},{"id":"Светло ЗолотойРодЖелтый","#":"ФАФАД2"},{"id":"светло-серый","#":"D3D3D3"},{"id":"светло-серый","#":"D3D3D3"},{"id":"Светло-зеленый","#":"90ЕЕ90"},{"id":"светло-розовый","#":"FFB6C1"},{"id":"светлый оранжево-розовый","#":"FFA07A"},{"id":"Светло-морской зеленый","#":"20B2AA"},{"id":"СветНебоСиний","#":"87СЕФА"},{"id":"Свет ШиферСерый","#":"778899"},{"id":"СветлыйСланецСерый","#":"778899"},{"id":"СветСтальСиний","#":"B0C4DE"},{"id":"Светло-желтый","#":"FFFFFE0"},{"id":"лайм","#":"00FF00"},{"id":"Зеленый лайм","#":"32CD32"},{"id":"шерсть","#":"FAF0E6"},{"id":"Пурпурный","#":"FF00FF"},{"id":"темно-бордовый","#":"800000"},{"id":"СреднийAquaMarine","#":"66ЦДАА"},{"id":"Средний синий","#":"0000CD"},{"id":"Средняя орхидея","#":"BA55D3"},{"id":"Средний фиолетовый","#":"9370ДБ"},{"id":"СреднийМореЗеленый","#":"3CB371"},{"id":"Средний ШиферСиний","#":"7B68EE"},{"id":"СреднийВеснаЗеленый","#":"00FA9A"},{"id":"Средний бирюзовый","#":"48D1CC"},{"id":"СреднийФиолетовыйКрасный"},{"id":"№ C71585"},{"id":"темно-синий"},{"id":"№191970"},{"id":"Мятный крем","#":"F5FFFA"},{"id":"МистиРоуз","#":"FFE4E1"},{"id":"Мокасины","#":"FFE4B5"},{"id":"НавахоБелый","#":"FFDEAD"},{"id":"Военно-морской","#":"000080"},{"id":"Старое кружево","#":"FDF5E6"},{"id":"Оливковое","#":"808000"},{"id":"Оливково-серый","#":"6b8e23"},{"id":"Апельсин","#":"ffa500"},{"id":"Оранжево-красный","#":"FF4500"},{"id":"Орхидея","#":"DA70D6"},{"id":"Бледный золотарник","#":"EEE8AA"},{"id":"бледно-зеленый","#":"98FB98"},{"id":"бледно-бирюзовый","#":"AFEEEE"},{"id":"Бледно-ФиолетовыйКрасный","#":"DB7093"},{"id":"Папайя Кнут","#":"FFEFD5"},{"id":"персиковый слой","#":"FFDAB9"},{"id":"Перу","#":"CD853F"},{"id":"Розовый","#":"FFC0CB"},{"id":"слива","#":"DDA0DD"},{"id":"Синий порошок","#":"B0E0E6"},{"id":"Пурпурный","#":"800080"},{"id":"Ребекка Пёрпл","#":"663399"},{"id":"Красный","#":"FF0000"},{"id":"РозиБраун","#":"BC8F8F"},{"id":"Королевский синий","#":"4169E1"},{"id":"СедлоБраун","#":"8B4513"},{"id":"Лосось","#":"fa8072"},{"id":"Сэнди Браун","#":"f4a460"},{"id":"цвет морской волны","#":"2E8B57"},{"id":"морская ракушка","#":"FFF5EE"},{"id":"Сиенна","#":"A0522D"},{"id":"Серебряный","#":"C0C0C0"},{"id":"голубое небо","#":"87СЕЕВ"},{"id":"Сланцево-синий","#":"6A5ACD"},{"id":"Шифер серый","#":"708090"},{"id":"ШиферСерый","#":"708090"},{"id":"Снег","#":"ФФФАФА"},{"id":"ВеснаЗеленый","#":"00FF7F"},{"id":"стальной синий","#":"4682B4"},{"id":"Тан","#":"D2B48C"},{"id":"Бирюзовый","#":"008080"},{"id":"чертополох","#":"D8BFD8"},{"id":"Помидор","#":"FF6347"},{"id":"Бирюзовый","#":"40E0D0"},{"id":"фиолетовый","#":"EE82EE"},{"id":"Пшеница","#":"F5DEB3"},{"id":"Белый","#":"FFFFFF"},{"id":"белый дым","#":"F5F5F5"},{"id":"Желтый","#":"FFFF00"},{"id":"желто-зеленый","#":"9ACD32"}]`;
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
  if (a.color === b.color) {
    return 0;
  }
  return a.color < b.color ? -1 : 1;
};
function exchange(firstIndex, secondIndex) {
  const temp = fruits[firstIndex];
  fruits[firstIndex] = fruits[secondIndex];
  fruits[secondIndex] = temp;
};
function separator(fruits, left, right) {
  var pivot = fruits[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (fruits[i] < pivot) {
      i++;
    }
    while (fruits[j] > pivot) {
      j--;
    }
    if (i <= j) {
      exchange(i, j);
      i++;
      j--;
    }
  }
  return i;
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком

    let n = arr.length;
    for (let i = 0; i < n-1; i++) { 
      for (let j = 0; j < n-1-i; j++) { 
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
