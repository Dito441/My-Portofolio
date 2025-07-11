// backend/data.js

const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika'
  },
  {
    id: 2,
    period: '2020 - 2023',
    institution: 'SMK Negeri 1 Cluwak',
    major: 'Multimedia'
  },
  {
    id: 3,
    period: '2017 - 2020',
    institution: 'SMP Negeri 1 Keling',
    major: 'SMP'
  },
  {
    id: 4,
    period: '2011 - 2017',
    institution: 'SD 3 Keling',
    major: 'SD'
  },
];


const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'JavaScript', level: 'Mahir' },

];


const projects = [
  {
    title: 'Jogja-Inside',
    image: 'https://i.imgur.com/dVmlREU.jpeg',
    description: 'Website rekomendasi destinasi wisata di Yogyakarta dengan fitur login admin, manajemen user & destinasi.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    link: 'https://github.com/RamadhanZaki/Jogja_Inside' // atau link deploy kamu
  },

];

module.exports = { educationHistory, skills, projects };
