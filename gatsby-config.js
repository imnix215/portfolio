module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://zenbuganan.netlify.app/`,
    // Your Name
    name: 'Zen Buganan',
    // Main Site Title
    title: `Zen Buganan | Application Developer`,
    // Description that goes under your name in main bio
    description: `Software Engineer`,
    // Optional: Resume
    resume: `src/images/XeniaJoi_Buganan_SoftwareAIEngineer.pdf`,
    // Optional: Github account URL
    github: `https://github.com/imnix215`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/xjbuganan`,
    // Content of the About Me section
    about: `Hi, I'm Zen — a .NET developer who loves turning coffee into code. I build web apps and chatbot solutions using C#, Angular, and Azure. I've led teams, mentored new devs, and occasionally steal bugs from teammates just to fix them faster (don't tell!). Always learning, always leveling up.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    //projects: [
      //{
        //name: 'Devfolio',
        //description:
          //'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
        //link: 'https://github.com/RyanFitzgerald/devfolio',
      //},
    //],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'STI College Las Piñas',
        description: 'Bachelor\'s Degree in Information Technology, November 2019'
      }
    ],
    experience: [
      {
        name: 'Accenture Inc. — Application Developer (Analyst), December 2023 - February 2025',
        description: 'Develop, deploy, and maintain enterprise chatbots in Microsoft Teams— including solutions built with Microsoft Copilot Studio—to automate internal processes and improve employee support. Centralize chatbot code repositories and implement automated CI/CD pipelines in Azure DevOps to streamline deployment.',
        
      },
      {
        name: 'Accenture Inc. — Application Developer (Associate), July 2022 - December 2023',
        description: 'Manage and curate Azure Cognitive Services QnA databases, including nearly 1,000 prompts, while developing APIs and UI enhancements to improve mailbox validation, visibility, and system accuracy. Build chatbot prototypes and client-specific Service Lines to enable self-service automation, while mentoring junior developers and supporting best practices within the Scrum team.',
        
      },
      {
        name: 'Systemantech Inc. — Junior Desktop Support Engineer, September 2021 - July 2022',
        description: 'Configured and deploy desktops and VoIP phones across three offices, ensuring seamless agent operations and consistent IT support coverage.',
        
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Frontend & Web Development',
        description:
          'HTML, CSS / Bootstrap, Angular / Typescript, Adaptive Cards / JSON',
      },
      {
        name: 'Backend & Programming',
        description: 'C# / ASP.NET, MySQL',
      },
      {
        name: 'Cloud & Conversational AI',
        description:
          'Microsoft Azure, Azure DevOps, Azure Bot Services, Copilot Studio',
      },
    ],
    // Optional: List your achievements, they must have `name` and `description`.
    awards: [
      {
        name: 'Dream Team Award',
        description:
          'Aug 2023 | Accenture Inc.',
      },
      {
        name: 'Collaborative Team Award',
        description: 'Aug 2024 | Accenture Inc.',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
