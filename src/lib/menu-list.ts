import {
  Sprout,
  LucideIcon,
  LandPlot,
  AlignHorizontalDistributeCenter,
  Carrot,
  FileQuestionIcon,
  PersonStandingIcon,
  TreeDeciduous,
  Leaf,
  Bird,
  NotebookPen
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
              label: "Beautiful Model",
            },
            {
              href: "/manage-order",
              label: "Manage Order",
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
          label: "Transaction journal",
          icon: NotebookPen,
          submenus: [
            
            {
              href: "/win-order",
              label: "Win Order",
            },
            {
              href: "/loss-order",
              label: "Loss Order",
            },
            {
              href: "/missing-chance",
              label: "Missing Chance",
            }
          ],
          active: !isAdmin
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
          href: "/technical-question",
          label: "Q&A Technical",
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
          icon: TreeDeciduous,
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
          icon: PersonStandingIcon,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/revenue",
          label: "Revenue",
          icon: Leaf,
          submenus: [],
          active: !isAdmin
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/story-telling",
          label: "Story telling",
          icon: Bird, 
          submenus: []
        }
      ]
    },
  ];
}
