import { experience, education, technologies, hobbies } from '../data/cv-data.json';

const content = Vue.createApp({
    data() {
        return {
            experience,
            education,
            technologies,
            hobbies,
            isExperienceExpanded: true,
            isEducationExpanded: true,
            isTechnologiesExpanded: true
        }
    },
    methods: {
        toggleExperience() {
            this.isExperienceExpanded = !this.isExperienceExpanded
            console.log(this.isExperienceExpanded)
        }
    }
});

content.mount('#content');