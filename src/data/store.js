import { reactive } from "vue";

export const store = reactive({
    listFilms: [],
    listSeries: [],
    searchedTerm: "",
    isLoading: true,
    baseUri: "https://api.themoviedb.org/3",
    apiKey: "659f0fa0de7fa265afb9fb30aa69ee7e",
});