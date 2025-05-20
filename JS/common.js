// ✅ Extract query parameters from the URL
function getQueryParams() {
    const queryParams = new URLSearchParams(window.location.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());
    return queryParamsObject;
}

// ✅ Hide the loader if it exists
function removeLoader() {
    const loaderBackdrop = document.getElementById("loader-backdrop");
    if (loaderBackdrop) {
        loaderBackdrop.style.display = 'none';
    }
}

// ✅ Fetch a product by its ID with error handling
async function fetchProductById(id) {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        return null;
    }
}

// ✅ Fetch a cart by its ID with error handling
async function fetchCartById(id) {
    try {
        const response = await axios.get(`https://fakestoreapi.com/carts/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching cart with id ${id}:`, error);
        return null;
    }
}
