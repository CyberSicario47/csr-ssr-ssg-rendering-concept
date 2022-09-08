import Pokemon from "../../pokemon.json"
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default (req:NextApiRequest,res:NextApiResponse<Data>)=>{
    res.statusCode = 200,
    res.setHeader("Content-Type","application-json")
    res.end(JSON.stringify(
        {hello:'there'}
    ))

}
