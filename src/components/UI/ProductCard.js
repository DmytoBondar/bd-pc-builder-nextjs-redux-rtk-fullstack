import { Card } from 'antd';
const { Meta } = Card;
import { Col, Divider, Row } from 'antd';
const style = {
    width: "300px",
    // height:"200px",
    marginTop: "10px",
    padding:"10px",
    display:"flex",
    justifyContent:"center"
};

const ProductCard = () => (
    <Row justify="center" className='flex justify-center items-center'
        // gutter={{
        //     xs: 8,
        //     sm: 16,
        //     md: 24,
        //     lg: 32,
        // }}
    >
        <Col md={8}>
            <Card hoverable style={style} cover={
                <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            }>
            </Card>
        </Col>
        <Col md={8}>
            <Card hoverable style={style} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            </Card>
        </Col>
        <Col md={8}>
            <Card hoverable style={style} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            </Card>
        </Col>

        <Col md={8}>
            <Card hoverable style={style} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            </Card>
        </Col>

        <Col md={8}>
            <Card hoverable style={style} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            </Card>
        </Col>

        <Col md={8}>
            <Card hoverable style={style} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            </Card>
        </Col>
    </Row>

);

export default ProductCard;