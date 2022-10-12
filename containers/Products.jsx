import productData from 'data/product.data';
import {useState} from 'react';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    console.log('selec: ', selectedCategory);
    return (
        <section className='relative md:py-24 py-16 md:pt-12  bg-no-repeat bg-top'>
            <div className='container'>
                <div className='grid grid-cols-1 items-center gap-[30px]'>
                    <div className='filters-group-wrap text-center'>
                        <div className='filters-group'>
                            <ul className='mb-0 list-none container-filter-border-bottom filter-options'>
                                <li
                                    className={`inline-block text-sm uppercase font-semibold mx-2
                  mb-3 cursor-pointer relative border-b
                  border-transparent text-slate-400
                  transition duration-500 ${!selectedCategory ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(null)}
                                >
                                    Todo
                                </li>
                                {[...new Set(productData.map((item) => item.category))].map(
                                    (item, index) => (
                                        <li
                                            key={index}
                                            className={`inline-block text-sm uppercase font-semibold mx-2
                       mb-3 cursor-pointer relative
                       border-b border-transparent text-slate-400
                        transition duration-500 ${
                                                selectedCategory === item ? 'active' : ''
                                            }`}
                                            onClick={() => setSelectedCategory(item)}
                                        >
                                            {item}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                {/*grid*/}
            </div>
            {/*end container*/}
            <div className='container mt-8 grid grid-cols-3 gap-4'>
                {productData
                    .filter((item) =>
                        selectedCategory === null
                            ? item
                            : item.category === selectedCategory
                    )
                    .map((item, index) => (
                        <div key={index} className='col-span-1  picture-item p-3 mt-6'>
                            <img
                                src={item.image}
                                className='rounded-full h-32 w-32 mx-auto group-hover:animate-[spin_10s_linear_infinite]'
                                alt=''
                            />
                            <div className='mt-4 text-center'>
                                <a
                                    href='#'
                                    className='text-lg font-medium block hover:text-indigo-600 transition-all duration-500 ease-in-out'
                                >
                                    {item.title}
                                </a>
                                <span className='text-slate-400 mt-2 block'>{item.text}</span>
                                <h5 className='text-indigo-600 font-medium mt-4'>
                                    {item.price}
                                </h5>
                            </div>
                        </div>
                    ))}
            </div>
            {/*end container*/}
        </section>
    );
};

export default Products;
