import {
  // Sprout,
  LucideIcon,
  AlignHorizontalDistributeCenter,
  // FileQuestionIcon,
  PersonStandingIcon,
  // Bird,
  NotebookPen,
  // Footprints,
  // Star,
  LucideFileBarChart,
  Wallpaper,
  CloudSun,
  // Ban,
  // BellRing
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
          href: "",
          label: "Hệ Thống Giao Dịch",
          icon: AlignHorizontalDistributeCenter,
            active: !isAdmin,
          submenus: [
            {
              href: "/trade-entry-conditions",
              label: "Tiêu Chí Vào Lệnh"
            },
            {
              href: "/during-trade-execution",
              label: "Khi Đã Vào Lệnh"
            }
          ]
        }
      ],
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Hệ Thống Đầu Tư",
          icon: CloudSun,
          active: !isAdmin,
          submenus: [
            {
              href: "/bitcoin",
              label: "Bitcoin ( BTC )"
            },
            {
              href: "/solana",
              label: "Solana ( SOL )"
            },
            {
              href: "/pepe",
              label: "Pepe"
            }
          ],
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
            {
              href: "/overview-market",
              label: "Tổng quan thị trường"
            },
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
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/trading-psychology",
    //       label: "Tâm Lý Giao Dịch",
    //       icon: Sprout,
    //       submenus: []
    //     }
    //   ]
    // },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/mindset-strategy",
    //       label: "Tư Duy & Chiến Thuật",
    //       icon: Bird,
    //       submenus: []
    //     }
    //   ]
    // },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/statistic",
    //       label: "Thống Kê Chuỗi Lệnh",
    //       icon: Star,
    //       submenus: [],
    //       active: !isAdmin
    //     }
    //   ]
    // },
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
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/serious-mistake",
    //       label: "Những Sai Lầm Nghiêm Trọng",
    //       icon: Ban,
    //       submenus: []
    //     }
    //   ]
    // },
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
 
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/important-notes",
    //       label: "Lưu Ý Quan Trọng",
    //       icon: BellRing,
    //       submenus: []
    //     }
    //   ]
    // },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/technical-question",
    //       label: "Hỏi Xoáy Đáp Xoay",
    //       icon: FileQuestionIcon,
    //       submenus: []
    //     }
    //   ]
    // },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/story-telling",
    //       label: "Những Câu Chuyện Hay",
    //       icon: Bird,
    //       submenus: []
    //     }
    //   ]
    // },
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/experience-compilation",
    //       label: "Tổng Hợp Kinh Nghiệm",
    //       icon: Footprints,
    //       submenus: []
    //     }
    //   ]
    // }
  ];
}
