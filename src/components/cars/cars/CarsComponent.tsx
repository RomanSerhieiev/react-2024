import React, { FC } from 'react';
import css from './CarsComponent.module.css'
import CarComponent from '../car/CarComponent';
import { ICarResponse } from '../../../interfaces/car-response.interface';

interface IProps {
    cars: ICarResponse[],
    setSelectedCar: (car: ICarResponse) => void;
}

const CarsComponent: FC<IProps> = ({cars, setSelectedCar}) => {
    return (
        <div className={css.Container}>
            {cars.map(car => <CarComponent key={car.id} car={car} setSelectedCar={setSelectedCar} />)}
        </div>
    );
};

export default CarsComponent;