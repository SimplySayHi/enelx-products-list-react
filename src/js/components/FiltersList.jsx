
import FilterBlock from './FilterBlock'

import filters from '@data/filters.json'

function FiltersList () {
    return (
        <form>
            <FilterBlock title="CATEGORIE">
                <ul>
                    <li className="mt-2.5">
                        <a href="#" className="text-base text-complementary">Riscaldamento</a>
                        <ul className="ml-5">
                            <li className="mt-2.5">
                                <a href="#">Casa e acqua</a>
                            </li>
                            <li className="mt-2.5">
                                <a href="#">Casa</a>
                            </li>
                            <li className="mt-2.5">
                                <a href="#">Acqua</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr className="border-0 border-b border-gray-opacity-2 mt-7.5" />
            </FilterBlock>
            {filters.map(filter => <FilterBlock key={filter.id} {...filter} />)}
        </form>
    )
}

export default FiltersList
