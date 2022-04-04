
import PropTypes from 'prop-types'
import { useCallback, useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { compareListAtom } from '@/store/atoms'

import ProductItem from './ProductItem'

const LS_NAME = 'favoriteProducts'
function ProductsList ({ productsList }) {
    const [favorites, setFavorites] = useState(() => {
        const favoritesFromLS = JSON.parse(localStorage.getItem(LS_NAME));
        return favoritesFromLS || []
    })
    const [compareList, setCompareList] = useAtom(compareListAtom)

    const onToggleFavorite = useCallback((id) => {
        setFavorites(list => {
            if( list.includes(id) ){
                return [...list].filter(prodId => prodId !== id)
            }
            return [...list, id]
        })
    }, [])

    const onToggleCompare = useCallback((id) => {
        setCompareList(list => {
            if( list.includes(id) ){
                return [...list].filter(prodId => prodId !== id)
            }
            return [...list, id]
        })
    }, [setCompareList])

    useEffect(() => {
        localStorage.setItem(LS_NAME, JSON.stringify(favorites))
    }, [favorites])

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7.5">
            {
                productsList.map(product => {
                    const isFavorite = favorites.includes(product.id);
                    const isSelected = compareList.includes(product.id);
                    return <ProductItem
                                key={product.id}
                                {...product}
                                isFavorite={isFavorite}
                                toggleFavorite={onToggleFavorite}
                                isSelected={isSelected}
                                toggleCompare={onToggleCompare} 
                            />
                })
            }
        </div>
    )
}


ProductsList.propTypes = {
    productsList: PropTypes.arrayOf( ProductItem )
}

export default ProductsList
