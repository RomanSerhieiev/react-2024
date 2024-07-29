import React, { FC, useState } from 'react';
import css from './BlockComponent.module.css'
import { IBlock } from '../../interfaces/block.interface';

interface IProps {
    block: IBlock
}

export const BlockComponent: FC<IProps> = ({block}) => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className={css.Container}>
            <h3>{block.name}</h3>
            <img src={block.image} alt={block.name} width={block.width} height={block.height} />
            <div className={css.Buttons}>
                <button disabled={count <= 0} onClick={() => setCount(count-1)}>-</button>
                <span>{count}</span>
                <button disabled={count >= 9} onClick={() => setCount(count+1)}>+</button>
            </div>
        </div>
    );
};