const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'Sid',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Siddharth Sinha',
  role: 'FullStack Developer',
  description:
    'Hi there, A little about myself i am doing my bacherlors in computer science from guru gobindh singh indraprastha university expected(2022)',
  resume: 'https://drive.google.com/file/d/138PfQ-ze0IRLV0z1V6cWufMr00Tn4863/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/siddharth-sinha-x8/',
    github: 'https://github.com/sidx8',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Smart Home Mobile App',
    description:
      'A Smart Home app that controls you home electronic devices through nodemcu',
    stack: ['Flutter', 'C++', 'Node.js'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Smart Home Mobile App',
    description:
      'A Smart Home app that controls you home electronic devices through nodemcu',
    stack: ['Flutter', 'C++', 'Node.js'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Smart Home Mobile App',
    description:
      'A Smart Home app that controls you home electronic devices through nodemcu',
    stack: ['Flutter', 'C++', 'Node.js'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Nextjs blog with ISR',
    description:
      'A simple Nextjs Blog useing news.com api with incremental static regeneration',
    stack: ['Reactjs', 'Nextjs', 'Tailwind', 'Api'],
    sourceCode: 'https://github.com/sidx8/Next.js-blog',
    livePreview: 'https://articlewaliwebsite-sidx8.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'NextJs',
  'Gatsby',
  'Node.js',
  'Flutter',
  'MongoDB',
  'Postgresql',
  'Firebase',
  'AWS',
  'C++',
  'Socket.io',
  'SASS',
  'Tailwind',
  'Git',
  'Agile',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'siddharth0sinha@gmail.com',
}

export { header, about, projects, skills, contact }
