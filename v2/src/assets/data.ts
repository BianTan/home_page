
export const menuList = [
  {
    id: 0,
    name: 'Home',
    url: '/#home'
  },
  {
    id: 1,
    name: 'Friends',
    url: '/#friends'
  },
  {
    id: 2,
    name: 'Projects',
    url: '/#projects'
  }
]

export interface SocialMediaItem {
  icon: string;
  name: string;
  url: string;
}
import biliIcon from './images/bilibili.png'
import githubIcon from './images/github.png'
import uicnIcon from './images/uicn.png'
import steamIcon from './images/steam.png'
export const socialMediaList: SocialMediaItem[] = [
  {
    name: 'bili',
    icon: biliIcon,
    url: 'https://space.bilibili.com/3572779'
  },
  {
    name: 'github',
    icon: githubIcon,
    url: 'https://github.com/BianTan'
  },
  {
    name: 'uicn',
    icon: uicnIcon,
    url: 'https://i.ui.cn/ucenter/140038'
  },
  {
    name: 'steam',
    icon: steamIcon,
    url: 'https://steamcommunity.com/id/BianDanW/'
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

export interface FriendDetail {
  id: number;
  name: string;
  desc: string;
  url: string;
  avatar: string;
}
export const friendList: FriendDetail[] = [
  {
    id: 0,
    name: "白熊阿丸的小屋",
    desc: "照顾好自己 (抱住",
    url: "https://www.bxaw.name/",
    avatar: "/link_avatar/bxaw.ico"
  },
  {
    id: 1,
    name: "Cyberiad",
    desc: "Gal狂魔！",
    url: "https://galkm.me/",
    avatar: "/link_avatar/galkm.png"
  },
  {
    id: 2,
    name: "橙的记事本",
    desc: "Kagami！",
    url: "https://sell.moe/",
    avatar: "/link_avatar/sell.ico"
  },
  // {
  //   id: 3,
  //   name: "DANNY 's Blog",
  //   desc: "80后奶爸的博客",
  //   url: "https://wrdan.com/",
  //   avatar: "/link_avatar/danny.jpg"
  // },
  {
    id: 4,
    name: "天气雨",
    desc: "Eiko吃鸡！(x",
    url: "https://rainiv.com/",
    avatar: "/link_avatar/eiko.jpeg"
  },
  {
    id: 5,
    name: "Everlastings",
    desc: "雅白姐姐~选择困难晚期，两点一线，1个初级数据分析师，非知名宅",
    url: "https://everlastin.gs/",
    avatar: "/link_avatar/yabai.jpg"
  },
  {
    id: 6,
    name: "INLOJV",
    desc: "平衡有度，厚积薄发。",
    url: "http://www.inlojv.com/",
    avatar: "/link_avatar/inlojv.jpg"
  },
  {
    id: 7,
    name: "I am here",
    desc: "95后大叔~",
    url: "https://miiiku.xyz/",
    avatar: "/link_avatar/miiiku.jpg"
  },
  {
    id: 8,
    name: "甲烃气瓶",
    desc: "小豆汁！",
    url: "https://jakting.com/",
    avatar: "/link_avatar/douzi.ico"
  },
  {
    id: 9,
    name: "Kiseopt",
    desc: "正太控 猫耳小五什么的最棒了！",
    url: "https://ztk.im/",
    avatar: "/link_avatar/wu.jpg"
  },
  {
    id: 10,
    name: "Lance.Moe",
    desc: "Lance.Moe - ￣▽￣／",
    url: "https://lance.moe/",
    avatar: "/link_avatar/lance.png"
  },
  {
    id: 11,
    name: "猫箱内の六轩岛",
    desc: "海猫鸣泣之时，无人生还",
    url: "https://batora.ushiromiya.com/",
    avatar: "/link_avatar/dama.png"
  },
  {
    id: 12,
    name: "Moehentai",
    desc: "一只喜欢萌妹の变态鹅啦＞︿＜",
    url: "https://blog.conoha.vip/",
    avatar: "/link_avatar/e.jpg"
  },
  {
    id: 13,
    name: "喵の窝",
    desc: "鹅厂高级吉祥物",
    url: "https://tyzual.com/",
    avatar: "/link_avatar/tyzual.ico"
  },
  {
    id: 14,
    name: "OXの胡說八道",
    desc: "僅僅是OX胡說八道的東西而已～",
    url: "https://blog.ooxx.dk/",
    avatar: "/link_avatar/ox.png"
  },
  {
    id: 15,
    name: "この青空に約束を",
    desc: "9yu是我的喵！",
    url: "https://9yu.eu/",
    avatar: "/link_avatar/9yu.ico"
  }
]
