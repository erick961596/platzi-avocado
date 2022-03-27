import { IncomingMessage, ServerResponse } from "http";

import { NextApiRequest } from "next";
import { NextApiResponse } from "next";

import DB from "@database";
const getAVO = async(request:NextApiRequest, response:NextApiResponse) => {

    const db = new DB();


    const id = request.query.id;

    const idString = id.toString();


    const entry = await db.getById(idString);

    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'application/json');
    // response.end(JSON.stringify( { data:entry }));

    response.status(200).json({ data:entry });
}

export default getAVO;