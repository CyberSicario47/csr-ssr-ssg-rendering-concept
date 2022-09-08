import { useRouter } from "next/router";
import axios from 'axios'
import { useQuery } from 'react-query';

const getPokemon =async (key:number,name:string) => {
    const { data } = await axios.get(`api/pokemon?name=${escape(name)}`);
    return data;
};
// export default () => {
//     const router = useRouter();
//     const { data } = useQuery(["name",router.query.name],getPokemon);
//     return (<div>{data && <div>{data.id}</div>}</div>)
// }