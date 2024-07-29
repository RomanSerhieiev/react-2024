import { FC, useState } from 'react';
import css from './SidebarComponent.module.css'
import { BlockComponent } from '../block/BlockComponent';
import { IBlock } from '../../interfaces/block.interface';
import { EClass } from '../../enums/class';
import { ERarity } from '../../enums/rarity.enum';

interface IProps {
    blocks: IBlock[];
}

export const SidebarComponent: FC<IProps> = ({ blocks }) => {
    const [selectedClass, setSelectedClass] = useState<EClass>(EClass.ANTIQUE);
    const [selectedRarity, setSelectedRarity] = useState<ERarity>(ERarity.NORMAL);

    const filteredBlocks = blocks
        .filter(block => block.class === selectedClass && block.rarity === selectedRarity)
        .sort((a, b) => a.space - b.space);

    return (
        <div className={css.Container}>
            <div className={css.Filters}>
                <div className={css.ClassFilters}>
                    <button onClick={() => setSelectedClass(EClass.ANTIQUE)} className={selectedClass === EClass.ANTIQUE ? css.Active : ''}>ANTIQUES</button>
                    <button onClick={() => setSelectedClass(EClass.FOOD)} className={selectedClass === EClass.FOOD ? css.Active : ''}>FOODS</button>
                    <button onClick={() => setSelectedClass(EClass.WEAPON)} className={selectedClass === EClass.WEAPON ? css.Active : ''}>WEAPONS</button>
                </div>
                <div className={css.RarityFilters}>
                    <button onClick={() => setSelectedRarity(ERarity.NORMAL)} className={selectedRarity === ERarity.NORMAL ? css.Active : ''}>NORMAL</button>
                    <button onClick={() => setSelectedRarity(ERarity.RARE)} className={selectedRarity === ERarity.RARE ? css.Active : ''}>RARE</button>
                </div>
            </div>
            <div className={css.Blocks}>
                {filteredBlocks.map(block => (
                    <BlockComponent key={block.id} block={block} />
                ))}
            </div>
        </div>
    );
};