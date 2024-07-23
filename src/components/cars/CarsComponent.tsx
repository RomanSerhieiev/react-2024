import React, { FC } from 'react';
import { ICar } from '../../interfaces/car.interface';

interface IProps {
    cars: ICar[]
}

const CarsComponent: FC<IProps> = ({cars}) => {
    return (
        <div>
            {cars.map(car => <div key={car.id}>{car.id}. {car.brand}</div>)}
        </div>
    );
};

export default CarsComponent;