import React, { FC, useEffect, useState } from 'react';
import { carService } from '../../services/car.service';
import CarsComponent from '../../components/cars/CarsComponent';
import { ICarRes } from '../../interfaces/car-res.interface';
import { useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../components/pagination/PaginationComponent';

const CarsPage: FC = () => {
    const [carsRes, setCarsRes] = useState<ICarRes>({
        items: [],
        next: null,
        prev: null,
        total_pages: 0,
        total_items: 0
    });

    const [query, setQuery] = useSearchParams({page: '1'})

    useEffect(() => {
        carService.getAll(query.get('page') || '1')
            .then(value => {
                if (value) {
                    setCarsRes({...value});
                }
            });
    }, [query]);

    const changePage = (page: string) => {
        switch (page) {
            case 'next':
                setQuery({...carsRes.next});
                break;
            case 'prev':
                setQuery({...carsRes.prev});
                break;
        }
    }

    return (
        <div>
            <CarsComponent cars={carsRes.items} />
            <PaginationComponent next={carsRes.next} prev={carsRes.prev} changePage={changePage} />
        </div>
    );
};

export default CarsPage;