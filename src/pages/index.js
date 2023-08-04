import HomePageLayOut from '@/components/Layout/HomePageLayOut';
import Categories from '@/components/UI/Categories';
import ProductCard from '@/components/UI/ProductCard';
import { shuffleArray } from '@/utils/shuffleArray';
import { Row } from 'antd';

const HomePage = ({ products }) => {
    return (
        <div className='my-10'>
            <h3 className='bg-gray-600 text-yellow-400 p-2'>Products</h3>
            <div className='flex justify-center items-center mx-auto'>
                <Row justify="center" className='flex justify-center items-center my-10' gutter={10}>
                    {
                        products?.map((data, id) => <ProductCard data={data} key={id + 10}/>)
                    }
                </Row>
            </div>
            <h3 className='bg-gray-600 text-yellow-400 p-2'>Categories</h3>
            <div className='flex justify-center items-center mx-auto'>
                <Categories />
            </div>
        </div>
    )
}

export default HomePage;

HomePage.getLayout = function getLayout(page) {
    return (
        <HomePageLayOut>
            {page}
        </HomePageLayOut>
    )
}
export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:5000/api/v1/products');

    const data = await res.json();
    const shuffleProducts = shuffleArray(data.data);
    const randomProducts = shuffleProducts.slice(0,6);
    return {
        props: {
            products: randomProducts
        }
    }
}