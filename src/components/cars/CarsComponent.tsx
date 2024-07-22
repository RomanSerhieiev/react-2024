import React, { FC } from 'react';
import { ICarWithAuth } from '../../interfaces/car-with-auth.interface';

interface IProps {
    cars: ICarWithAuth[]
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars.map(car => <div key={car.id}>{car.id}. {car.brand}</div>)}
        </div>
    );
};

export default CarsComponent;