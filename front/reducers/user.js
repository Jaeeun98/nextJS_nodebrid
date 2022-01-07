import axios from "axios";

const dummyUser = {
    id: 1,
    nickname: 'jaeeun',
    Posts: [],
    Followings: [],
    Followers: [],
};

//초기값을 기준으로 리듀서를 쪼갬
//초기값
const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {}
    },
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';


//redux-thunk
export const loginAction = data => {
    return (dispatch, getState) => {
        const state = getState(); //초기 상태값이 출력됨
        dispatch(loginRequestAction())
        axios.post('/api/login')
            .then(() => {
                dispatch(loginSuccessAction(res.data))
            })
            .catch(() => {
                dispatch(loginFailureAction(err))
            })
    }
}

//action creator
//모든 요청이든 reduest, success, failure 이 필요함(서버에 요청하는 거니까)
//요청, 성공, 실패가 필요하기 때문에
export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        //객체에서 key와 value가 같으면 생략 가능
        data,
    }
};
export const loginSuccessAction = (data) => {
    return {
        type: LOG_IN_SUCCESS,
        data,
    }
};
export const loginFailureAction = (data) => {
    return {
        type: LOG_IN_FAILURE,
        data,
    }
};

export const logoutRequestAction = {
    type: LOG_OUT_REQUEST,
};
export const logoutSuccessAction = {
    type: LOG_OUT_SUCCESS,
};
export const logoutFailureAction = {
    type: LOG_OUT_FAILURE,
};


//이전 상태를 받아서 다음 상태를 만들어내는 함수
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
                loginData: action.data,
            };
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        }
        default: {
            return {
                ...state,
            }
        }
    }
}


//export default한건 import 할 때 원하는 이름 지어서 자유롭게 가져올 수 있음
export default reducer;