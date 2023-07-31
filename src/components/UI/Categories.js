import { Card } from 'antd';
const { Meta } = Card;
import { Col, Divider, Row } from 'antd';
const style = {
    width: 220,
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

};

const Categories = () => (
    <Row justify="center" className='flex justify-center items-center'
        gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
        }}
    >
        <Col xs={24} md={8} xl={8}>
            <Card hoverable style={style} cover={
                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            }>
            </Card>
        </Col>
        <Col xs={24} md={8} xl={8}>
            <Card hoverable style={style} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            </Card>
        </Col>
        <Col xs={24} md={8} xl={8}>
            <Card hoverable style={style} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            </Card>
        </Col>

        <Col xs={24} md={8} xl={8}>
            <Card hoverable style={style} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            </Card>
        </Col>

        <Col xs={24} md={8} xl={8}>
            <Card hoverable style={style} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            </Card>
        </Col>

        <Col xs={24} md={8} xl={8}>
            <Card hoverable style={style} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            </Card>
        </Col>
    </Row>

);

export default Categories;