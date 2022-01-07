import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import thunkMiddleware from 'redux-thunk';

const configureStore = () => {
    //middleware를 사용해야 Redux에서 action이 실행되는 것을 확인할 수 있음
    //npm i redux-devtools-extension가 있어야 개발자 도구랑 연동됨
    //배포용일땐 devtool 연결x, 개발용일땐 devtool 연결
    //compose : 인핸서를 순차적으로 적용하기 위해서 사용(왼쪽에 있는 걸 다 처리한 후에 오른쪽에 있는 것을 처리)
    const loggerMiddleware = store => next => action => {
        console.log('state', store.getState());
        console.log('action', action);

        const result = next(action);
        console.log('next state', store.getState());
        console.log('\n');

        return result;
    }
    
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [loggerMiddleware, sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production' 
    ? compose(applyMiddleware(...middlewares)) 
    : composeWithDevTools(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const Wrapper = createWrapper(configureStore, { 
    debug:process.env.NODE_ENV === 'development' 
});

export default Wrapper;


/*
redux → 코드량이 매우 많아짐 / action이 정렬되서 출력되기 때문에 error를 잡기 쉬움

데이터 중앙 저장소 { name:je, age:25 }
→ 각 컴포넌트가 필요할 때 데이터를 사용할 수 있음.

action : 데이터를 바꿀 때 사용
ex) type : 'CHANGE_NICKNAME', data:'jaeeun'

dispatch : action을 적용시킬 때 사용
→ action을 dispatch 하는 순간 닉네임이 change됨

reducer : 어떻게 change해야 하는지(action 타입에 따라 이렇게 행동해라)
ex) Swtich(action.type){ case 'CHANGE_NICKNAME':return{ ...state, name:action.data, } }
→ action type이 'CHANGE_NICKNAME'면, action의 data를 바꿔라

*왜 객체를 항상 새로 만드는 가*
const prev = { name : 'jaeeun' };
const next = { name : 'jaeeun2' };


*redux-thunk*
리덕스가 비동기 행위를 디스패치할 수 있도록 도와주는 역할을 함
action create를 비동기로 실행할 수 있도록 → 하나의 액션에서 디스패치를 여러번 할 수 있음 
 → 하나의 액션 안에 여러개의 동기 액션을 넣을 수 있음



{} === {}  //false
const a = {};
const b = a;
a === b //true;

객체를 새로 만드는 것은 false이지만, 참조면 true가 됨


*/