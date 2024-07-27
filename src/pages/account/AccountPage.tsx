import React, { FC, useEffect, useState } from 'react';
import css from './AccountPage.module.css'
import AccountComponent from '../../components/account/AccountComponent';
import { authService } from '../../services/auth.service';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { IUserResponse } from '../../interfaces/user-response.interface';

const AccountPage: FC = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState<IUserResponse>();

    useEffect(() => {
        const getAccountInfo = async () => {
            try {
                const response = await authService.getMe();

                if (response) {
                    setUser({...response});
                }
            } catch (e) {
                const axiosError = e as AxiosError

                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh();
                    } catch (e) {
                        return navigate('/')
                    }

                    const response = await authService.getMe();

                    if (response) {
                        setUser({...response});
                    }
                }
            }
        }

        getAccountInfo().then()
    }, [navigate]);

    return (
        <div className={css.Container}>
            {user && <AccountComponent user={user} />}
        </div>
    );
};

export default AccountPage;