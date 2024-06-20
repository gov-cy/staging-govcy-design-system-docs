module.exports = {
  buildTime: new Date(),
  isMultiLanguage : false,
  url : "https://gov-cy.github.io/govcy-design-system-docs/",
  showTOC: true,
  showDraft: false,
  showVersion: true,
  version:"3.0.0", 
  cssCDN: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/gov-cy/govcy-design-system-test@v3.0.5/dist/css/govcy.uds.min.css" integrity="sha384-9L9rQVsl1hQXSc6nu+ORphMhPYnMhn4DDuJA6XWNrODtbkmVfUDHghx2xFam6dKi" crossorigin="anonymous">`,
  cssDownload: "https://raw.githubusercontent.com/gov-cy/govcy-design-system-test/v3.0.5/dist/js/govcy.uds.min.js",
  jsCDN: `<script src="https://cdn.jsdelivr.net/gh/gov-cy/govcy-design-system-test@v3.0.5/dist/js/govcy.uds.min.js" integrity="sha384-IsK02Rs1ZowVhbuTdaa9/QnMNgmtlmevhhyEQqANE3Uw7tQl+LOdmOLjP3aGcoTN" crossorigin="anonymous"></script>`,
  jsDownload: "https://raw.githubusercontent.com/gov-cy/govcy-design-system-test/v3.0.5/dist/js/govcy.uds.min.js",
  distDownload: "https://github.com/gov-cy/govcy-design-system-test/releases/download/v3.0.5/dist.zip",
  github : {
    homeUrl: 'https://github.com/gov-cy/govcy-design-system',
    currentVersion: 'https://github.com/gov-cy/govcy-design-system/tree/v2.1.1',
    updateDate: `2/5/2024`
  },
  exalidraw: {
    addUrl: `https://excalidraw.com/?addLibrary=https%3A%2F%2Fexcalidraw-libraries-git-cevangelougovcy-gov-e2dec6-excalidraw.vercel.app%2Flibraries%2Fcevangelougovcy%2Fgov-cy-uds-library.excalidrawlib`,
    downloadUrl: `https://excalidraw-libraries-git-cevangelougovcy-gov-e2dec6-excalidraw.vercel.app/libraries/cevangelougovcy/gov-cy-uds-library.excalidrawlib`,
    homeUrl: `https://excalidraw-libraries-git-cevangelougovcy-gov-e2dec6-excalidraw.vercel.app/?theme=light&sort=default#cevangelougovcy-gov-cy-uds-library`,
    updateDate: `28/5/2024`
  },
  testLibrary : {
    homeUrl: 'https://www.npmjs.com/package/@gov-cy/govcy-frontend-tester',
    updateDate: `2/5/2024`
  },
  emailLibrary : {
    homeUrl: 'https://www.npmjs.com/package/@gov-cy/dsf-email-templates',
    updateDate: `14/5/2024`
  },
  figmaLibrary : {
    homeUrl: 'https://www.figma.com/@dsf_cy',
    downloadUrl: 'https://www.figma.com/community/file/1188065288540425761/dsf-gov-cy-design-system',
    updateDate: `14/5/2024`
  },
  previousVersions: [
    {label: 'Ver. 2x', url: 'https://gov-cy.github.io/govcy-design-system-docs-v2/'}
    ,{label: 'Ver. 0x', url: 'https://gov-cy.github.io/govcy-design-system-docs-v0/'}
  ],
  languages: [
    {
      label: "English",
      code: "en",
    },
    {
      label: "Ελληνικά",
      code: "el",
    },
  ],
  localization: {
    "el" : {
      "title" : "gov.cy",
      "subtitle" : "Οδηγός Σχεδίασης",
      "description" : "Design your services using gov.cy styles, components and patterns.",
      "menu" : "Μενού",
      "side_title" : "Σελίδες ενότητας",
      "draft" : "DRAFT",
      "version" : "Ver.",
      "url" : "",
      "ask_users_for": "Ask users for",
      "help_users": "Help users",
      "pages": "Σελίδες",
      "how_to": "How to",
      "TOC_title" : "Περιεχόμενα",
      "privacy_label":"Όροι Χρήσης",
      "cookie_label":"Προστασία Προσωπικών Δεδομένων",
      "accessibility_label":"Προσβασιμότητα",
      "copyright_label":"© Κυπριακή Δημοκρατία, 2024",
      "search_placeholder":"Έρευνα στο Design System",
      "skip_to_main" : "Μετάβαση στο κυρίως περιεχόμενο",
      "search_button_aria_label" : "Search, expands search text box when clicked",
      "got_to_gov_cy" : "Μετάβαση στο GOV.CY",
      "older_version_banner" : "For older version visit <a href='https://gov-cy.github.io/govcy-design-system-docs/'>v2 documentation</a>"
    },
    "en" : {
      "title" : "gov.cy",
      "subtitle" : "Unified Design System",
      "description" : "Design your services using gov.cy styles, components and patterns.",
      "menu" : "Menu",
      "side_title" : "Pages in this section",
      "draft" : "DRAFT",
      "version" : "TESTING Ver.",
      // "version" : "Ver.",
      "url" : "",
      "ask_users_for": "Ask users for",
      "help_users": "Help users",
      "pages": "Pages",
      "how_to": "How to",
      "TOC_title" : "On this page",
      "privacy_label":"Privacy statement",
      "cookie_label":"Cookies",
      "accessibility_label":"Accessibility",
      "copyright_label":"© Republic of Cyprus, 2024",
      "search_placeholder":"Search the Design System",
      "skip_to_main" : "Skip to main content",
      "search_button_aria_label" : "Search, expands search text box when clicked",
      "funding_by_EY" : "Funded by the EU Next Generation EU",
      "funding_by_EY_link_title" : "Go to EU Website",
      "cyprus_tomorrow" : "Cyprus tomorrow, recovery and resilience plan",
      "cyprus_tomorrow_link_title" : "Go to Cyprus to tomorrow website",
      "got_to_gov_cy" : "Go to the GOV.CY homepage",
      // "older_version_banner" : "For the older version visit <a href='https://gov-cy.github.io/govcy-design-system-docs-v2/'>v2 documentation</a>"
      "older_version_banner" : "This is a test website. For the actual documentation please visit the <a href='https://gov-cy.github.io/govcy-design-system-docs/'>gov.cy design system</a>"
    }
  }
};