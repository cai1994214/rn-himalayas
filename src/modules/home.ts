import {Model, Effect} from 'dva-core-ts';
import {Reducer} from 'redux';

interface HomeState {
  num: number;
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    add: Reducer<HomeState>;
  };
  effects: {
    asyncAdd: Effect;
  };
}

const initialState: HomeState = {
  num: 0,
};

function delay(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    add(state = initialState, {payload}) {
      return {
        ...state,
        num: state.num + payload.num,
      };
    },
  },
  effects: {
    *asyncAdd({payload}, {call, put}) {
      yield call(delay, 1000); //call 执行异步函数
      yield put({
        //put执行同步函数
        type: 'add',
        payload,
      });
    },
  },
};

export default homeModel;
