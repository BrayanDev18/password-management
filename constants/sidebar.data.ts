import { CreditCard, Key, Landmark, LayoutList, Lock, Settings, Star, UserPen } from "lucide-react";


export const dataSidebarElements = [
  {
    title: 'Elements',
    icon: LayoutList,
    children: [
      {
        item: 'Favorites',
        href: '/favorites',
        icon: Star
      },
      {
        item: 'Logins',
        href: '/logins',
        icon: Key
      },
      {
        item: 'Credit cards',
        href: '/cards',
        icon: CreditCard
      }
    ]
  }
]

export const dataSidebarConfig = [
  {
    title: 'Configuration',
    icon: Settings,
    children: [
      {
        item: 'Profile',
        href: '/profile',
        icon: UserPen,
        premium: false
      },
      {
        item: 'security',
        href: '#',
        icon: Lock,
        premium: true
      },
      {
        item: 'Suscription',
        href: '#',
        icon: Landmark,
        premium: true
      }
    ]
  }
]