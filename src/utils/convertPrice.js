export default function convertPrice(currentPrice){
    const priceString = currentPrice.product.price;
    const priceWithoutcoma = priceString.replace(/,/g,"");
    const price = parseInt(priceWithoutcoma);
    return price;
}