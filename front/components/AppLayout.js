import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';

const SearchInput = styled(Input.Search)`
    vertical-Align:middle;
`
const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

//특정 컴포넌트 공통
//컴포넌트랑 컨테이너 많이 구분했지만, 지금은 구분하지 않는 경우도 많음
const AppLayout = ({ children }) => {
    const { isLoggedIn } = useSelector(state => state.user);

    return (
        <div>
            <Global />
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href='/'>
                        <a>노드버드</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/profile'>
                        <a>프로필</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput />
                </Menu.Item>
                <Menu.Item>
                    <Link href='/signup'>
                        <a>회원가입</a>
                    </Link>
                </Menu.Item>
            </Menu>
            {
                //24가 100%, 한 줄에 넣고 싶다면 합쳐저 24가 넘으면 안됨
                //반응형은 모바일을 먼저 하고 데스크탑으로 늘려야함
                //xs : 모바일, sm : 태클릿, md : 작은 데스크탑, xl : 큰 화면
                //커스텀하게 바꿀 수 있음
                //gutter : col감의 간격
                //target _blank 할 땐 반드시 rel='---' 붙여주기(보안문제)
            }
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}>
                    <a href='https://blog.naver.com/jaeeun_98' target='_blank' rel='noreferrer noopener'>
                        Made by Jaeeun
                    </a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,
}

export default AppLayout;