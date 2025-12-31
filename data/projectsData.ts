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
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/bachelor.webp',
    href: '/blog/the-time-machine',
  },

  {
    title: 'Well Crew',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/wellcrew.png',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
