import React, { FC, useEffect } from 'react';
import css from './CarFormComponent.module.css';
import { useForm } from 'react-hook-form';
import { ICarReq } from '../../../interfaces/car-req.interface';
import { carService } from '../../../services/car.service';
import { useNavigate } from 'react-router-dom';
import { ICarRes } from '../../../interfaces/car-res.interface';

interface IProps {
    selectedCar: ICarRes | null,
    setSelectedCar: (car: ICarRes | null) => void,
    getCars: () => void
}

const CarFormComponent: FC<IProps> = ({selectedCar, setSelectedCar}) => {
    const {
        handleSubmit,
        register,
        reset
    } = useForm<ICarReq>();
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedCar) {
            reset(selectedCar);
        } else {
            reset();
        }
    }, [selectedCar, reset]);

    const createOrUpdate = async (car: ICarReq) => {
        let res;
        if (selectedCar) {
            res = await carService.putById(selectedCar.id.toString(), car);
        } else {
            res = await carService.post(car);
        }
        if (res) {
            setSelectedCar(null);
            reset();
            return navigate('/cars?page=1');
        }
    };

    return (
        <div className={css.Container}>
            <h3>{selectedCar ? 'Update' : 'Create'} a car</h3>
            <form onSubmit={handleSubmit(createOrUpdate)}>
                <label htmlFor="brand">Brand:</label>
                <input type="text" {...register('brand')} />
                <label htmlFor="price">Price:</label>
                <input type="text" {...register('price')} />
                <label htmlFor="year">Year:</label>
                <input type="text" {...register('year')} />
                <button>{selectedCar ? 'UPDATE' : 'CREATE'}</button>
                <button>RESET</button>
            </form>
        </div>
    );
};

export default CarFormComponent;