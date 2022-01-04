import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{nickname:'jaeeun'}, {nickname:'jaeeun2'}, {nickname:'jaeeun3'}];
    const followingList = [{nickname:'jaeeun'}, {nickname:'jaeeun2'}, {nickname:'jaeeun3'}]
    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                {
                    //가상 컴포넌트, props 미리 설정하고 자세히 설정하는게 좋음 
                }
                <NicknameEditForm />
                <FollowList header='팔로잉 목록' data={followingList}/>
                <FollowList header='팔로워 목록' data={followerList} />
            </AppLayout>
        </>
    )
}

export default Profile;