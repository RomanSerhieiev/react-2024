import React, { FC } from 'react';
import withSomethingNew from '../hoc/withSomethingNew';

const OriginalComponent2: FC = () => {
    return (
        <div>
            <h1>Original component 2</h1>
        </div>
    );
};

export default withSomethingNew(OriginalComponent2);