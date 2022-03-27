import { IncomingMessage, ServerResponse } from "http";

import queryString from "query-string"
import DB from "@database";
const getCompareTwoProducts = async(request, response) => {

    // const queryParams = queryString.parse(window.location.search)

    const quantity = request.query.quantity;

    const db = new DB();
    const AllEntries = await db.getCompareProducts(quantity?quantity:2); 
    const cantidad = AllEntries.length;

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    response.end(JSON.stringify( {length:cantidad, data:AllEntries }));
}

export default getCompareTwoProducts;