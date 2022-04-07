
import { useEffect, useState } from 'react'

import Dropdown from './components/UI/Dropdown'
import FiltersList from './components/FiltersList'
import ProductsList from './components/ProductsList'
import Pagination from './components/Pagination'
import Compare from './components/Compare'

import sortDropdownOptions from '../data/sortDropdownOptions.json'

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [productsList, setProductsList] = useState([])
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchProductsList = async () => {
            const response = await fetch('/enelx-products-list-react/data/productsList.json')
            if( !response.ok ){ throw new Error('Something went wrong!') }
            const data = await response.json()

            setProductsList(data)
            setIsLoading(false)
        }

        fetchProductsList()
            .catch(error => {
                setIsLoading(false)
                setHttpError(error.message)
            });
    }, [])

    return (
        <main className="container mt-10 mb-26">
            <div className="flex">
                <div className="ml-auto">
                    <Dropdown
                        id="sort-products-dropdown"
                        name="sort-products-dropdown"
                        options={sortDropdownOptions}
                        label="Ordina per:"
                    />
                </div>
            </div>
            <div className="flex mt-5">
                <div className="w-[292px] hidden md:block shrink-0 pr-5 mr-7.5 border-r border-gray-opacity-2">
                    <FiltersList />
                </div>
                <div className="flex-1">
                    {isLoading && <div className="text-center">Caricamento in corso...</div>}
                    {httpError && <div className="text-center text-red-600 font-bold">{httpError}</div>}
                    {!isLoading && !httpError && 
                        <>
                            <ProductsList productsList={productsList} />
                            <Pagination />
                        </>
                    }
                </div>
            </div>
            <Compare />
        </main>
    );
}

export default App
