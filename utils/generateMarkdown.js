// Function that returns a license badge based on which license is passed in
const renderLicenseBadge = license => {
  let licenseBadge = 'https://img.shields.io/badge/license-';
  // If there is no license, return an empty string
  if (license === 'None') {
    return '';
  } else if (license === 'MIT') {
    return licenseBadge + 'MITLicense-blue'
  } else if (license === 'GNU AGPLv3') {
    return licenseBadge + 'GNUAGPLv3-brightorange';
  } else if (license === 'GNU GPLv3') {
    return licenseBadge + 'GNUGPLv3-brightorange';
  } else if (license === 'GNU LGPLv3') {
    return licenseBadge + 'GNULGPLv3-brightorange';
  } else if (license === 'Apache 2.0') {
    return licenseBadge + 'ApacheLicense2.0-brightgreen';
  } else if (license === 'Mozilla 2.0') {
    return licenseBadge + 'MozillaPublicLicense2.0-yellow'
  } else if (license === 'Boost Software') {
    licenseOption = 'BoostSoftwareLicense1.0';
    return licenseBadge +'BoostSoftwareLicense1.0-blueviolet';
  } else if (license ===  'Unlicense') {
    return licenseBadge +'TheUnlicense-yellowgreen';
  }
};

//Function that returns the license link
const renderLicenseLink = license => {
  let licenseLink = 'https://choosealicense.com/licenses/';
  // If there is no license, return an empty string
  if (license === 'None') {
    return licenseLink = '';
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
    if (license === 'None'){
      return ``;
    }

    return `
  ## License
  This application has the ${license} license.
  For more information about this license, checkout ${renderLicenseLink(license)}
    `;
};

// Generate markdown for README
const generateMarkdown = data => {
  // get license to pass through as parameters for other functions 
  const license = `${data.license}`;
  return `# ${data.title}

  ## Description 
  ${data.description}

  ![badge](${renderLicenseBadge(license)})

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

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
