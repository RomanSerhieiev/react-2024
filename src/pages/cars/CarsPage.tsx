import React, { FC, useEffect, useState } from 'react';
import { carService } from '../../services/car.service';
import { ICarWithAuth } from '../../interfaces/car-with-auth.interface';
import CarsComponent from '../../components/cars/CarsComponent';

const CarsPage: FC = () => {
    const [cars, setCars] = useState<ICarWithAuth[]>([]);

    useEffect(() => {
        carService.getAll()
            .then(value => {
                if (value) {
                    setCars([...value.items]);
                }
            });
    }, []);

    return (
        <div>
            <CarsComponent cars={cars} />
        </div>
    );
};

export default CarsPage;