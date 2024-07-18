import React, { FC } from 'react';
import withSomethingNew from '../hoc/withSomethingNew';

const OriginalComponent1: FC = () => {
    return (
        <div>
            <h1>Original component 1</h1>
        </div>
    );
};

export default withSomethingNew(OriginalComponent1);