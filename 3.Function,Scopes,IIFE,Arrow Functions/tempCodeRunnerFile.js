
const person2 = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],
  
    showSkills: function() {
      this.skills.forEach(function (skill) {
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  person2.showSkills();