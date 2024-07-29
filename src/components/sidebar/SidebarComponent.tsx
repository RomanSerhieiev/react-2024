import { FC, useState } from 'react';
import css from './SidebarComponent.module.css';
import BlockComponent from '../block/BlockComponent';
import { IBlock } from '../../interfaces/block.interface';
import { EClass } from '../../enums/class';
import { ERarity } from '../../enums/rarity.enum';
import { ELanguage } from '../../enums/language.enum';

interface IProps {
    blocks: IBlock[],
    language: ELanguage
}

const SidebarComponent: FC<IProps> = ({blocks, language}) => {
    const [selectedClass, setSelectedClass] = useState<EClass>(EClass.ANTIQUE);
    const [selectedRarity, setSelectedRarity] = useState<ERarity>(ERarity.NORMAL);

    const filteredBlocks = blocks
        .filter(block => block.class === selectedClass && block.rarity === selectedRarity)
        .sort((a, b) => a.space - b.space);

    return (
        <div className={css.Container}>
            <div className={css.Filters}>
                <div className={css.ClassFilters}>
                    <button onClick={() => setSelectedClass(EClass.ANTIQUE)} className={selectedClass === EClass.ANTIQUE ? css.Active : ''}>
                        {language === ELanguage.UA ? 'АНТИКВАРІАТ' : 'ANTIQUES'}
                    </button>
                    <button onClick={() => setSelectedClass(EClass.FOOD)} className={selectedClass === EClass.FOOD ? css.Active : ''}>
                        {language === ELanguage.UA ? 'ЇЖА' : 'FOODS'}
                    </button>
                    <button onClick={() => setSelectedClass(EClass.WEAPON)} className={selectedClass === EClass.WEAPON ? css.Active : ''}>
                        {language === ELanguage.UA ? 'ЗБРОЯ' : 'WEAPONS'}
                    </button>
                </div>
                <div className={css.RarityFilters}>
                    <button onClick={() => setSelectedRarity(ERarity.NORMAL)} className={selectedRarity === ERarity.NORMAL ? css.Active : ''}>
                        {language === ELanguage.UA ? 'ЗВИЧАЙНІ' : 'NORMAL'}
                    </button>
                    <button onClick={() => setSelectedRarity(ERarity.RARE)} className={selectedRarity === ERarity.RARE ? css.Active : ''}>
                        {language === ELanguage.UA ? 'РІДКІСНІ' : 'RARE'}
                    </button>
                </div>
            </div>
            <div className={css.Blocks}>
                {filteredBlocks.map(block => (
                    <BlockComponent key={block.id} block={block} language={language} />
                ))}
            </div>
        </div>
    );
};

export default SidebarComponent;