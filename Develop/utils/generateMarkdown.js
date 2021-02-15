//let toc =["* [Description](#description)", "* [Languages](#languages)", "* [License](#license)"]


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let mitLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  let gnuLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

  if(license[0] === 'mit'){
     return mitLicense
    
  }
  else {
    return gnuLicense
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let mitLicense = 'https://choosealicense.com/licenses/mit/';
  let gnuLicense = 'https://choosealicense.com/licenses/gpl-3.0/';
  if(license[0] === 'mit'){
    return mitLicense
  }
  else{
    return gnuLicense
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license[0] !== 'None'){
    badge = renderLicenseBadge(license)
    link = renderLicenseLink(license)

    return`
  ## License
  ${badge}
  Link: ${link}
    `
  }
  else{
    return ""
  }
}

const generateUrl = link => {
  if(!link){
    return '';
  }
   return `
  ## Page URL
  ${link} 
   `;
};

const generateInstal = instructions => {
  if(!instructions){
    return '';
  }
   return `
  ## Installation Instructions
  ${instructions} 
   `;
};

const generateUsage = use => {
  if(!use){
    return '';
  }
   return `
  ## Usage Examples/ Other Instructions
  ${use} 
   `;
};

const generateQuestions = (git,email) => {
  if(!git && !email){
    return '';
  }
   return `
  ## Questions?
  github.com/${git}
  ${email} 
   `;
};

const generateContribute = (contri) => {
  if(!contri){
    return '';
  }
   return `
  ## Contributing
  ${contri}
   `;
};

const generateTest = (test) => {
  if(!test){
    return '';
  }
   return `
  ## Test Instructions
  ${test}
   `;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Languages](#languages)
  * [License](#license)
  * [Page URL](#pageurl)
  * [Installation](#installationinstructions)
  * [Usage](#usageexamples/otherinstructions)
  * [Contributing](#contributing)
  * [Testing](#testinstructions)
  * [Questions](#questions?)

  ## Description
  ${data.desc}

  ## Languages
  * ${data.languages.join('\n * ')}

  ${renderLicenseSection(data.license)}

  ${generateUrl(data.link)}

  ${generateInstal(data.instal)}

  ${generateUsage(data.usage)}

  ${generateContribute(data.contri)}

  ${generateTest(data.test)}

  ${generateQuestions(data.git, data.email)}

  `;
}

module.exports = generateMarkdown;
