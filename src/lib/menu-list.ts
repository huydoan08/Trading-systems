import {
  Sprout,
  LucideIcon,
  AlignHorizontalDistributeCenter,
  FileQuestionIcon,
  PersonStandingIcon,
  TreeDeciduous,
  Bird,
  NotebookPen,
  Highlighter,
  Footprints,
  Star,
  MountainSnow,
  Ghost,
  Gift,
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
          href: "",
          label: "Hệ Thống Giao Dịch",
          icon: AlignHorizontalDistributeCenter,
          submenus: [
            {
              href: "/conditions-for-entering-a-trade",
              label: "Bộ Tiêu Chí Vào Lệnh"
            },
            {
              href: "/during-trade-execution",
              label: "Tiêu Chí Giữ Lệnh"
            },
            {
              href: "/after-trade-closes",
              label: "Tiêu Chí Thoát Lệnh"
            },
          ]
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/crypto-journal",
          label: "Tổng hợp kinh nghiệm",
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
          label: "Transaction history",
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
            },
            {
              href: "/signs-of-h1-weakening",
              label: "Signs of H1 weakening",
            },
            {
              href: "/signs-of-h1-accumulation",
              label: "Signs of H1 accumulation",
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
          icon: MountainSnow,
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
          icon: Ghost,
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
          icon: Star,
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
          icon: Gift,
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
