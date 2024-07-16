import React, { FC } from 'react';
import css from './Product.module.css';
import { IProduct } from '../../interfaces/IProduct';

type IProps = {
    product: IProduct
}

const Product: FC<IProps> = ({
                                 product: {
                                     id,
                                     title,
                                     description,
                                     category,
                                     price,
                                     discountPercentage,
                                     rating,
                                     stock,
                                     tags,
                                     brand,
                                     sku,
                                     weight,
                                     dimensions: {
                                         width,
                                         height,
                                         depth
                                     },
                                     warrantyInformation,
                                     shippingInformation,
                                     availabilityStatus,
                                     reviews,
                                     returnPolicy,
                                     minimumOrderQuantity,
                                     meta: {
                                         createdAt,
                                         updatedAt,
                                         barcode,
                                         qrCode
                                     },
                                     images,
                                     thumbnail
                                 }
                             }) => {
    return (
        <div className={css.Container}>
            <img src={thumbnail} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>Reviews:</h3>
            {reviews.map(({comment, rating, date, reviewerName, reviewerEmail}, index) =>
                <div key={index} className={css.Review}>
                    <p>Comment: {comment}</p>
                    <p>Rating: {rating}</p>
                    <p>Date: {date}</p>
                    <p>Reviewer name: {reviewerName}</p>
                    <p>Reviewer email: {reviewerEmail}</p>
                </div>
            )}
            <p>ID: {id}</p>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            <p>Discount percentage: {discountPercentage}</p>
            <p>Rating: {rating}</p>
            <p>Stock: {stock}</p>
            <p>Tags: {tags}</p>
            <p>Brand: {brand}</p>
            <p>SKU: {sku}</p>
            <p>Weight: {weight}</p>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
            <p>Depth: {depth}</p>
            <p>Warranty information: {warrantyInformation}</p>
            <p>Shipping information: {shippingInformation}</p>
            <p>Availability status: {availabilityStatus}</p>
            <p>Return policy: {returnPolicy}</p>
            <p>Minimum order quantity: {minimumOrderQuantity}</p>
            <p>Created at: {createdAt}</p>
            <p>Updated at: {updatedAt}</p>
            <p>BAR code: {barcode}</p>
            <p>Gallery:</p>
            {images.map((image, index) => <img key={index} src={image} alt={title} />)}
            <p>QR code:</p>
            <img src={qrCode} alt={title} />
        </div>
    );
};

export default Product;