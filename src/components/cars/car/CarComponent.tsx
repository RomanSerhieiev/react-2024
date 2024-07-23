import React, { FC } from 'react';
import css from './CarComponent.module.css'
import { ICarRes } from '../../../interfaces/car-res.interface';

interface IProps {
    car: ICarRes,
    setSelectedCar: (car: ICarRes) => void;
}

const CarComponent: FC<IProps> = ({car,setSelectedCar}) => {
    return (
        <div className={css.Container}>
            <h3>{car.id}. {car.brand}</h3>
            <p>Price: {car.price}</p>
            <p>Year: {car.year}</p>
            <div>
                <button onClick={() => setSelectedCar(car)}>UPDATE</button>
                <button>DELETE</button>
            </div>
        </div>
    );
};

export default CarComponent;