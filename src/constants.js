

import project1 from "./images/qxtro-python-staging.herokuapp.com.png";
import project2 from "./images/www.archetape.com.jpg";
import project3 from "./images/www.assured.claims.png";
import project4 from "./images/www.modzy.com.png";
import project5 from "./images/www.ravetree.com.png";
import project6 from "./images/lob.png";
import project7 from "./images/rentberry.jpg";
import project8 from "./images/www.loungebuddy.com.png";
import project9 from "./images/pleroma.social.png";
import project10 from "./images/campusoptics.png";
import project11 from "./images/rolfsonoil.png";
import project12 from "./images/worklete.png";

export const skills = [
  {type: "JavaScript", level: 95},
  {type: "Frontend Dev", level: 95},
  {type: "React.js", level: 92},
  {type: "React Native", level: 90},
  {type: "Redux", level: 90},
  {type: "Angular", level: 82},
  {type: "Vue.js", level: 85},
  {type: "ES6", level: 90},
  {type: "TypeScript", level: 90},
  {type: "GraphQL", level: 85},
  {type: "Node.js", level: 80},
  {type: "jQuery", level: 90},
  {type: "HTML/HTML5", level: 95},
  {type: "CSS/CSS3", level: 95},
  {type: "Webflow", level: 92},
  {type: "WordPress", level: 68},
  {type: "PHP", level: 65},
  {type: "MySQL", level: 75},
];

export const projects = [
  {
    name: "CivImpact Labs",
    description: `- Built a single page application with React, Redux, TypeScript, HTML5, CSS3, SCSS, Opentok API, etc.
    - Implemented pixel-perfect Figma Design and mobile-friendly UI.
    - Worked on implementing the Video/Audio conference feature with OpenTok API and WebSocket API.
    - Worked on integrating REST APIs with Axios and Redux-Thunk
    `,
    image: project1,
    link: 'https://qxtro-python-staging.herokuapp.com/',
  },
  {
    name: "ArcheTape",
    description: `- Built responsive web front-end pages and implemented mobile-friendly and pixel-perfect designs with React.js, Redux, HTML5, CSS3, and styled-components.
    - Delivered a marketing website with React.js, HTML5, CSS3, and styled-components.
    - Built a cross-platform mobile app for iOS and Android platforms with React Native CLI, React, Redux, Redux-Thunk, and Axios.
    - Integrated several third-party React and React Native packages such as Google Mapbox, DnD, and Stripe payment.
    - Implement messaging functionality with SendBird API and integrated FCM for push notification.
    `,
    image: project2,
    link: 'https://www.archetape.com/',
  },
  {
    name: "Assured Insurance",
    description: `- Built a Webflow website using Webflow CMS, Webflow UIKit, JavaScript, jQuery, HTML, CSS, etc.
    - Implemented mobile-friendly and pixel-perfect UI based on the Figma designs
    - Implemented UI animations
    - Integrated Third-Party systems
    `,
    image: project3,
    link: 'https://www.assured.claims/',
  },
  {
    name: "Modzy",
    description: `- Built an admin dashboard for Modzy using React.js, GraphQL, Apollo, ES6, HTML5, CSS3, SCSS, D3.js, etc.
    - Implemented pixel-perfect Invision Design
    - Implemented several complex charts for data visualization using D3.js
    - Worked on integrating GraphQL queries and mutations
    `,
    image: project4,
    link: 'https://www.modzy.com/',
  },
  {
    name: "Ravetree",
    description: `
    - Implemented pixel-perfect design with Webflow CMS, Webflow UIKit, JavaScript, jQuery, HTML, CSS, etc.
    - Integrated Third-Party systems like Youtube API, Google Calendar, etc`,
    image: project5,
    link: 'https://ravetree.com/',
  },
  {
    name: "Lob",
    description: `- Migrated existing website assets to Webflow and collaborated with a senior visual designer.
    - Updated the look and feel of the website to use new design guidelines and assets.
    - Integrated third-party systems into Lob's public website (Marketo forms, greenhouse job board, Lob API documentation, and Lob API examples)`,
    image: project6,
    link: 'https://www.lob.com/',
  },
  {
    name: "Rentberry",
    description: `- Built the responsive web front end with Angular5, TypeScript, HTML5, CSS3, Sass, SCSS, Angular Material, and NgRx.
    - Integrated Google Maps API.
    - Utilized modern methods of social engagement such as commenting and up/down voting to allow users to engage and collaborate on application-specific items.
    - Integrated a payment gateway.
    - Added analytics tracking to the web application using Mixpanel and Google Analytics.`,
    image: project7,
    link: 'https://rentberry.com/',
  },
  {
    name: "LoungeBuddy",
    description: `- Built responsive and mobile-friendly web front-end pages with React.js, Redux, HTML, CSS, SASS/SCSS, etc.
    - Worked on migrating Angular to React without a massive rewrite.
    - Integrated Backend API with Redux -Saga and Axios and 3rd party systems like Greenhouse, ZenDesk, Marketo Form, etc
    - Built an iOS app with React Native, React, Redux -Thunk. Designed the entire mobile application to be able to function offline for long periods of time and sync data back once in cell reception (online)
    - Integrated Unit Testing with Jest and Increased testing coverage of the existing application Cypress
    `,
    image: project8,
    link: 'https://www.loungebuddy.com/',
  },
  {
    name: "Pleroma",
    description: `- Implemented front-end pages with Vue.js , Vuex , Vuetify , HTML5 , CSS3 , Bootstrap. Redesigned, simplified, and implemented a new version of an existing alerting application that contained over 100 form fields and drastically reduced the amount of customer support calls with the simplified redesign.
    - Developed a universal search feature for a customer-facing analytic application that allowed all of the application's data entities to be searched instantly within a single interface.
    - Implemented various private APIs on a Node. js and MongoDB back end.
    `,
    image: project9,
    link: 'https://pleroma.social/',
  },
  {
    name: "CampusOptics App",
    description: `- Built the React Native mobile app with React Native CLI, TypeScript, React Navigation, etc.
    - Worked on integrating the Firebase Analytics, Google Map API, etc`,
    image: project10,
    link: 'https://apps.apple.com/us/app/campusoptics/id1500448331',
  },
  {
    name: "Rolfson Oil",
    description: `- Built web and mobile front-end pages using the React, Redux, Redux-thunk, React Native CLI, HTML5, CSS3, and React-Material-UI.
    - Developed a React Native iOS/Android app that helps drivers manage their tickets.
    - Enabled the mobile app to connect to Bluetooth printers to print tickets. Fixed an iPad issue for the printer plugin.
    - Created React components with React charts to support interactive visualizations of data projections and analysis.
    - Refactored very large front-end application code to make it more modular and reusable.`,
    image: project11,
    link: 'https://ticketing.rolfsonoil.com/',
  },
  {
    name: "Worklete App",
    description: `- Implemented pixel-perfect designs with React Native UI library based on Eva Design System.
    - Refactored the existing codebase based on best practices and focused on test-driven-development.
    - Added Firebase back-end functions with Firebase administration.
    - Implemented push notifications for both iOS and Android platforms using FCM (Firebase Cloud Messaging).`,
    image: project12,
    link: 'https://play.google.com/store/apps/details?id=com.worklete',
  },
];
