import { reactive } from "vue";

export const store = reactive({
    url: 'https://breakingbadapi.com/api/characters',
    characterList: [],
    length: null,
    selection: '',
})