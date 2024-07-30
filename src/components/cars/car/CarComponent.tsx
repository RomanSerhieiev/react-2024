import React, { FC } from 'react';
import css from './CarComponent.module.css';
import { ICarResponse } from '../../../interfaces/car-response.interface';
import { carService } from '../../../services/car.service';
import { AxiosError } from 'axios';
import { authService } from '../../../services/auth.service';
import { useNavigate } from 'react-router-dom';

interface IProps {
    car: ICarResponse,
    setCarForUpdate: (car: ICarResponse) => void,
    setTrigger: (trigger: boolean) => void,
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
                                      setCarForUpdate,
                                      setTrigger
                                  }) => {
    const navigate = useNavigate();

    const deleteCar = async () => {
        try {
            const response = await carService.deleteById(`${car.id}`);
            if (response) {
                setTrigger(true);
            }
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError && axiosError?.response?.status === 401) {
                try {
                    await authService.refresh();
                } catch (e) {
                    return navigate('/');
                }

                const response = await carService.deleteById(`${car.id}`);
                if (response) {
                    setTrigger(true);
                }
            }
        }
    };

    const updatePhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if (event.target.files && event.target.files[0]) {
                const photo = event.target.files[0];
                await carService.updatePhotoById(`${car.id}`, {photo});
                setTrigger(true);
            }
        } catch (e) {
            const axiosError = e as AxiosError;
            if (axiosError && axiosError?.response?.status === 401) {
                try {
                    await authService.refresh();
                } catch (e) {
                    return navigate('/');
                }

                if (event.target.files && event.target.files[0]) {
                    const photo = event.target.files[0];
                    await carService.updatePhotoById(`${car.id}`, {photo});
                    setTrigger(true);
                }
            }
        }
    }

        return (
            <div className={css.Container}>
                <div>
                    <h3>{id}. {brand}</h3>
                    <div>Price: ${price}</div>
                    <div>Year: {year}</div>
                    {photo && <img src={photo} alt={brand} />}
                </div>
                <div>
                    {!photo && <label>UPLOAD PHOTO
                      <input type={'file'} onChange={updatePhoto} />
                    </label>}
                    <button onClick={() => setCarForUpdate(car)}>UPDATE</button>
                    <button onClick={deleteCar}>DELETE</button>
                </div>
            </div>
        );
    };

    export default CarComponent;