import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHomeHouseList } from '@/service'

const uesHomeStore = defineStore('home', {
    state: () => ({
        hotSuggests: [],
        categories: [],
        houselist: [],
        currentPage: 1,
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests();
            this.hotSuggests = res.data;
        },
        async fetchCategoriesData() {
            const res = await getHomeCategories();
            this.categories = res.data;
        },
        async fetchHouselistData() {
            const res = await getHomeHouseList(this.currentPage);
            this.houselist.push(...res.data);
            this.currentPage++;
        }
    }
})

export default uesHomeStore;