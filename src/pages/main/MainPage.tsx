import React, { FC, useState } from 'react';
import css from './MainPage.module.css'
import { SidebarComponent } from '../../components/sidebar/SidebarComponent';
import { BoardComponent } from '../../components/board/BoardComponent';
import { Blocks } from '../../blocks/blocks';

const MainPage: FC = () => {
    const [blocks, setBlocks] = useState(Blocks);

    return (
        <div className={css.Container}>
            <SidebarComponent blocks={blocks} />
            <BoardComponent />
        </div>
    );
};

export default MainPage;