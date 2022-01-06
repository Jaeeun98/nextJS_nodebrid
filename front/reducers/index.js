import { HYDRATE } from "next-redux-wrapper"
import user from './user';
import post from './post';
import { combineReducers } from "redux";

//reducer = 함수
//함수들은 합치기 힘들기때문에 combineReducers를 통해 그 작업을 행함
//따라서 초기값이 필요하지 않음(combineReducers가 알아서 함)
//리덕스 서버사이드렌더링을 위해 사용하는 것이 하이드레이트인데
//이를 사용하려면, index를 넣어줘야함 = 하이드레이트를 위해 인덱스 리듀서를 하나 추가하는 것

const rootReducer = combineReducers({
    index:(state = {}, action) => {
        switch(action.type){
            case HYDRATE:
                return {...state, ...action.payload};
            default:
                return state;
        }
    },
    user,
    post,
});


export default rootReducer