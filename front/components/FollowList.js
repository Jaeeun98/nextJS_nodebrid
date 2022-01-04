import { Button, Card, List } from 'antd';
import { PropTypes } from "prop-types";
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({ header, data }) => {
    return (
        
        <List
            //객체들은 모두 최적화 해놔야함
            style={{marginBottom:'20px'}}
            grid={{ gutter: 4, xs: 2, md: 3 }}
            size="middle"
            header={<div>{header}</div>}
            loadMore={<div style={{ textAlign: 'center', margin: '10px 0'}}><Button>더 보기</Button></div>}
            bordered
            dataSource={data}
            renderItem={(item) => (
                //dataSurce에서 받아온 data가 renderItem으로 들어감
                //icon은 분리되어있기 때문에 따로 불러와야함
                <List.Item style={{marginTop:'20px'}}>
                    <Card actions={[<StopOutlined key="stop" />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </List.Item>
            )}
        />
    )
}

FollowList.prototype = {
    header:PropTypes.toString.isRequired,
    data:PropTypes.array.isRequired
}

export default FollowList;