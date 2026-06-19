"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menu-list";
import { usePathname } from "next/navigation";
import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CollapseMenuButton } from "@/components/admin-panel/collapse-menu-button";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

interface MenuProps {
  isOpen: boolean | undefined;
}

// Constants
const HOVER_COLOR = "group-hover:text-[#f67373]";
const TRANSITION = "transition-colors duration-300";
const ICON_SIZE = 18;
const COLLAPSED_CLASSES = "-translate-x-96 opacity-0";
const EXPANDED_CLASSES = "translate-x-0 opacity-100";

// Helpers
const getIsActive = (active: boolean | undefined, pathname: string, href: string): boolean =>
  (active === undefined && pathname.startsWith(href)) || active === true;

const getVisibilityClasses = (isOpen: boolean | undefined, collapsed: string, expanded: string) =>
  isOpen === false ? collapsed : expanded;

// Sub-components
const GroupLabel = ({ groupLabel, isOpen }: { groupLabel: string; isOpen: boolean | undefined }) => {
  if (!groupLabel) return null;
  
  if ((isOpen && groupLabel) || isOpen === undefined) {
    return (
      <p className={cn("text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate", TRANSITION, HOVER_COLOR)}>
        {groupLabel}
      </p>
    );
  }

  if (!isOpen && isOpen !== undefined && groupLabel) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger className="w-full">
            <div className="w-full flex justify-center items-center">
              <Ellipsis className="h-5 w-5" />
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">{groupLabel}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return <p className="pb-2" />;
};

const MenuItem = ({ href, label, Icon, active, pathname, isOpen }: any) => {
  const isActive = getIsActive(active, pathname, href);
  const hiddenClasses = getVisibilityClasses(isOpen, "", "mr-4");
  const labelClasses = getVisibilityClasses(isOpen, COLLAPSED_CLASSES, `${EXPANDED_CLASSES} ${HOVER_COLOR}`);

  return (
    <div className="w-full">
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <Button
              variant={isActive ? "secondary" : "ghost"}
              className="w-full justify-start h-10 mb-1 group"
              asChild
            >
              {!active && (
                <Link href={href}>
                  <span className={cn("transition-transform duration-300 group-hover:rotate-12", HOVER_COLOR, hiddenClasses)}>
                    <Icon size={ICON_SIZE} />
                  </span>
                  <p className={cn("max-w-[200px] truncate", TRANSITION, labelClasses)}>
                    {label}
                  </p>
                </Link>
              )}
            </Button>
          </TooltipTrigger>
          {isOpen === false && <TooltipContent side="right">{label}</TooltipContent>}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export function Menu({ isOpen }: MenuProps) {
  const pathname = usePathname();
  const menuList = getMenuList();

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
              <GroupLabel groupLabel={groupLabel} isOpen={isOpen} />
              {menus.map(({ href, label, icon: Icon, active, submenus }, idx) =>
                !submenus || submenus.length === 0 ? (
                  <MenuItem
                    key={idx}
                    href={href}
                    label={label}
                    Icon={Icon}
                    active={active}
                    pathname={pathname}
                    isOpen={isOpen}
                  />
                ) : (
                  !active && (
                    <CollapseMenuButton
                      key={idx}
                      icon={Icon}
                      label={label}
                      active={getIsActive(active, pathname, href)}
                      submenus={submenus}
                      isOpen={isOpen}
                    />
                  )
                )
              )}
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  );
}
