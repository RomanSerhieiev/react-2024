import React, { FC, useEffect } from 'react';
import css from './CarFormComponent.module.css';
import { useForm } from 'react-hook-form';
import { carService } from '../../../services/car.service';
import { ICarResponse } from '../../../interfaces/car-response.interface';
import { ICar } from '../../../interfaces/car.interface';
import { joiResolver } from '@hookform/resolvers/joi';
import { carValidator } from '../../../validators/car.validator';
import { AxiosError } from 'axios';
import { authService } from '../../../services/auth.service';
import { useNavigate } from 'react-router-dom';

interface IProps {
    carForUpdate: ICarResponse | null,
    setCarForUpdate: (trigger: null) => void,
    setTrigger: (trigger: boolean) => void,
}

const CarFormComponent: FC<IProps> = ({carForUpdate, setCarForUpdate, setTrigger}) => {
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        reset,
        formState: {
            errors,
            isValid
        },
        setValue
    } = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue]);

    const createCar = async (car: ICar) => {
        try {
            const response = await carService.create(car);
            if (response) {
                setTrigger(true);
                reset();
            }
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError && axiosError?.response?.status === 401) {
                try {
                    await authService.refresh();
                } catch (e) {
                    return navigate('/');
                }

                const response = await carService.create(car);
                if (response) {
                    setTrigger(true);
                    reset();
                }
            }
        }
    };

    const updateCar = async (car: ICar) => {
        try {
            const response = await carService.fullUpdateById(`${carForUpdate?.id}`, car);
            if (response) {
                setCarForUpdate(null);
                reset();
            }
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError && axiosError?.response?.status === 401) {
                try {
                    await authService.refresh();
                } catch (e) {
                    return navigate('/');
                }

                const response = await carService.fullUpdateById(`${carForUpdate?.id}`, car);
                if (response) {
                    setCarForUpdate(null);
                    reset();
                }
            }
        }
    };

    const resetFields = async () => {
        setCarForUpdate(null);
        reset()
    }

    return (
        <div className={css.Container}>
            <h3>{carForUpdate ? 'Update' : 'Create'} a car</h3>
            <form onSubmit={handleSubmit(carForUpdate ? updateCar : createCar)}>
                <label>Brand: <input type={'text'} {...register('brand')} />
                    {errors.brand && <div className={css.Error}>{errors.brand.message}</div>}
                </label>
                <label>Price: <input type={'text'} {...register('price')} />
                    {errors.price && <div className={css.Error}>{errors.price.message}</div>}
                </label>
                <label>Year: <input type={'text'} {...register('year')} />
                    {errors.year && <div className={css.Error}>{errors.year.message}</div>}
                </label>
                <button disabled={!isValid} type={'submit'}>{carForUpdate ? 'UPDATE' : 'CREATE'}</button>
                <button onClick={resetFields} type={'reset'}>RESET</button>
            </form>
        </div>
    );
};

export default CarFormComponent;