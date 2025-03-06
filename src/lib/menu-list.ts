import {
 Sprout,
  LucideIcon,
  LandPlot,
  AlignHorizontalDistributeCenter,
  Carrot
  
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
          href: "/strategy",
          label: "Strategy",
          icon: LandPlot,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Trading Process",
          icon: AlignHorizontalDistributeCenter,
          submenus: [
            {
              href: "/conditions-for-entering-a-trade",
              label: "Conditions For Entering a Trade"
            },
            {
              href: "/during-trade-execution",
              label: "During Trade Execution"
            },
            {
              href: "/after-trade-closes",
              label: "After Trade Closes"
            },
            {
              href: "/beautiful-model",
              label: "Beautiful Model"
            }
          ]
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/psychological-mastery",
          label: "Psychological Mastery in Trading",
          icon: Sprout,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/common-mistakes-in-trading",
          label: "Common Mistakes In Trading",
          icon: Carrot,
          submenus: []
        }
      ]
    },
  ];
}
