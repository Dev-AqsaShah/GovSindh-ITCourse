// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["JavaScript", "typeScript", "Python"],
    frameworks: ["React","Angular","Vue"],
    tools: ["Git","Webpack","docker"],
}
    // Getting specific skills from the list
    
    let { languages, frameworks, tools } = developerSkills; 

    // showing a skill from each category
    console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
