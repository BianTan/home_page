
export const menuList = [
  {
    id: 0,
    name: 'Home'
  },
  {
    id: 1,
    name: 'Friends'
  },
  {
    id: 2,
    name: 'Projects'
  }
]

export interface SocialMediaItem {
  icon: string;
  name: string;
}
import biliIcon from './images/bilibili.png'
import githubIcon from './images/github.png'
import uicnIcon from './images/uicn.png'
import steamIcon from './images/steam.png'
export const socialMediaList: SocialMediaItem[] = [
  {
    name: 'bili',
    icon: biliIcon
  },
  {
    name: 'github',
    icon: githubIcon
  },
  {
    name: 'uicn',
    icon: uicnIcon
  },
  {
    name: 'steam',
    icon: steamIcon
  }
]

export interface PowerItem {
  label: string;
  progress: string | number;
  tips?: string;
}
export const progressList: PowerItem[] = [
  {
    label: 'HTML/CSS3',
    progress: 0.95
  },
  {
    label: 'JavaScript/TypeScript',
    progress: 0.72
  },
  {
    label: '兴趣使然的设计',
    progress: 0.24
  },
  {
    label: '学习能力',
    progress: 1
  },
  {
    label: '斗气值',
    progress: 0.1
  }
]
