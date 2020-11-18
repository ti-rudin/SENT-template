import type { Tab } from '../interfaces/tab.interface'

export const tabs: Tab[] = [
  {
    segment: undefined,
    href: '.',
    title: 'home',
    prefetch: false,
  },
  {
    segment: 'about',
    href: 'about',
    title: 'about',
    prefetch: false,
  },
  {
    segment: 'blog',
    href: 'blog',
    title: 'blog',
    prefetch: true,
  },
  {
    href: 'https://github.com/Zimtir/SENT-template',
    icon: 'icon-github',
    title: '',
    target: '_blank',
    prefetch: false,
  },
]
