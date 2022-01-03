import { Button, Form, Input } from 'antd';
import { useCallback, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    margin-Top:10px;
`
const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, [id, password]);

    const onSubmitForm = useCallback((e) => {
        //antd에서는 onFinish할 때 e.preventDefault()가 자동으로 적용됨
        console.log(id, password);
        setIsLoggedIn(true);
    }, [])

    //form은 라이브러리를 사용하는게 훨씬 편함
    return (
        <Form onFinish={onSubmitForm}>
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
                <Button type='primary' htmlType='sumbmit' loading={false}>로그인</Button>
                <Link href='/signup'>
                    <a>
                        <Button>회원가입</Button>
                    </a>
                </Link>
            </ButtonWrapper>
        </Form>
    )
}

export default LoginForm;