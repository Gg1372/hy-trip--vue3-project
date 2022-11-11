import { defineStore } from "pinia";
import { getCityAll } from '@/service'

const useCityStore = defineStore('city', {
    state: () => ({
        allCities: {},
        currentCity: {
            cityName: '广州'
        },
    }),
    actions: {
        async fetchAllCitiesData() {
            const res = await getCityAll();
            console.log(res.data);
            this.allCities = res.data;
        }
    }
})

export default useCityStore;