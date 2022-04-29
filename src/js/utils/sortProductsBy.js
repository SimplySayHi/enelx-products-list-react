
import priceStringToNumber from './priceStringToNumber'

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

export default sortProductsBy