const url = "https://cart-api.teamrabbil.com/api/"

export  default async  function productFetch(){
    const  res = await fetch(url+"product-list");
    const data = await res.json();

    return data.data;
}