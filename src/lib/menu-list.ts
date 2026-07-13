import {
  LucideIcon,
  AlignHorizontalDistributeCenter,
  CodeXml,
  BookOpenText,
  HeartPulse
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
              href: "/self-mastery",
              label: "Self Mastery"
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
              label: "Debugging Skills"
            },
            {
              href: "/behavior-analysis",
              label: "Behavior Analysis"
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
          href: "",
          label: "Tu tập",
          icon: BookOpenText,
          submenus: [
            {
              href: "/ancient-teaching",
              label: "Lời dạy của cổ nhân"
            },
            {
              href: "/story-telling",
              label: "Câu chuyện & bài học"
            }
          ]
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
    //       href: "/passion",
    //       label: "Đam mê",
    //       icon: Apple,
    //       submenus: []
    //     }
    //   ]
    // },
  ];
}
