"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import Image from "next/image";
// Menu items.
const items = [
  { title: "Home", href: "/dashboard", icon: "home.png" },
  { title: "My Courses", href: "/dashboard/courses", icon: "courses.png" },
  { title: "Projects", href: "/dashboard/projects", icon: "projects.png" },
  { title: "Profile", href: "/dashboard/profile", icon: "pro.png" },
  { title: "Labs", href: "/dashboard/labs", icon: "schedule.png" },
  { title: "Schedule", href: "/dashboard/schedule", icon: "community.png" },
  { title: "Community", href: "/dashboard/community", icon: "collab.png" },
  { title: "Collab", href: "/dashboard/collab", icon: "labs.png" },
];
export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className="absolute flex flex-col items-center py-2 px-2 h-screen  md:min-h-screen w-[18rem] overflow-auto md:relative md:w-[16rem] md:h-auto md:max-h-none">
      <SidebarContent className="w-full">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-center text-sky-400">
          codebite
        </h1>
        <SidebarGroup>
          <SidebarGroupLabel className="sr-only">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-6">
              {items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className={cn(
                        "w-full flex items-center gap-2 px-6 py-6 rounded-md text-lg font-semibold",
                        isActive
                          ? "bg-lime-100 text-lime-700 border border-lime-300"
                          : "text-gray-500 hover:bg-gray-100"
                      )}
                    >
                      <a href={item.href} className="flex items-center gap-3">
                        {/* Using Image component for icons */}
                        <Image
                          src={`/icons/${item.icon}`}
                          alt={item.title}
                          width={24}
                          height={24}
                          className="w-10 h-10"
                        />
                        <span className="ml-3">{item.title.toUpperCase()}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
