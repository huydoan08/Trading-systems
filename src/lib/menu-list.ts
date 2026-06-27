import {
  LucideIcon,
  AlignHorizontalDistributeCenter,
  CodeXml,
  BookOpenText
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

export function getMenuList(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Giao dịch",
          icon: AlignHorizontalDistributeCenter,
          submenus: [
            {
              href: "/principles",
              label: "Principles"
            },
            {
              href: "/strategy",
              label: "Strategy"
            },
            {
              href: "/rsi-indicator",
              label: "RSI Indicator"
            },
            {
              href: "/pnl-report",
              label: "PNL Report"
            }
          ]
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Lập trình",
          icon: CodeXml,
          submenus: [
            {
              href: "/javascript",
              label: "JavaScript"
            },
            {
              href: "/reactjs",
              label: "React.js"
            },
            {
              href: "/solution-mindset",
              label: "Solution"
            },
            {
              href: "/how-to-debug",
              label: "How to Debug"
            },
            {
              href: "/git",
              label: "Git"
            }
          ]
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/story-telling",
          label: "Câu chuyện & bài học",
          icon: BookOpenText,
          submenus: []
        }
      ]
    },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/raising-children",
    //       label: "Giáo dục con",
    //       icon: Heart,
    //       submenus: []
    //     }
    //   ]
    // },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/mentorship",
    //       label: "Sưu tầm",
    //       icon: Ticket,
    //       submenus: []
    //     }
    //   ]
    // },

    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/internal-force",
    //       label: "Nội lực bên trong",
    //       icon: Timer,
    //       submenus: []
    //     }
    //   ]
    // },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/passion",
    //       label: "Đam mê",
    //       icon: Apple,
    //       submenus: []
    //     }
    //   ]
    // },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/health",
    //       label: "Sức khỏe",
    //       icon: HeartPulse,
    //       submenus: []
    //     }
    //   ]
    // },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "",
    //       label: "Con gái yêu",
    //       icon: Image,
    //       submenus: [
    //         {
    //           href: "/dau-tay-0-den-1-tuoi",
    //           label: "Dâu Tây từ 0 đến 1 tuổi"
    //         },
    //         {
    //           href: "/dau-tay-1-den-2-tuoi",
    //           label: "Dâu Tây từ 1 đến 2 tuổi"
    //         },
    //         {
    //           href: "/dau-tay-2-den-3-tuoi",
    //           label: "Dâu Tây từ 2 đến 3 tuổi"
    //         }
    //       ]
    //     }
    //   ]
    // },
  ];
}
