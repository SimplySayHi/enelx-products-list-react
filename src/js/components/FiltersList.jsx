
import FilterBlock from './FilterBlock'

const filtersChooseFor = [
    { id: '1c', name: 'filterChooseFor', value: 'available', isChecked: true, label: 'Disponibili (24)' },
    { id: '2c', name: 'filterChooseFor', value: 'promo', isChecked: true, label: 'In promozione (13)' }
];

const filtersBrand = [
    { id: '1b', name: 'filterBrand', value: 'ariston-1', isChecked: true, label: 'Ariston (4)' },
    { id: '2b', name: 'filterBrand', value: 'baxi', isChecked: true, label: 'Baxi (8)' },
    { id: '3b', name: 'filterBrand', value: 'ariston-2', isChecked: true, label: 'Ariston (12)' }
];

const filtersType = [
    { id: '1t', name: 'filterType', value: '1', label: 'A Condensazione (3)' },
    { id: '2t', name: 'filterType', value: '2', label: 'Camera Aperta (7)' },
    { id: '3t', name: 'filterType', value: '3', label: 'Camera Stagna (4)' }
];

const filtersSupply = [
    { id: '1su', name: 'filterSupply', value: '1', label: 'Elettrica (11)' },
    { id: '2su', name: 'filterSupply', value: '2', label: 'Metano (1)' }
];

const filtersPower = [
    { id: '1p', name: 'filterPower', value: '1', label: '19.5 (1)' },
    { id: '2p', name: 'filterPower', value: '2', label: '24 (5)' },
    { id: '3p', name: 'filterPower', value: '3', label: '25 (2)' },
    { id: '4p', name: 'filterPower', value: '4', label: 'da 30 a 34 (2)' }
];

const filtersUsage = [
    { id: '1u', name: 'filterUsage', value: '1', label: 'Esterno (4)' },
    { id: '2u', name: 'filterUsage', value: '2', label: 'Interno (3)' },
    { id: '3u', name: 'filterUsage', value: '3', label: 'Interno / Iterno (2)' }
];

const filtersReviews = [
    { id: '5s', name: 'filterReviews', value: '5', label: '<i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-on"></i> (3)' },
    { id: '4s', name: 'filterReviews', value: '4', label: '<i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-off"></i> (14)', isChecked: true },
    { id: '3s', name: 'filterReviews', value: '3', label: '<i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-off"></i><i class="mr-1.5 text-sm icon-rating-off"></i> (5)' },
    { id: '2s', name: 'filterReviews', value: '2', label: '<i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-off"></i><i class="mr-1.5 text-sm icon-rating-off"></i><i class="mr-1.5 text-sm icon-rating-off"></i> (1)' },
    { id: '1s', name: 'filterReviews', value: '1', label: '<i class="mr-1.5 text-sm icon-rating-on"></i><i class="mr-1.5 text-sm icon-rating-off"></i><i class="mr-1.5 text-sm icon-rating-off"></i><i class="mr-1.5 text-sm icon-rating-off"></i><i class="mr-1.5 text-sm icon-rating-off"></i> (1)' }
];

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
            <FilterBlock title="SCEGLI PER" filters={filtersChooseFor} />
            <FilterBlock title="MARCHE" filters={filtersBrand} />
            <FilterBlock title="TIPOLOGIA" filters={filtersType} />
            <FilterBlock title="ALIMENTAZIONE" filters={filtersSupply} />
            <FilterBlock title="POTENZA NOMINALE (kW)" filters={filtersPower} />
            <FilterBlock title="UTILIZZO" filters={filtersUsage} />
            <FilterBlock title="RECENSIONI" filters={filtersReviews} defaultColor="text-primary" />
        </form>
    )
}

export default FiltersList
