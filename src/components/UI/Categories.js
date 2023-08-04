import { Card } from 'antd';
import { Col, Row } from 'antd';
import Image from 'next/image';
import CPUImage from "@/assets/categories/processor.webp";
import MonitorImage from '@/assets/categories/monitor.webp';
import MotherBoardImage from '@/assets/categories/motherboard.webp';
import PowerSupplyImage from '@/assets/categories/power-supply.png';
import RamImage from '@/assets/categories/ram.jpg';
import SSDImage from '@/assets/categories/ssd.jpg';


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
            <Card hoverable style={style} >
                <Image height={200} width={100} alt="example" src={MotherBoardImage} />
            </Card>
        </Col>
        <Col xs={24} md={8} xl={8}>
            <Card hoverable style={style} >
                <Image height={200} width={100} alt="example" src={CPUImage} />
            </Card>
        </Col>
        <Col xs={24} md={8} xl={8}>
            <Card hoverable style={style} >
                <Image height={200} width={100} alt="example" src={MonitorImage} />
            </Card>
        </Col>
        <Col xs={24} md={8} xl={8}>
            <Card hoverable style={style} >
                <Image height={200} width={100} alt="example" src={SSDImage} />
            </Card>
        </Col>
        <Col xs={24} md={8} xl={8}>
            <Card hoverable style={style} >
                <Image height={200} width={100} alt="example" src={RamImage} />
            </Card>
        </Col>
        <Col xs={24} md={8} xl={8}>
            <Card hoverable style={style} >
                <Image height={200} width={100} alt="example" src={PowerSupplyImage} />
            </Card>
        </Col>
    </Row>

);

export default Categories;