// responsible for calendar-related operations
import axios from "axios";

export default function postOpen(day) {
    return axios.post(`http://localhost:5001/open/chocolate`,{day})
        .then((response)=> response.catch((err)=>console.log('error',err)));
};