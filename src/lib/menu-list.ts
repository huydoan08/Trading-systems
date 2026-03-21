import {
  LucideIcon,
  AlignHorizontalDistributeCenter,
  PersonStandingIcon,
  Bird,
  Image,
  LucideFileBarChart,
  Heart,
  Apple,
} from "lucide-react";
import { getAuth } from "firebase/auth";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  const auth = getAuth();
  const user = auth.currentUser;
  const isAdmin = user?.email == "doanvanhuy268@gmail.com";
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/trading-spot",
          label: "Trading Spot BTC/USDT",
          icon: AlignHorizontalDistributeCenter,
          active: !isAdmin,
          submenus: [
          ]
        }
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/technical-analysis",
          label: "Technical Analysis",
          icon: AlignHorizontalDistributeCenter,
          active: !isAdmin,
          submenus: [
          ]
        }
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/performance-report",
          label: "Báo Cáo Kết Quả",
          icon: LucideFileBarChart,
          submenus: [],
          active: !isAdmin
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Bộ ảnh của Dâu Tây",
          icon: Image,
          submenus: [
            {
              href: "/dau-tay-0-den-1-tuoi",
              label: "Dâu Tây từ 0 đến 1 tuổi"
            },
            {
              href: "/dau-tay-1-den-2-tuoi",
              label: "Dâu Tây từ 1 đến 2 tuổi"
            },
            {
              href: "/dau-tay-2-den-3-tuoi",
              label: "Dâu Tây từ 2 đến 3 tuổi"
            },
          ]
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/raising-children",
          label: "Giáo dục con",
          icon: Heart,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/javascript",
          label: "JavaScript",
          icon: Apple,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/reactjs",
          label: "React.js",
          icon: Apple,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/mentorship",
          label: "Sưu tầm",
          icon: Apple,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/story-telling",
          label: "Chuyện kể",
          icon: Apple,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/internal-force",
          label: "Nội lực bên trong",
          icon: Apple,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/passion",
          label: "Đam mê",
          icon: Apple,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/health",
          label: "Sức khỏe",
          icon: Apple,
          submenus: []
        }
      ]
    },
  ];
}
