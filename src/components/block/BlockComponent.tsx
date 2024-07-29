import React, { FC, useState } from 'react';
import css from './BlockComponent.module.css';
import { IBlock } from '../../interfaces/block.interface';
import { ELanguage } from '../../enums/language.enum';

interface IProps {
    block: IBlock,
    language: ELanguage
}

const BlockComponent: FC<IProps> = ({block, language}) => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className={css.Container}>
            <p>{language === ELanguage.UA ? block.name_ua : block.name_en}</p>
            <img src={block.image} alt={language === ELanguage.UA ? block.name_ua : block.name_en} width={block.width} height={block.height} />
            <div className={css.Buttons}>
                <button disabled={count <= 0} onClick={() => setCount(count - 1)}>-</button>
                <span>{count}</span>
                <button disabled={count >= 9} onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    );
};

export default BlockComponent;