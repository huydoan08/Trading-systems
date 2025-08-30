import {
  LucideIcon,
  AlignHorizontalDistributeCenter,
  PersonStandingIcon,
  Bird,
  NotebookPen,
  Footprints,
  LucideFileBarChart,
  Wallpaper,
  CloudSun,
  ScreenShareIcon,
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
          href: "/spot",
          label: "Trading Spot",
          icon: AlignHorizontalDistributeCenter,
          active: !isAdmin,
          submenus: [
          ]
        }
      ],
    },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/future",
    //       label: "Hệ Thống Giao Dịch Future",
    //       icon: ScreenShareIcon,
    //       active: !isAdmin,
    //       submenus: [
    //       ]
    //     }
    //   ],
    // },
    {
      groupLabel: "",
      menus: [
        {
          href: "/technical-analysis",
          label: "Mô Hình & Chỉ Báo RSI",
          icon: Wallpaper,
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
          label: "Nhật Kí Giao Dịch",
          icon: NotebookPen,
          active: !isAdmin,
          submenus: [
            // {
            //   href: "/big-win-order",
            //   label: "  Lệnh Thắng Quan Trọng"
            // },
            // {
            //   href: "/small-loss-order",
            //   label: "Lệnh Thua"
            // },
            {
              href: "/early-take-profit",
              label: "Các Lệnh Chốt Lời Non"
            },
            {
              href: "/missing-chance",
              label: "Bỏ Lỡ Dù Đã Thấy Cơ Hội"
            },
            {
              href: "/avoid-lossing-order",
              label: "Né Lệnh Thua Xuất Sắc"
            }
          ],
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/mentorship",
          label: "Đạo Trading",
          icon: PersonStandingIcon,
          submenus: [],
          active: !isAdmin
        }
      ]
    },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/experience-compilation",
    //       label: "Con Đường Giác Ngộ",
    //       icon: Footprints,
    //       submenus: []
    //     }
    //   ]
    // },
    {
      groupLabel: "",
      menus: [
        {
          href: "/story-telling",
          label: "Kể Chuyện",
          icon: Bird,
          submenus: []
        }
      ]
    },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/performance-report",
    //       label: "Báo Cáo Kết Quả",
    //       icon: LucideFileBarChart,
    //       submenus: [],
    //       active: !isAdmin
    //     }
    //   ]
    // },
  ];
}
