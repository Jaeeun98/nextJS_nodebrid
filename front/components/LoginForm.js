import { Button, Form, Input } from 'antd';
import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../reducers/user';


//styled-components가 적용되지 않는 이유는 서버사이드렌더링 설정을 안해줬기 때문
//서버에서 styled-components가 적용되지 않은 상태로 내려오는 것

const ButtonWrapper = styled.div`
    margin-Top:10px;
`
const FormWrapper = styled(Form)`
    padding:10px;
`
const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput('');
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const {isLoggedIn} = useSelector(state => state.user);

    const onSubmitForm = useCallback(() => {
        //antd에서는 onFinish할 때 e.preventDefault()가 자동으로 적용됨
        console.log(email, password);
        dispatch({
          type: LOG_IN_REQUEST,
          data: { email, password },
        });
      }, [email, password]);

    //form은 라이브러리를 사용하는게 훨씬 편함
    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br />
                <Input name='user-id' value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                <br />
                <Input 
                    name='user-password' 
                    type={password} 
                    value={password} 
                    onChange={onChangePassword} 
                    required 
                />
            </div>
            {
                //객체는 비교할때마다 false가 되기 때문에 style을 객체{}로 생성하게 되면 무조건 리렌더링됨
                //따라서 style의 경우 객체 안에 넣으면 안됨
                //styled-component 사용하기 싫으면 useMemo 사용해서 위에 style을 만든 후 아래에 적용
            }
            <ButtonWrapper>
                <Button type='primary' htmlType='sumbmit' loading={isLoggedIn}>로그인</Button>
                <Link href='/signup'>
                    <a>
                        <Button>회원가입</Button>
                    </a>
                </Link>
            </ButtonWrapper>
        </FormWrapper>
    )
}

LoginForm.propTypes = {
    setIsLoggedIn:PropTypes.func.isRequired,
}

export default LoginForm;