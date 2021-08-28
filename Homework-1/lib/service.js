import axios from 'axios'

async function getData(user_id){
    const {data: user} = await axios('https://jsonplaceholder.typicode.com/users/' + user_id);
    console.log(user);
}

export default getData;