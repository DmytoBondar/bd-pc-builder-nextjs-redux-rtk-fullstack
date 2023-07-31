import HomePageLayOut from '@/components/Layout/HomePageLayOut';
import Categories from '@/components/UI/Categories';
import ProductCard from '@/components/UI/ProductCard';

const HomePage = () => {
    return (
       <div className='my-10'>
        <h3 className='bg-gray-600 text-yellow-400 p-2'>Products</h3>
        <div className='flex justify-center items-center mx-auto'>
        <ProductCard />
        </div>
        <h3 className='bg-gray-600 text-yellow-400 p-2'>Categories</h3>
        <div className='flex justify-center items-center mx-auto'>
        <Categories/>
        </div>
       </div>
    )
}

export default HomePage;

HomePage.getLayout = function getLayout(page){
    return (
        <HomePageLayOut>
            {page}
        </HomePageLayOut>
    )
}