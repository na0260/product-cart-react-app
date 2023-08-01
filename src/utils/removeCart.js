export default async function removeCart(productId) {
    const res = await fetch(`https://cart-api.teamrabbil.com/api/remove-cart/${productId}`, {
        method: "GET",
        headers: {
            "token": localStorage.getItem('token'),
        }
    });
    const data = await res.json();
    return data;
}