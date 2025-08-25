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
          href: "/trade-entry-conditions",
          label: "Hệ Thống Giao Dịch SPOT",
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
          href: "/future",
          label: "Hệ Thống Giao Dịch Future",
          icon: ScreenShareIcon,
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
          href: "",
          label: "Nhật Kí Giao Dịch",
          icon: NotebookPen,
          active: !isAdmin,
          submenus: [
            {
              href: "/big-loss-order",
              label: "Các Lệnh Thua Lỗ Lớn"
            },
            {
              href: "/small-loss-order",
              label: "Các Lệnh Thua Lỗ Nhỏ"
            },
            {
              href: "/early-take-profit",
              label: "Các Lệnh Chốt Lời Non"
            },
            {
              href: "/big-win-order",
              label: "Các Lệnh Thắng Lớn"
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
          href: "/technical-analysis",
          label: "Phân Tích Kĩ Thuật",
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
          href: "/mentorship",
          label: "Tầm Sư Học Đạo",
          icon: PersonStandingIcon,
          submenus: [],
          active: !isAdmin
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/experience-compilation",
          label: "Con Đường Giác Ngộ",
          icon: Footprints,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/story-telling",
          label: "Những Câu Chuyện Hay",
          icon: Bird,
          submenus: []
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
