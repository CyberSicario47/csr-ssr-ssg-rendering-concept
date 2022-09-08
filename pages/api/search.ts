import Pokemon from "../../pokemon.json"
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default (req:NextApiRequest,res:NextApiResponse)=>{
    res.statusCode = 200,
    res.setHeader("Content-Type","application-json")
    res.end(JSON.stringify(
        {hello:'there'}
    ))

}
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
