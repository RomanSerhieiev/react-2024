import React, { FC, useState } from 'react';
import './BoardComponent.css'
import { IBlock } from '../../interfaces/block.interface';

export const BoardComponent: FC = () => {
    const [selectedBlocks, setSelectedBlocks] = useState<IBlock[]>([]);

    return (
        <div className="board">
            {/*{selectedBlocks.map(block => (*/}
            {/*    <div key={block.name}>*/}
            {/*        <img src={block.image} alt={block.name} />*/}
            {/*        <div>{block.name}</div>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
};