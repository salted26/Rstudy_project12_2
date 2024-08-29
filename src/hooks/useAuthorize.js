import api from "../utils/api";
import {useQuery} from "@tanstack/react-query";

const fetchAuthenticate = () => {
    return api.get('/authentication')
}

const UseAuthorize = () => {
    return useQuery({
        queryKey : ['api-auth'],
        queryFn : fetchAuthenticate,
        select: (data) =>{
            return data.data
        },
    })
    console.log("here")
};

export default UseAuthorize;