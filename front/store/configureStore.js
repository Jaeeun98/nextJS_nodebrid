import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import rootReducer from '../reducers'

const configureStore = () => {
    const store = createStore(rootReducer);
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




{} === {}  //false
const a = {};
const b = a;
a === b //true;

객체를 새로 만드는 것은 false이지만, 참조면 true가 됨


*/