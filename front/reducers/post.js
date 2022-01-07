
//초기값을 기준으로 리듀서를 쪼갬

//초기값
//대문자 소문자는 서버에서 데이터 받아오는 영향에 따라 
const initialState = {
    mainPosts: [{
        id:1,
        User : {
            id:1,
            nickname:'jaeeun',
        },
        content : '첫 번째 게시글 #해시태그 #node',
        Images:[{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
          }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
          }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
          }],
          Comments: [{
            User: {
              nickname: 'nero',
            },
            content: '우와 개정판이 나왔군요~',
          }, {
            User: {
              nickname: 'hero',
            },
            content: '얼른 사고싶어요~',
          }]
        }],
        imagePaths: [],
        postAdded: false,
}

//게시글 작성 action
const ADD_POST = 'ADD_POST';
export const addPost = {
    type : ADD_POST,
}

//바꿀 포스트
const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
      id: 1,
      nickname: 'jaeeun222',
    },
    Images: [],
    Comments: [],
  };


//이전 상태를 받아서 다음 상태를 만들어내는 함수
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : 
            return {
                ...state,
                //dummypost =  새로운 글
                //새로운 글을 쓰면, 앞으로 추가되기 때문에 mainPosts 앞에 dummyPost 작성
                //...state = 깊은 복사는 안되기 때문
                mainPosts : [dummyPost, ...state.mainPosts],
                postAdded : true,
            }
        default:
            return state;
    }
}



export default reducer;