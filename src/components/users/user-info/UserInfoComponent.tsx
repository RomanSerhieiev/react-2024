import React, { FC } from 'react';
import css from '../../styles/ItemInfoComponent.module.css';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';

const UserInfoComponent: FC = () => {
    const user = useAppSelector(state => state.userSlice.user);

    const navigate = useNavigate();

    return (
        user && <div className={css.Container}>
          <h3>{user.id}. {user.name}</h3>
          <div className={css.UserContainer}>
            <div>
              <h4>CONTACTS:</h4>
              <p>EMAIL: <span className={css.Email}>{user.email}</span></p>
              <p>PHONE: {user.phone}</p>
              <p>USERNAME: {user.username}</p>
              <p>WEBSITE: {user.website}</p>
            </div>
            <div>
              <h4>ADDRESS:</h4>
              <p>CITY: {user.address.city}</p>
              <p>STREET: {user.address.street}</p>
              <p>SUITE: {user.address.suite}</p>
              <p>ZIP CODE: {user.address.zipcode}</p>
              <p>GEO: {user.address.geo.lat}, {user.address.geo.lng}</p>
            </div>
            <div>
              <h4>COMPANY:</h4>
              <p>NAME: {user.company.name}</p>
              <p>CATCH PHRASE: {user.company.catchPhrase}</p>
              <p>BS: {user.company.bs}</p>
            </div>
          </div>
          <button onClick={() => navigate(`albums`)}>ALBUMS</button>
          <button onClick={() => navigate(`todos`)}>TODOS</button>
          <button onClick={() => navigate(`posts`)}>POSTS</button>
        </div>
    );
};

export default UserInfoComponent;