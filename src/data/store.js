import { reactive } from "vue";

export const store = reactive({
    listFilms: [],
    listSeries: [],
    baseUri: "",
    apiKey: "",
});