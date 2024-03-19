// A list showing a programmer's skills in detail
var developerSkills = {
    languages: ["JavaScript", "typeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "docker"],
};
// Getting specific skills from the list
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
// showing a skill from each category
console.log("Language: ".concat(languages[0], ", Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[0]));
