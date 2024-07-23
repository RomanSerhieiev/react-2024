import React, { FC, useEffect, useState } from 'react';
import css from './AccountPage.module.css'
import AccountComponent from '../../components/account/AccountComponent';
import { IUser } from '../../interfaces/user.interface';
import { authService } from '../../services/auth.service';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const AccountPage: FC = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        const getAccount = async () => {
            try {
                const res = await authService.me();
                if (res) {
                    setUser({...res});
                }
            } catch (e) {
                const axiosError = e as AxiosError
                if (axiosError && axiosError?.response?.status === 401) {
                    try {
                        await authService.refresh();
                    } catch (e) {
                        return navigate('/')
                    }

                    const res = await authService.me();
                    if (res) {
                        setUser({...res});
                    }
                }
            }
        }

        getAccount()
    }, [navigate]);

    return (
        <div className={css.Container}>
            {user && <AccountComponent user={user} />}
        </div>
    );
};

export default AccountPage;