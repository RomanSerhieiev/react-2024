import React, { FC } from 'react';
import css from './CarsComponent.module.css'
import { ICarRes } from '../../../interfaces/car-res.interface';
import CarComponent from '../car/CarComponent';

interface IProps {
    cars: ICarRes[],
    setSelectedCar: (car: ICarRes) => void;
}

const CarsComponent: FC<IProps> = ({cars, setSelectedCar}) => {
    return (
        <div className={css.Container}>
            {cars.map(car => <CarComponent key={car.id} car={car} setSelectedCar={setSelectedCar} />)}
        </div>
    );
};

export default CarsComponent;