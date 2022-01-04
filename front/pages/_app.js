//page의 공통 부분 처리
import PropTyes from 'prop-types';
import 'antd/dist/antd.css'
import Head from 'next/head';

const App = ({ Component }) => {
    return(
        //index.js의 부모 index.js의 return 부분이 component로 들어감
        //모든 페이지에서 공통인 부분
        //head 컴포넌트는 따로 존재
        <>
            <Head>
                <meta charSet='utf-8'></meta>
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
}

//서비스 안전성 높이기 
App.propTypes = {
    Component : PropTyes.elementType.isRequired,
}

export default App;