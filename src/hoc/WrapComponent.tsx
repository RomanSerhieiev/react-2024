import React, { FC, ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

const WrapComponent: FC<IProps> = ({children}) => {
    console.log('WrapComponent');

    return (
        <div>
            {children}
        </div>
    );
};

export default WrapComponent;