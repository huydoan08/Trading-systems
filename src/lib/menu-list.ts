import {
  Sprout,
  LucideIcon,
  AlignHorizontalDistributeCenter,
  Carrot,
  FileQuestionIcon,
  PersonStandingIcon,
  TreeDeciduous,
  Leaf,
  Bird,
  NotebookPen,
  Highlighter,
  Footprints,
  Activity
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
  const isAdmin = user?.email == "doanvanhuy268@gmail.com"
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/crypto-journal",
          label: "Crypto Journal",
          icon: Footprints,
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
              active: !isAdmin
            },
            {
              href: "/manage-order",
              label: "Manage Order",
              active: !isAdmin
            },
            {
              href: "/weakening-model",
              label: "Weaking Model",
              active: !isAdmin
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
          href: "/quintessence-rsi",
          label: "Quintessence of RSI",
          icon: Activity,
          submenus: [],
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
          href: "/important-notes",
          label: "Important Notes",
          icon: Highlighter,
          submenus: [],
          active: !isAdmin
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
          href: "/statistic",
          label: "Statistic",
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
