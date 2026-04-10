import {
  LucideIcon,
  AlignHorizontalDistributeCenter,
  Image,
  Heart,
  Apple,
  Torus,
  Umbrella,
  Usb,
  Ticket,
  Timer,
  HeartPulse,
} from "lucide-react";

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
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/trading-spot",
          label: "Trading",
          icon: AlignHorizontalDistributeCenter,
          submenus: [
            {
              href: "/strategy",
              label: "Strategy",
            },
            {
              href: "/trading-spot",
              label: "Trading Spot Entry",
            },
            {
              href: "/rsi-indicator",
              label: "RSI Indicator"
            },
            {
              href: "/pnl-report",
              label: "PNL Report",
            },
          ]
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
          icon: Usb,
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
          icon: Umbrella,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/solution-mindset",
          label: "Solution & Mindset",
          icon: Torus,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/how-to-debug",
          label: "How to Debug",
          icon: Torus,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/git",
          label: "Git",
          icon: Torus,
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
          icon: Ticket,
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
          icon: Timer,
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
          icon: HeartPulse,
          submenus: []
        }
      ]
    },
  ];
}
