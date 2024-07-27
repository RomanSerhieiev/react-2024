import React, { FC } from 'react';
import css from './CarsComponent.module.css'
import CarComponent from '../car/CarComponent';
import { ICarResponse } from '../../../interfaces/car-response.interface';

interface IProps {
    cars: ICarResponse[],
    setCarForUpdate: (car: ICarResponse) => void,
    setTrigger: (trigger: boolean) => void,
}

const CarsComponent: FC<IProps> = ({cars, setCarForUpdate, setTrigger}) => {
    return (
        <div className={css.Container}>
            {cars.map(car => <CarComponent key={car.id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger} />)}
        </div>
    );
};

export default CarsComponent;