import {Model, Effect} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';

const CAROUSEL_URL = '/carousel'; //轮播图接口

const GUESS_URL = '/guess'; //猜你喜欢接口

export interface IGuess {
  id: string;
  image: string;
  title: string;
}
export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string];
}
interface HomeState {
  carousels: ICarousel[];
  guess: IGuess[];
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    featchCarousels: Effect;
    featchGuess: Effect;
  };
}

const initialState: HomeState = {
  carousels: [],
  guess: [],
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    setState(state = initialState, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *featchCarousels(_, {call, put}) {
      const {data} = yield call(axios.get, CAROUSEL_URL);
      yield put({
        type: 'setState',
        payload: {
          carousels: data,
        },
      });
    },
    *featchGuess(_, {call, put}) {
      const {data} = yield call(axios.get, GUESS_URL);
      console.log('猜你喜欢', data);
      yield put({
        type: 'setState',
        payload: {
          guess: data,
        },
      });
    },
  },
};

export default homeModel;
