import React, { FC, useState } from 'react';
import css from './MainPage.module.css';
import SidebarComponent from '../../components/sidebar/SidebarComponent';
import { Blocks } from '../../blocks/blocks';
import LanguageComponent from '../../components/language/LanguageComponent';
import { IBlock } from '../../interfaces/block.interface';
import { ELanguage } from '../../enums/language.enum';

const MainPage: FC = () => {
    const [blocks, setBlocks] = useState<IBlock[]>(Blocks);
    const [language, setLanguage] = useState<ELanguage>(ELanguage.UA);

    return (
        <div className={css.Container}>
            <SidebarComponent blocks={blocks} language={language} />
            <div>
                <h1>{language === ELanguage.UA ? 'Торгова Експедиція' : 'Trading Expedition'}</h1>
                <LanguageComponent setLanguage={setLanguage} language={language} />
            </div>
        </div>
    );
};

export default MainPage;