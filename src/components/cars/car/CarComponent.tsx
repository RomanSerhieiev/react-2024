import React, { FC } from 'react';
import css from './CarComponent.module.css';
import { ICarResponse } from '../../../interfaces/car-response.interface';

interface IProps {
    car: ICarResponse,
    setSelectedCar: (car: ICarResponse) => void;
}

const CarComponent: FC<IProps> = ({
                                      car,
                                      car: {
                                          id,
                                          price,
                                          year,
                                          brand,
                                          photo
                                      },
                                      setSelectedCar
                                  }) => {
    return (
        <div className={css.Container}>
            <h3>{id}. {brand}</h3>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <img src={photo} alt={brand} />
            <div>
                <button onClick={() => setSelectedCar(car)}>UPDATE</button>
                <button>DELETE</button>
            </div>
        </div>
    );
};

export default CarComponent;