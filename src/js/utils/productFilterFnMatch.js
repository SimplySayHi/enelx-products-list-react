
export default ( name, value, product ) => {
    const fnObjByValue = {
        available: () => {
            return product.isAvailable
        },
        promo: () => {
            return product.discountLabel && product.discountLabel.length > 0
        },
    }

    switch( name ){
        case 'chooseFor':
            return fnObjByValue[value]()
        case 'reviews':
            return product.stars === value
        default:
            return product[name] === value 
    }
}
