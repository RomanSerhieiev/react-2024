import React, { FC, ReactNode } from 'react';
import styles from './Character.module.css'

interface IProps {
    name: string;
    image: string;
}

type PropsWithChildren<T> = T & {children?: ReactNode}

const Character: FC<PropsWithChildren<IProps>> = ({name, image, children}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img className={styles.h200} src={image} alt={name}/>
            <p>{children}</p>
        </div>
    );
};

export {
    Character
};