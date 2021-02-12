// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  # ${data.title}

  ## Description
  ${data.desc}

  ## Languages
  * ${data.languages.join('\n * ')}

  ${generateUrl(data.link)}

  ${generateInstal(data.instal)}

  ${generateUsage(data.usage)}
`;
}

module.exports = generateMarkdown;
