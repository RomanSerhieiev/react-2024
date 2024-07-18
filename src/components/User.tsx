import React, { FC } from 'react';
import withFetch from '../hoc/withFetch';

interface IProps {
    items: {
        id: number;
        name: string;
    }[]
}

const User: FC<IProps> = (props) => {
    console.log(props);

    return (
        <div>
            <h1>Original component 1</h1>
        </div>
    );
};

export default withFetch(User, '/users');