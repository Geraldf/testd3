import { NavElements, NavItems } from '@/types/nav'
import { HomeIcon } from '@/components/icons/AppIcons'

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Fuchsclan',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com'
  }
}
export const SiteDescription = siteConfig.description
export const Nav: NavItems[] = [
  {
    title: 'Home',
    elements: []
  },
  {
    title: 'Home2',
    elements: []
  }
]

export const SiteNavElements: NavElements[] = [
  {
    name: 'Home',
    url: '/',
    icon: HomeIcon
  },

  {
    name: 'D3 Test',
    url: '/d3'
  }
]
