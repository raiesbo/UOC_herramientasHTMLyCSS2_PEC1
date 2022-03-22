import { experience, education, skills, hobbies } from '../data/cv-data.json';

const content = Vue.createApp({
    data() {
        return {
            experience,
            education,
            skills,
            hobbies,
            isExperienceExpanded: true,
            isEducationExpanded: true,
            isSkillsExpanded: true,
            isProfileExpanded: true
        }
    },
    methods: {
        toggleExperience() {
            this.isExperienceExpanded = !this.isExperienceExpanded
        },
        toggleEducation() {
            this.isEducationExpanded = !this.isEducationExpanded
        },
        toggleSkills() {
            this.isSkillsExpanded = !this.isSkillsExpanded
        },
        toggleHobbies() {
            this.isTechnologiesExpanded = !this.isTechnologiesExpanded
        }
    }
});

content.mount('#content');