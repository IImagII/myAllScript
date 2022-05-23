//есть обьект initialState с базавыми state
//store - нужен чтобы хранить все сосотояния
//initialState=>store;
// есть view это обычный шаблон с какойнибуть кнопкой например
//есть action благодаря которому меняется состояние
//view=>action=> reducer(state, action)
//reducer(state, action) - это борабтчик событий он прокидывает action в нужное store,reducer это чистая функция которая при ее вызове делает одно и тоже возвращает одно и тоже состояние
//reducer - всегда должен выплюнуть наружу новый state в этом и заключается мутабельность new state
//reducer - принимает action от view и на его основе смотрит что надо заменить чтобы поменять state и этот новый state кладется в наш store и так по кругу

//! Для начало создаем наше хранилище наш store
import { createStore } from 'redux'; //функция createStore создает

const initialState = {
  // это обычный обьект в котором лежат стартовые данные
  name: 'Paul',
  secondName: 'Petrov',
};
function reducer(state = initialState, action) {
  // это создается сам редюсер с двумя параметрами state, action после чего он передается в наш store он является чемто вроде прослойкой между store и нашими action поэтоумы должны понять какое действие вызвано и что делать
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload }; //тремя точками мы клонируем наш state мы перезаписываем новый обьект именяем какоето нужное нам в данном случае name которое лежит в action в параметре payload
    case 'CHANGE_SECOND_NAME':
      return { ...state, secondname: action.payload };
  }

  return state; //reducer всегда должен чтото возвращать
}

const store = createStore(reducer); //в качестве аргумента принимает нами созданный reducer
console.log(store.getState()); //методом getState мы получаем текущее состояние state начально с store
// мы хотим изменить имя и фамилию для этого нам нужно созадть события по типу:
const changeName = {
  type: 'CHANGE_NAME',
  payload: 'Ivan ', //это мы показываем что мы хотим изменить, какието данные
};
const changeSecondName = {
  type: 'CHANGE_SECOND_NAME ',
  payload: 'Ivanov',
};

//теперь нам надо эти события вызвать
store.dispatch(changeName); //теперь store знает что у нас сработало событие и запускает reducer
console.log(store.getState()); //мы получаем уже измененное состяоние state
store.dispatch(changeSecondName);
console.log(store.getState()); //мы получаем уже измененное состяоние state
