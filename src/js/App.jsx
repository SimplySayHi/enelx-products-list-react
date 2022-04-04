
import Dropdown from './components/UI/Dropdown'
import FiltersList from './components/FiltersList'
import ProductsList from './components/ProductsList'
import Pagination from './components/Pagination'
import Compare from './components/Compare'

import productsList from '../data/productsList.json'

const sortDropdownOptions = [
    { id: '1', value: 'reviewsBest', label: 'migliori recensioni' },
    { id: '2', value: 'priceLow', label: 'prezzo più basso' },
    { id: '3', value: 'priceHigh', label: 'prezzo più alto' },
]

function App() {
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
                    <ProductsList productsList={productsList} />
                    <Pagination />
                </div>
            </div>
            <Compare />
        </main>
    );
}

export default App
