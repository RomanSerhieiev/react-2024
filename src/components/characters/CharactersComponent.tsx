import React, { FC } from 'react';
import CharacterComponent from '../character/CharacterComponent';
import { ICharacter } from '../../interfaces/character.interface';

interface IProps {
    characters: ICharacter[]
}

const CharactersComponent: FC<IProps> = ({characters}) => {
    return (
        <div>
            {characters.map(character => <CharacterComponent key={character.id} character={character} />)}
        </div>
    );
};

export default CharactersComponent;