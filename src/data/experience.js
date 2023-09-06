import thoughtsutra from "../assets/Untitled.png";
import titan from "../assets/Untitled (4).png";
import vevesta from "../assets/Untitled (5).png";
import racing from "../assets/Untitled (2).png";
import kettle from "../assets/20220813_155131.jpg";
import aptos from "../assets/aptos.png";

const experience = [
    {
        name: "Thought Sutra",
        title: "Typescript",
        subtitle: 'E-Commerce Website',
        description: "Used by 8000 of users worldwide",
        image: thoughtsutra,
        super: "Created using React JS",
        sub: "Designed using figma",
        stack: [ {
            name: 'React.js',
            icon: 'react'
        }, {
            name: 'Node.js',
            icon: 'nodejs'
        }, {
            name: 'CSS',
            icon: 'css3'
        }, {
            name: 'HTML',
            icon: 'html5'
        }, {
            name: 'MySQL',
            icon: 'database'
        }, {
            name: 'MongoDB',
            icon: 'mongodb'
        }
            , {
                name: 'AWS',
                icon: 'aws'
            }],
        acvmnts: [
            'Integrated a payment gateway',
            'Redesigned the look of the website',
            'Created a admin panel with RBAC with multiple roles'
        ]
    },
    {
        name: "Titan",
        title: "React.js",
        subtitle: 'Social Network',
        description: "Built Tested and Deployed a highly reliable social media with OTP authentication used by titan employees on Christmas, loved by thousands of users and got the project extended for several months. Intelligently designed db schema and load balancers to handle request loads and concurrency issues",
        image: titan,
        super: "Created using p5 JS",
        sub: "Designed using figma",
        stack: [ {
            name: 'React.js',
            icon: 'react'
        }, {
            name: 'Node.js',
            icon: 'nodejs'
        }, {
            name: 'CSS',
            icon: 'css3'
        }, {
            name: 'HTML',
            icon: 'html5'
        }, {
            name: 'MongoDB',
            icon: 'mongodb'
        }
        , {
                name: 'AWS',
                icon: 'aws'
            },
            {
                name: 'P5',
                icon: 'android'
            },
        ],
    acvmnts: [
        'Created a Christmas tree using p5.js',
        'Added OTP Login system',
        'Configured and deployed to AWS',
        'Admin panel to send thousands of mail'
]
    },
    {
        name: "Vevesta",
        title: "Vue.js",
        subtitle: 'ML Repository',
        description:`Learnt new tools and skills and worked on diverse fields and features under the
        guidance of Amazon SDE II CTO
        Frontend (Vue) Landing page, Login/Sign up page, Solutions, Design changes,
    Integrating new features TipTap editor and building high-level custom features on
    top of it, implemented lazy loading, proposed and implemented a brand new
    design
    Tracking: Integrated mixpanel to track simple and complex activities of a user`,
        image: vevesta,
        super: "Created using Vue JS",
        sub: "Designed using figma",
        stack: [ {
            name: 'React.js',
            icon: 'react'
        }, {
            name: 'Node.js',
            icon: 'nodejs'
        }, {
            name: 'CSS',
            icon: 'css3'
        }, {
            name: 'HTML',
            icon: 'html5'
        }, {
            name: 'MySQL',
            icon: 'mysql'
        }
        ],
        acvmnts: [
            'Built a plugin for tip tap editor from scratch',
            'Rebuilt the frontend of the app with a fresh look',
            'Integrated mixpanel analytics'
        ]
    },
    {
        name: "Payatu",
        title: "Node.js",
        subtitle: 'Security Assessment',
        description: "Building a cyber security tool, responsible for major developments in backend. Building a reporting tool using SERN stack with docker microservices and a messaging queue for the tool",
        image: 'https://payatu.com/static/blogheaderimg/suraj/windows-privilege-escalation-guide/Payatu%20Blog_windows%20escalation.jpg',
        super: "Created using Next JS",
        sub: "Designed using figma",
        stack: [ {
            name: 'React.js',
            icon: 'react'
        }, {
            name: 'Node.js',
            icon: 'nodejs'
        }, {
            name: 'CSS',
            icon: 'css3'
        }, {
            name: 'HTML',
            icon: 'html5'
        }, {
            name: 'MySQL',
            icon: 'mysql'
        }
        ],
        acvmnts: [
            'Introduced a dynamic logging system in a production level app with console and remote service',
            'Found and fixed SQL injection bug in company’s app',
            'Designed and implemented job queue using Bull.js and Redis which reduced the server load by 13%',
            'Automated linux tools and there outputs using express.js child process'
        ]
    },
    {
        name: "NITK Racing",
        title: "Anime.js",
        subtitle: 'NKR 2K21 Website',
        description: "Designed and Developed using react js and anime.js, The new design of NIT K racing changed the way sponsors looked at NITK racing team",
        image: racing,
        super: "Created using React JS",
        sub: "Designed using figma",
        stack: [ {
            name: 'React.js',
            icon: 'react'
        }, {
            name: 'Node.js',
            icon: 'nodejs'
        }, {
            name: 'CSS',
            icon: 'css3'
        }, {
            name: 'HTML',
            icon: 'html5'
        }, {
            name: 'MySQL',
            icon: 'mysql'
        }
        ],
        acvmnts: [
            'Built the frontend for the NITK Racing',
            'Original design using figma',
            'Used anime.js to animate the website'
        ]
    },
    {
        name: "Kettleborough",
        title: "Next.js",
        subtitle: 'VC Firm Dashboard',
        description: "Prototyped, Designed and developed a high quality website using firebase as backend. Realtime updates using firestore and google auth",
        image: kettle,
        super: "Created using Firebase",
        sub: "Designed using figma",
        stack: [ {
            name: 'React.js',
            icon: 'react'
        }, {
            name: 'Node.js',
            icon: 'nodejs'
        }, {
            name: 'CSS',
            icon: 'css3'
        }, {
            name: 'HTML',
            icon: 'html5'
        }, {
            name: 'MySQL',
            icon: 'mysql'
        }
        ],
        acvmnts: [
            'Built a dashboard for the investment firm'
        ]
    },
    {
        name: "Astrotech Labs",
        title: "Web3.js",
        subtitle: 'Cosmos Blockchain',
        description: "Created a transaction and staking page from scratch using Next.js using martian wallet for Aptos blockchain",
        image: aptos,
        super: "Created using Next JS",
        sub: "Designed using figma",
        stack: [ {
            name: 'React.js',
            icon: 'react'
        }, {
            name: 'Node.js',
            icon: 'nodejs'
        }, {
            name: 'CSS',
            icon: 'css3'
        }, {
            name: 'HTML',
            icon: 'html5'
        }, {
            name: 'MySQL',
            icon: 'mysql'
        }
        ],
        acvmnts: [
            'Built the frontend of the webapp for staking Aptos chain',
            'Helped create the cosmos package'
        ]
    },
]

export default experience
