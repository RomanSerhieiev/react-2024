import React, { FC, memo } from 'react';

const Menu: FC = memo(() => {
        console.log('menu');

        return (
            <div>
                <ul>
                    <li>users</li>
                    <li>posts</li>
                    <li>comments</li>
                </ul>
            </div>
        );
    }
);

export default Menu;