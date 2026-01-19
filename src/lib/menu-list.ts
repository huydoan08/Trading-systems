import {
  LucideIcon,
  AlignHorizontalDistributeCenter,
  PersonStandingIcon,
  Bird,
  NotebookPen,
  LucideFileBarChart,
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
          href: "/transaction-history",
          label: "Nhật Ký Giao Dịch",
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
          href: "/performance-report",
          label: "Báo Cáo Kết Quả",
          icon: LucideFileBarChart,
          submenus: [],
          active: !isAdmin
        }
      ]
    },
  ];
}
