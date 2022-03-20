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
            isTechnologiesExpanded: true,
            isTechnologiesExpanded: true
        }
    },
    methods: {
        toggleExperience() {
            this.isExperienceExpanded = !this.isExperienceExpanded
        },
        toggleEducation() {
            this.isEducationExpanded = !this.isEducationExpanded
        },
        toggleTechnologies() {
            this.isTechnologiesExpanded = !this.isTechnologiesExpanded
        },
        toggleHobbies() {
            this.isTechnologiesExpanded = !this.isTechnologiesExpanded
        }
    }
});

content.mount('#content');