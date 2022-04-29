
const priceStringToNumber = priceString => {
    return priceString.split(' ')[0].replace('.', '').replace(',', '.') * 1
}

export default priceStringToNumber
