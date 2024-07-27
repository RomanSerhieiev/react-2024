import React, { FC, useEffect, useState } from 'react';
import css from './CarsPage.module.css';
import { carService } from '../../services/car.service';
import CarsComponent from '../../components/cars/cars/CarsComponent';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../components/pagination/PaginationComponent';
import { AxiosError } from 'axios';
import { authService } from '../../services/auth.service';
import CarFormComponent from '../../components/cars/car-form/CarFormComponent';
import { ICars } from '../../interfaces/cars.interface';
import { ICarResponse } from '../../interfaces/car-response.interface';

const CarsPage: FC = () => {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [cars, setCars] = useState<ICars>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });
    const [carForUpdate, setCarForUpdate] = useState<ICarResponse | null>(null);
    const [trigger, setTrigger] = useState<boolean>(false);

    useEffect(() => {
        const getCars = async () => {
            try {
                const response = await carService.getAll(query.get('page') || '1');
                if (response) {
                    setCars({...response});
                }
            } catch (e) {
                const axiosError = e as AxiosError;
                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh();
                    } catch (e) {
                        return navigate('/');
                    }

                    const response = await carService.getAll(query.get('page') || '1');
                    if (response) {
                        setCars({...response});
                    }
                }
            }
        }

        setTrigger(false)

        getCars().then()
    }, [navigate, query, carForUpdate, trigger])

    return (
        <div className={css.Container}>
            <div>
                <CarFormComponent carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger} />
                <CarsComponent cars={cars.items} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger} />
            </div>
            <PaginationComponent next={cars.next} prev={cars.prev} />
        </div>
    );
};

export default CarsPage;