import HomePageLayOut from '@/components/Layout/HomePageLayOut';
import { Button, Card } from 'antd';
import Logo from '../../assets/logo.jpg';
import Image from 'next/image';
import CPUImage from '../../assets/categories/processor.webp';
import keyboardImage from '../../assets/categories/keyboard.jpg';
import MonitorImage from '../../assets/categories/monitor.webp';
import MotherBoardImage from '../../assets/categories/motherboard.webp';
import PowerSupplyImage from '../../assets/categories/power-supply.png';
import RamImage from '../../assets/categories/ram.jpg';
import SSDImage from '../../assets/categories/ssd.jpg';
import { useRouter } from 'next/router';
import {ShoppingCartOutlined, SaveOutlined, DollarOutlined} from '@ant-design/icons';

const buildOptions = [
    {
        name: "CPU / Processor",
        image: CPUImage,
        path: '/processor/amd'
    },
    {
        name: "Motherboard",
        image: MotherBoardImage,
        path: '/motherboard'
    },
    {
        name: "RAM",
        image: RamImage,
        path: '/ram'
    },
    {
        name: "Power Supply Unit",
        image: PowerSupplyImage,
        path: '/power-supply'

    },
    {
        name: "Storage Device",
        image: SSDImage,
        path: '/ssd'
    },
    {
        name: "Monitor",
        image: MonitorImage,
        path: '/monitor'
    },
    {
        name: "Others",
        image: keyboardImage,
        path: '/others'
    }
]
const PcBuilder = () => {
    const router = useRouter();
    const handleClick =(link) =>{
        router.push({
            pathname: link,
            query: {
                build:"getProduct"
            }
        })
    }
    return (
        <Card style={{ width: "80%" }} className='mx-auto my-5 mb-40'>
            <div className='flex justify-between'>
                <div>
                    <div className='flex items-center'>
                        <Image height={50} width={50} src={Logo} className=' mr-5' />
                        <h3 className="text-2xl font-bold">BD PC BUILDER</h3>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <Button className='bg-blue-700 flex items-center' type="primary" icon={<ShoppingCartOutlined />}>Add to Cart</Button>
                    <Button className='bg-blue-700 flex items-center' type="primary" icon={<SaveOutlined />}>Save</Button>
                    <Button className='bg-blue-700 items-center flex' type="primary" icon={<DollarOutlined />}>0</Button>
                </div>
            </div>
            <div>
                <h2 className='bg-gray-300 text-teal-900 p-2 my-2 rounded-sm'>PC Builder - Build Your Own Computer</h2>
            </div>

            {
                buildOptions.map((data, id) => (
                    <Card hoverable className='mb-2' key={id + 10}>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <div>
                                    <Image src={data.image} height={80} width={80} className='rounded' />
                                </div>
                                <div >
                                    <h3>{data.name}</h3>
                                    <hr class="h-5 w-96 mt-2 bg-gray-200 dark:bg-gray-500" />
                                </div>
                            </div>
                            <Button className='bg-blue-700 items-center flex' type="primary" size="large" onClick={() =>handleClick(data.path)}>Choose</Button>
                        </div>
                    </Card>
                ))
            }
        </Card>
    )
}
export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
    return (
        <HomePageLayOut>
            {page}
        </HomePageLayOut>
    )
}