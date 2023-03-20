export const getProducts = async () =>{
    const url = "https://api.escuelajs.co/api/v1/products?offset=0&limit=1"
    const res = await fetch(url);
    const data = await res.json()
    return data
}