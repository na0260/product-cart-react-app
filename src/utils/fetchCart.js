const url = "https://cart-api.teamrabbil.com/api/"

export  default async  function fetchCart(){
    const  res = await fetch(url+"cart-list",{
        method: "GET",
        headers: {
            "token": localStorage.getItem('token'),
        }
    });
    const data = await res.json();

    return data;
}