
import { useEffect, useState } from 'react'

import Dropdown from '@components/UI/Dropdown'
import FiltersList from '@components/FiltersList'
import ProductsList from '@components/ProductsList'
import Pagination from '@components/Pagination'
import Compare from '@components/Compare'

import productFilterFnMatch from './utils/productFilterFnMatch'

import sortDropdownOptions from '@data/sortDropdownOptions.json'
import filters from '@data/filters.json'

const priceStringToNumber = priceString => {
    return priceString.split(' ')[0].replace('.', '').replace(',', '.') * 1
}

const sortProductsBy = ( sortValue, a, b ) => {
    const priceA = priceStringToNumber(a.price)
    const priceB = priceStringToNumber(b.price)
    
    switch(sortValue){
        case 'reviewsBest':
            return a.stars < b.stars
        case 'priceLow':
            return priceA > priceB
        case 'priceHigh':
            return priceA < priceB
        default: 
            return 0
    }
}

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [productsList, setProductsList] = useState([])
    const [productsListFiltered, setProductsListFiltered] = useState([])
    const [activeFilters, setActiveFilters] = useState([])
    const [sortValue, setSortValue] = useState(sortDropdownOptions[0].value)
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchProductsList = async () => {
            const response = await fetch('/enelx-products-list-react/data/productsList.json')
            if( !response.ok ){ throw new Error('Something went wrong!') }
            const data = await response.json()

            data.sort(sortProductsBy.bind(null, sortValue))

            setProductsList(data)
            setProductsListFiltered(data)
            setIsLoading(false)
        }

        fetchProductsList()
            .catch(error => {
                setIsLoading(false)
                setHttpError(error.message)
            });
    }, [])

    useEffect(() => {
        setProductsListFiltered(() => {
            return productsList
                .filter(product => {
                    if( activeFilters.length === 0 ){ return productsList }
                    
                    const filtersMapped = activeFilters
                            .map(filter => ({...filter, values: [filter.value]}))
                            .reduce((list, filter) => {
                                const filterInList = list.find(obj => obj.name === filter.name)
                                if( filterInList ){
                                    filterInList.values = [...new Set(filterInList.values.concat(filter.values))]
                                    return list
                                }
                                list.push(filter)
                                return list
                            }, [])

                    const hasMatchInEveryFilterCategory = filtersMapped.every(filter => {
                        const filterName = filter.name
                        return filter.values.some(value => productFilterFnMatch(filterName, value, product))
                    })

                    return hasMatchInEveryFilterCategory
                })
                .sort(sortProductsBy.bind(null, sortValue))
        })
    }, [activeFilters, sortValue])

    const filterChangeHandler = ({name, value}, isSelected) => {
        const filterName = name.split('_')[1]
        setActiveFilters(list => {
            if( isSelected ){
                const listNew = [...list]
                listNew.push({name: filterName, value})
                return listNew
            }
            return list.filter(item => (item.name !== filterName || item.value !== value))
        })
    }

    const sortChangeHandler = (event) => {
        setSortValue(event.target.value)
    }

    return (
        <main className="container mt-10 mb-26">
            <div className="flex">
                <div className="ml-auto">
                    <Dropdown
                        id="sort-products-dropdown"
                        name="sort-products-dropdown"
                        options={sortDropdownOptions}
                        label="Ordina per:"
                        onChange={sortChangeHandler}
                    />
                </div>
            </div>
            <div className="flex mt-5">
                <div className="w-[292px] hidden md:block shrink-0 pr-5 mr-7.5 border-r border-gray-opacity-2">
                    <FiltersList
                        filters={filters}
                        productsList={productsList}
                        onFilterChange={filterChangeHandler} 
                    />
                </div>
                <div className="flex-1">
                    {isLoading && <div className="text-center">Caricamento in corso...</div>}
                    {httpError && <div className="text-center text-red-600 font-bold">{httpError}</div>}
                    {!isLoading && !httpError && 
                        <>
                            <ProductsList productsList={productsListFiltered} />
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
