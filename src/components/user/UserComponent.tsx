import React, { FC } from 'react';
import { IUser } from '../../interfaces/IUser';
import { EGender } from '../../enums/EGender';
import { ERole } from '../../enums/ERole';
import css from './UserComponent.module.css';

interface IProps {
    user: IUser;
}

type PropsWithChildren<T> = T & { children?: React.ReactNode } & {userIfo: (user: Partial<IUser>) => void}

const UserComponent: FC<PropsWithChildren<IProps>> = ({user, userIfo}) => {
    const {
        id,
        firstName,
        lastName,
        maidenName,
        age,
        gender,
        email,
        phone,
        username,
        password,
        birthDate,
        image,
        bloodGroup,
        height,
        weight,
        eyeColor,
        hair: {
            color,
            type
        },
        ip,
        address: {
            address: userAddress,
            city: userCity,
            state: userState,
            stateCode: userStateCode,
            postalCode: userPostalCode,
            coordinates: {
                lat: userLat,
                lng: userLng
            },
            country: userCountry
        },
        macAddress,
        university,
        bank: {
            cardExpire,
            cardNumber,
            cardType,
            currency,
            iban
        },
        company: {
            department,
            name,
            title,
            address: {
                address: companyAddress,
                city: companyCity,
                state: companyState,
                stateCode: companyStateCode,
                postalCode: companyPostalCode,
                coordinates: {
                    lat: companyLat,
                    lng: companyLng
                },
                country: companyCountry
            }
        },
        ein,
        ssn,
        userAgent,
        crypto: {
            coin,
            wallet,
            network
        },
        role
    } = user

    return (
        <div className={css.User}>
            <h3>{id}. {firstName} {lastName}</h3>
            <button onClick={() => userIfo({id, firstName, lastName})}>Show posts</button>
        </div>
    );
};

export default UserComponent;