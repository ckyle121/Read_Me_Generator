// Function that returns a license badge based on which license is passed in
const renderLicenseBadge = license => {
  let licenseOption = '';
  let licenseBadge = 'https://img.shields.io/badge/license-' + licenseOption + '-blue';
  // If there is no license, return an empty string
  if (!license) {
    return '';
  } else if (license === 'MIT') {
    licenseOption = 'MITLicense';
    return licenseBadge;
  } else if (license === 'GNU AGPLv3') {
    licenseOption = 'GNUAGPLv3';
    return licenseBadge;
  } else if (license === 'GNU GPLv3') {
    licenseOption = 'GNUGPLv3';
    return licenseBadge;
  } else if (license === 'GNU LGPLv3') {
    licenseOption = 'GNULGPLv3';
    return licenseBadge;
  } else if (license === 'Apache 2.0') {
    licenseOption = 'ApacheLicense2.0';
    return licenseBadge;
  } else if (license === 'Mozilla 2.0') {
    licenseOption = 'MozillaPublicLicense2.0';
    return licenseBadge;
  } else if (license === 'Boost Software') {
    licenseOption = 'BoostSoftwareLicense1.0';
    return licenseBadge;
  } else if (license ===  'Unlicense') {
    licenseOption = 'TheUnlicense';
    return licenseBadge;
  }
}

//Function that returns the license link
const renderLicenseLink = license => {
  let licenseLink = 'https://choosealicense.com/licenses/';
  // If there is no license, return an empty string
  if (!license) {
    return '';
  } else if (license === 'MIT') {
    return licenseLink = licenseLink + 'mit/';
  } else if (license === 'GNU AGPLv3') {
    return licenseLink = licenseLink + 'agpl-3.0/';
  } else if (license === 'GNU GPLv3') {
    return licenseLink = licenseLink + 'gpl-3.0/';
  } else if (license === 'GNU LGPLv3') {
    return licenseLink = licenseLink + 'lgpl-3.0/';
  } else if (license === 'Apache 2.0') {
    return licenseLink = licenseLink + 'apache-2.0/';
  } else if (license === 'Mozilla 2.0') {
    return licenseLink = licenseLink + 'mpl-2.0/';
  } else if (license === 'Boost Software') {
    return licenseLink = licenseLink + 'bsl-1.0/';
  } else if (license ===  'Unlicense') {
    return licenseLink = licenseLink + 'unlicense/';
  }
};

// Function that returns the license section of README
const renderLicenseSection = license => {
    // If there is no license, return an empty string
    if (!license){
      return '';
    }

    return `
      ## License
      This application has the ${data.license}
      For more information about this license, checkout ${renderLicenseLink(license)}
    `;
};

// Generate markdown for README
const generateMarkdown = data => {
  const license = `${data.license}`;
  return `# ${data.title}

  ## Description 
  ${data.description}

  ${renderLicenseBadge(license)}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [License](#License)

  ## Installation 
  ${data.install}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.test}

  ## Contributing 
  ${data.contributors}

  ## Questions
  If you have any questions about this project, please email me: ${data.email}
  Other projects can be found on my GitHub: ${data.github}

  ${renderLicenseSection(license)}
`;
};

module.exports = generateMarkdown;
