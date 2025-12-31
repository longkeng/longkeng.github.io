interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'SSP Platform (AdTech)',
    description: `Led and managed SSP platform development focusing on stability, revenue accuracy,
    and Japanese-standard delivery. Worked as Tech Manager bridging JP stakeholders
    and VN engineers.（Tech ManagerとしてSSPプラットフォームの改善・運用をリード）`,
    imgSrc: '/static/images/ssp.webp',
    href: '/projects/ssp-platform',
  },
  {
    title: 'DSP Platform (AdTech)',
    description: `Led and managed DSP platform development focusing on stability, revenue accuracy,
    and Japanese-standard delivery. Worked as Tech Manager bridging JP stakeholders
    and VN engineers.（Tech ManagerとしてDSPプラットフォームの改善・運用をリード）`,
    imgSrc: '/static/images/dsp.png',
    href: '/projects/dsp-platform',
  },
  {
    title: 'Bachelor Date',
    description: `Large-scale AI-powered dating platform with 1.5M users in Japan. I worked as a Project Manager, leading cross-border teams and core feature development.`,
    imgSrc: '/static/images/bachelor.webp',
    href: '/projects/bachelor-date',
  },

  {
    title: 'Well Crew',
    description: `Japanese HR recruitment platform for welfare and caregiving sectors. （福祉・介護業界に特化した人材紹介・求人マッチングサービス）`,
    imgSrc: '/static/images/wellcrew.png',
    href: '/projects/wellcrew',
  },
]

export default projectsData
