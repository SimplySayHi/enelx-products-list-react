
import PropTypes from 'prop-types'

import Checkbox from './UI/Checkbox'
function ProductItem ({ id, brand, title, price, originalPrice, extra, stars, discountLabel, image, isFavorite, toggleFavorite, isSelected, toggleCompare }) {
    const toggleCompareHandler = () => {
        toggleCompare(id)
    }

    const toggleFavoriteHandler = () => {
        toggleFavorite(id)
    }

    let starsToBooleansArray = Array(5).fill(false)
    starsToBooleansArray = starsToBooleansArray.fill(true, 0, stars)

    const discountLabelHTML = discountLabel && <div className="absolute top-3.75 left-0 bg-secondary text-white rounded-tr-sm-plus rounded-br-sm-plus px-2.5 py-1.25 text-sm font-bold">{discountLabel}</div>

    const originalPriceHTML = originalPrice && <del className="ml-2.5 text-sm font-bold opacity-30 text-black">{originalPrice}</del>

    const favoriteIconHTML = isFavorite ? 
                        <i className="icon-preferiti_filled text-tertiary text-lg align-middle"></i>
                        : 
                        <i className="icon-preferiti text-gray-opacity-3 text-lg align-middle"></i>

    return (
        <div>
            <div className="relative rounded-sm-plus bg-gray-opacity-1">
                {discountLabelHTML}
                <img src={image} className="block w-full h-auto max-w-none" />
                <button className="absolute top-3.75 right-3.75" type="button" onClick={toggleFavoriteHandler}>
                    {favoriteIconHTML}
                </button>
            </div>
            <h4 className="mt-2.5 text-sm font-bold uppercase tracking-wider">{brand}</h4>
            <p className="text-base">{title}</p>
            <div className={originalPrice ? 'text-secondary' : 'text-primary'}>
                <div className="flex items-baseline my-0.5">
                    <span className="text-lg font-bold">{price}</span>
                    {originalPriceHTML}
                </div>
                <p className="text-sm font-bold">{extra}</p>
            </div>
            <div className="flex items-center justify-between mt-2.5 pt-2 pb-1 border-t border-gray-opacity-2">
                <div className="flex text-sm text-primary">
                    {starsToBooleansArray.map((isTrue, idx) => <i key={idx} className={`mr-1 ${isTrue ? 'icon-rating-on' : 'icon-rating-off'}`}></i>)}
                </div>
                <div>
                    <Checkbox 
                        id={`checkbox-${id}`} 
                        name="compare-product-chec"
                        label="CONFRONTA"
                        checked={isSelected}
                        hasReverseLayout={true}
                        hasBoldLabel={true}
                        onChange={toggleCompareHandler}
                    />
                </div>
            </div>
        </div>
    )
}

ProductItem.propTypes = {
    id: PropTypes.string,
    brand: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    originalPrice: PropTypes.string,
    extra: PropTypes.string,
    stars: PropTypes.number,
    discountLabel: PropTypes.string,
    image: PropTypes.string,
    isFavorite: PropTypes.bool,
    toggleFavorite: PropTypes.func,
    isSelected: PropTypes.bool,
    toggleCompare: PropTypes.func
}

export default ProductItem
