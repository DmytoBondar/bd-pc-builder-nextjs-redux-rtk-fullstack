import ProductLayout from "@/components/Layout/ProductLayout";
import { Button, Card, Col, Row } from "antd";
import processImage from '@/assets/categories/processor.webp'
import Image from "next/image";
import {
  ShoppingCartOutlined
} from '@ant-design/icons';

const AMDProcessor = () => {
  return (
    <Row gutter={8}>
      <Col md={8} className="mb-2">
        <Card hoverable cover={
          <>
            <Image height={300} width={200} alt="processor" src={processImage} />
            
          </>
        }>
          <h1 className="my-2 p-1 font-bold text-base leading-5">
              AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3 Graphics
            </h1>
            <ul className="px-5">
              <li>Base Clock Speed 3.2GHz</li>
              <li>Package AM4</li>
              <li>PCI Express PCIe 3.0</li>
            </ul>
            <hr className="my-2"/>
            <div>
              <h4 className="text-yellow-500 text-2xl text-center">700 $</h4>
            </div>
            <Button className='bg-blue-700 flex items-center justify-center mt-5' style={{width:"100%"}} type="primary" icon={<ShoppingCartOutlined />}>Add to Cart</Button>
        </Card>
      </Col>

      <Col md={8} className="mb-2">
        <Card hoverable cover={
          <>
            <Image height={300} width={200} alt="processor" src={processImage} />
            
          </>
        }>
          <h1 className="my-2 p-1 font-bold text-base leading-5">
              AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3 Graphics
            </h1>
            <ul className="px-5">
              <li>Base Clock Speed 3.2GHz</li>
              <li>Package AM4</li>
              <li>PCI Express PCIe 3.0</li>
            </ul>
            <hr className="my-2"/>
            <div>
              <h4 className="text-yellow-500 text-2xl text-center">700 $</h4>
            </div>
            <Button className='bg-blue-700 flex items-center justify-center mt-5' style={{width:"100%"}} type="primary" icon={<ShoppingCartOutlined />}>Add to Cart</Button>
        </Card>
      </Col>

      <Col md={8} className="mb-2">
        <Card hoverable cover={
          <>
            <Image height={300} width={200} alt="processor" src={processImage} />
            
          </>
        }>
          <h1 className="my-2 p-1 font-bold text-base leading-5">
              AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3 Graphics
            </h1>
            <ul className="px-5">
              <li>Base Clock Speed 3.2GHz</li>
              <li>Package AM4</li>
              <li>PCI Express PCIe 3.0</li>
            </ul>
            <hr className="my-2"/>
            <div>
              <h4 className="text-yellow-500 text-2xl text-center">700 $</h4>
            </div>
            <Button className='bg-blue-700 flex items-center justify-center mt-5' style={{width:"100%"}} type="primary" icon={<ShoppingCartOutlined />}>Add to Cart</Button>
        </Card>
      </Col>

      <Col md={8} className="mb-2">
        <Card hoverable cover={
          <>
            <Image height={300} width={200} alt="processor" src={processImage} />
            
          </>
        }>
          <h1 className="my-2 p-1 font-bold text-base leading-5">
              AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3 Graphics
            </h1>
            <ul className="px-5">
              <li>Base Clock Speed 3.2GHz</li>
              <li>Package AM4</li>
              <li>PCI Express PCIe 3.0</li>
            </ul>
            <hr className="my-2"/>
            <div>
              <h4 className="text-yellow-500 text-2xl text-center">700 $</h4>
            </div>
            <Button className='bg-blue-700 flex items-center justify-center mt-5' style={{width:"100%"}} type="primary" icon={<ShoppingCartOutlined />}>Add to Cart</Button>
        </Card>
      </Col>
    </Row>
  )
}

export default AMDProcessor;

AMDProcessor.getLayout = function getLayout(page) {
  return (
    <ProductLayout>
      {page}
    </ProductLayout>
  )
}