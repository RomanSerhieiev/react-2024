import React, { FC, useCallback, useEffect, useState } from 'react';
import css from './CarsPage.module.css';
import { carService } from '../../services/car.service';
import CarsComponent from '../../components/cars/cars/CarsComponent';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../components/pagination/PaginationComponent';
import { AxiosError } from 'axios';
import { authService } from '../../services/auth.service';
import CarFormComponent from '../../components/cars/car-form/CarFormComponent';
import { ICars } from '../../interfaces/cars';
import { ICarRes } from '../../interfaces/car-res.interface';

const CarsPage: FC = () => {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [carsRes, setCarsRes] = useState<ICars>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });
    const [selectedCar, setSelectedCar] = useState<ICarRes | null>(null);

    const getCars = useCallback(async () => {
        try {
            const res = await carService.getAll(query.get('page') || '1');
            if (res) {
                setCarsRes({...res});
            }
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError && axiosError?.response?.status === 401) {
                try {
                    await authService.refresh();
                } catch (e) {
                    return navigate('/');
                }

                const res = await carService.getAll(query.get('page') || '1');
                if (res) {
                    setCarsRes({...res});
                }
            }
        }
    }, [query, navigate]);

    useEffect(() => {
        getCars();
    }, [getCars]);

    return (
        <div className={css.Container}>
            <CarFormComponent selectedCar={selectedCar} setSelectedCar={setSelectedCar} getCars={getCars} />
            <CarsComponent cars={carsRes.items} setSelectedCar={setSelectedCar} />
            <PaginationComponent next={carsRes.next} prev={carsRes.prev} />
        </div>
    );
};

export default CarsPage;