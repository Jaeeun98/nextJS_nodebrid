import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';

//배열안에 jsx를 넣어줄때는 반드시 key를 넣어줘야 함(?)
const PostCard = ({ post }) => {
    //state.user.me && state.user.me.id = state.user.me?.id
    const id = useSelector((state) => state.user.me?.id);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [liked, setLiked] = useState(false);

    const onToggleLike = useCallback(() => {
        //prev => !prev 하면 false true 항상 바뀜
        //prev에는 이전 데이트 값이 들어가게 됨
        //이를 기반으로 다음 값을 만드는데, !를 붙이면 반대가 되므로 false가 true로 true가 false로 바뀌게됨
        setLiked((prev) => !prev);
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
      }, []);


    return(
        <div style={{marginBottom:20}}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="message" onClick={onToggleComment} />,
                    <Popover
                        key="more"
                        content={(
                            <Button.Group>
                                {id && post.User.id === id
                                    ? (
                                        <>
                                            <Button>수정</Button>
                                            <Button type="danger">삭제</Button>
                                        </>
                                    )
                                    : <Button>신고</Button>}
                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />

                <Button></Button>
            </Card>
            {commentFormOpened && (
                <>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={(
                                        <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                                            <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                                        </Link>
                                    )}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </>
            )}
        </div>
    )
}

PostCard.propTypes = {
    //shape 사용하면 그 안에 있는 것들도 자세하게 적어줄 수 있음
    post: PropTypes.shape({
      id: PropTypes.number,
      User: PropTypes.object,
      content: PropTypes.string,
      createdAt: PropTypes.object,
      Comments: PropTypes.arrayOf(PropTypes.object),
      Images: PropTypes.arrayOf(PropTypes.object),
    }),
};

export default PostCard