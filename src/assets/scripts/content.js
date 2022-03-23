import { profile, experience, education, skills, languages, hobbies } from '../data/cv-data.json';

const content = Vue.createApp({
    data() {
        return {
            profile,
            experience,
            education,
            skills,
            languages,
            hobbies,
            isProfileExpanded: true,
            isExperienceExpanded: true,
            isEducationExpanded: true,
            isSkillsExpanded: true,
            isLanguagesExpanded: true,
            isHobbiesExpanded: true
        }
    },
    methods: {
        toggleProfile() {
            this.isProfileExpanded = !this.isProfileExpanded
        },
        toggleExperience() {
            this.isExperienceExpanded = !this.isExperienceExpanded
        },
        toggleEducation() {
            this.isEducationExpanded = !this.isEducationExpanded
        },
        toggleSkills() {
            this.isSkillsExpanded = !this.isSkillsExpanded
        },
        toggleLanguages() {
            this.isLanguagesExpanded = !this.isLanguagesExpanded
        },
        toggleHobbies() {
            this.isHobbiesExpanded = !this.isHobbiesExpanded
        }
    }
});

content.mount('#content');