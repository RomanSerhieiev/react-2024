import React, { FC, useEffect, useState } from 'react';
import Product from '../product/Product';
import { IProduct } from '../../interfaces/IProduct';
import css from './Products.module.css';

const Products: FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(value => {
                setProducts(value.products);
            })
    }, []);

    return (
        <div className={css.Container}>
            {products.map((product) =>
                <Product
                    key={product.id}
                    product={product}
                />)}
        </div>
    );
};

export {
    Products
};