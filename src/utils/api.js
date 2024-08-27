/**
    * This file is intended to simplify fetching data from the API as well as help stick
    * to DRY coding princicples.
    * 
    * Fetching CRUD endpoints for particular records can be done by passing in the
    * literal ID of the record.
    *  
    *    Example: API.Products
    * 
    * Fetching endpoints with URL query params requires passing in the pre-formatted
    * URL param as the 'id'.
    * 
    *    Example API.DetailProduct('id')
*/

const fetchMessage = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/messages/');
    const data = await response.json();
    return data;
};