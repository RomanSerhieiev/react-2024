import React, { FC } from 'react';

const Form: FC = () => {
    return (
        <div>
            <form>
                <input type="text" name={'username'} placeholder={'Name'} />
                <input type="text" name={'password'} placeholder={'Password'} />
            </form>
        </div>
    );
};

export default Form;