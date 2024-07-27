import React, { FC, useEffect } from 'react';
import css from './CarFormComponent.module.css';
import { useForm } from 'react-hook-form';
import { carService } from '../../../services/car.service';
import { useNavigate } from 'react-router-dom';
import { ICarResponse } from '../../../interfaces/car-response.interface';
import { ICar } from '../../../interfaces/car.interface';

interface IProps {
    selectedCar: ICarResponse | null,
    setSelectedCar: (car: ICarResponse | null) => void,
}

const CarFormComponent: FC<IProps> = ({selectedCar, setSelectedCar}) => {
    const {
        handleSubmit,
        register,
        reset,
        formState: {
            errors,
            isValid
        },
        setValue
    } = useForm<ICar>();

    useEffect(() => {
        if (selectedCar) {
            setValue('brand', selectedCar.brand, {shouldValidate: true});
            setValue('price', selectedCar.price, {shouldValidate: true});
            setValue('year', selectedCar.year, {shouldValidate: true});
        }
    }, [selectedCar, setValue]);

    const create = async (car: ICar) => {
        await carService.create(car);
        reset();
    };

    const update = async (car: ICar) => {
        await carService.fullUpdateById(`${selectedCar?.id}`, car);
        setSelectedCar(null);
        reset();
    };

    const resetFields = async () => {
        reset()
    }

    return (
        <div className={css.Container}>
            <h3>{selectedCar ? 'Update' : 'Create'} a car</h3>
            <form onSubmit={handleSubmit(selectedCar ? update : create)}>
                <label>Brand:
                    <input type={'text'} {...register('brand')} />
                    {errors.brand && <span>{errors.brand.message}</span>}
                </label>
                <label>Price:
                    <input type={'text'} {...register('price')} />
                    {errors.price && <span>{errors.price.message}</span>}
                </label>
                <label>Year:
                    <input type={'text'} {...register('year')} />
                    {errors.year && <span>{errors.year.message}</span>}
                </label>
                <button disabled={!isValid} type={'submit'}>{selectedCar ? 'UPDATE' : 'CREATE'}</button>
                <button onClick={resetFields} type={'reset'}>RESET</button>
            </form>
        </div>
    );
};

export default CarFormComponent;