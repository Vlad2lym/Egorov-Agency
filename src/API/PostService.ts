import axios from "axios";

export default class PostService {
    static async postEmail (email:string) {
        const responce = await axios.post ('https://jsonplaceholder.typicode.com/users',{
            name: 'User',
            email
        }, {
            headers: {
                'Content-Type': 'application/json'
              }
        })
        return responce;
    }
}