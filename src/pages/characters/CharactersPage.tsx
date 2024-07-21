import React, { FC, useEffect, useState } from 'react';
import CharactersComponent from '../../components/characters/CharactersComponent';
import PaginationComponent from '../../components/pagination/PaginationComponent';
import { ICharacter } from '../../interfaces/character.interface';
import { useSearchParams } from 'react-router-dom';
import { characterService } from '../../services/character.service';
import { IResponse } from '../../interfaces/response.interface';

const CharactersPage: FC = () => {
    const [res, setRes] = useState<IResponse<ICharacter[]>>({
        info: {
            count: 0,
            pages: 0,
            next: null,
            prev: null
        },
        results: []
    });
    const [query, setQuery] = useSearchParams({page: '1'})

    useEffect(() => {
        characterService.getAll(`${query.get('page') || '1'}`)
            .then(value => {
                setRes(value.data)
            })
    }, [query]);

    return (
        <div>
            <CharactersComponent characters={res.results} />
            <PaginationComponent prev={res.info.prev} next={res.info.next}/>
        </div>
    );
};

export default CharactersPage;