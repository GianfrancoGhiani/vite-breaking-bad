import axios from "axios";
import { reactive } from "vue";

const characters = [];
const waitingList = axios.get('https://breakingbadapi.com/api/characters').then((answ)=>{
    console.log(answ)
}
    
    )
export const store = reactive({
   
})