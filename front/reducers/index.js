import { HYDRATE } from "next-redux-wrapper"

//store = store + reducer
const initialState = {
    user: {
        isLoggedIn : false,
        user : null,
        signUpData : {},
        loginData : {}
    },
    post: {
        mainPosts:[],
    }
}

//action creator
export const loginAction = data => {
    return {
        type : 'LOG_IN',
        //객체에서 key와 변수가 같으면 생략 가능
        data
    }
}

export const logoutAction = () => {
    return {
        type : 'LOG_OUT',
    }
}

//reducer = 이전상태와 액션을 받아서 다음 상태를 만들어내는 함수
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload}
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data
                }
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null
                }
            }   
            
        default:
            return state;
    }
};

export default rootReducer