import { user } from '../data/cv-data.json';

const header = Vue.createApp({
    data() {
        return {
            ...user
        }
    }
})

header.mount('#header')