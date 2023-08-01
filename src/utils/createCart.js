export default async function createCart(productID) {
    const res = await fetch(`https://cart-api.teamrabbil.com/api/create-cart/${productID}`, {
        method: "GET",
        headers: {
            "token": localStorage.getItem('token'),
        }
        });
    const data = await res.json();
    return data;
}