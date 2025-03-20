import {
  Sprout,
  LucideIcon,
  LandPlot,
  AlignHorizontalDistributeCenter,
  Carrot,
  FileQuestionIcon,
  Book
} from "lucide-react";
import { getAuth } from "firebase/auth";
import { ALLOWED_UID } from "@/AuthService";

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
  const isAdmin = user?.email == "doanvanhuy268@gmail.com"
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
            },
            {
              href: "/transaction-journal",
              label: "Transaction Journal",
              active: !isAdmin
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
    {
      groupLabel: "",
      menus: [
        {
          href: "/rsi",
          label: "Q&A RSI",
          icon: FileQuestionIcon,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/buddhism",
          label: "The precepts in Buddhism",
          icon: Book,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/personal-growth",
          label: "Personal growth",
          icon: Book,
          submenus: []
        }
      ]
    },
  ];
}
