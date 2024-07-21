import React, { FC } from 'react';
import { ICharacter } from '../../interfaces/character.interface';

interface IProps {
    character: ICharacter
}

const CharacterComponent: FC<IProps> = ({character}) => {
    return (
        <div>
            {character.name}
        </div>
    );
};

export default CharacterComponent;