'use client';

import * as React from 'react';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  BriefcaseBusiness,
  PackageSearch,
  UserStar,
  CreditCard,
  Target,
  ReceiptText,
  UserCog,
  LayoutDashboard,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

// This is sample data.
// const data = {
//   user: {
//     name: 'Ryan Arago',
//     email: 'm@example.com',
//     avatar: '/avatars/shadcn.jpg',
//   },
//   teams: [
//     {
//       name: 'Acme Inc',
//       logo: GalleryVerticalEnd,
//       plan: 'Enterprise',
//     },
//     {
//       name: 'Acme Corp.',
//       logo: AudioWaveform,
//       plan: 'Startup',
//     },
//     {
//       name: 'Evil Corp.',
//       logo: Command,
//       plan: 'Free',
//     },
//   ],
//   navMain: [
//     {
//       title: 'Dashboard',
//       url: '#',
//       icon: LayoutDashboard,
//       isActive: true,
//       items: [
//         {
//           title: 'History',
//           url: '#',
//         },
//         {
//           title: 'Starred',
//           url: '#',
//         },
//         {
//           title: 'Settings',
//           url: '#',
//         },
//       ],
//     },
//     {
//       title: 'Company Management',
//       url: '/admin/company',
//       icon: BriefcaseBusiness,
//       items: [
//         {
//           title: 'Genesis',
//           url: '#',
//         },
//         {
//           title: 'Explorer',
//           url: '#',
//         },
//         {
//           title: 'Quantum',
//           url: '#',
//         },
//       ],
//     },
//     {
//       title: 'Supplier Management',
//       url: '#',
//       icon: PackageSearch,
//       items: [
//         {
//           title: 'Introduction',
//           url: '#',
//         },
//         {
//           title: 'Get Started',
//           url: '#',
//         },
//         {
//           title: 'Tutorials',
//           url: '#',
//         },
//         {
//           title: 'Changelog',
//           url: '#',
//         },
//       ],
//     },
//     {
//       title: 'Client Management',
//       url: '#',
//       icon: UserStar,
//       items: [
//         {
//           title: 'General',
//           url: '#',
//         },
//         {
//           title: 'Team',
//           url: '#',
//         },
//         {
//           title: 'Billing',
//           url: '#',
//         },
//         {
//           title: 'Limits',
//           url: '#',
//         },
//       ],
//     },
//     {
//       title: 'Bank Account Management',
//       url: '#',
//       icon: CreditCard,
//       items: [
//         {
//           title: 'General',
//           url: '#',
//         },
//         {
//           title: 'Team',
//           url: '#',
//         },
//         {
//           title: 'Billing',
//           url: '#',
//         },
//         {
//           title: 'Limits',
//           url: '#',
//         },
//       ],
//     },
//     {
//       title: 'Competitor Management',
//       url: '#',
//       icon: Target,
//       items: [
//         {
//           title: 'General',
//           url: '#',
//         },
//         {
//           title: 'Team',
//           url: '#',
//         },
//         {
//           title: 'Billing',
//           url: '#',
//         },
//         {
//           title: 'Limits',
//           url: '#',
//         },
//       ],
//     },
//     {
//       title: 'Transaction Management',
//       url: '#',
//       icon: ReceiptText,
//       items: [
//         {
//           title: 'General',
//           url: '#',
//         },
//         {
//           title: 'Team',
//           url: '#',
//         },
//         {
//           title: 'Billing',
//           url: '#',
//         },
//         {
//           title: 'Limits',
//           url: '#',
//         },
//       ],
//     },
//     {
//       title: 'User Management',
//       url: '#',
//       icon: UserCog,
//       items: [
//         {
//           title: 'General',
//           url: '#',
//         },
//         {
//           title: 'Team',
//           url: '#',
//         },
//         {
//           title: 'Billing',
//           url: '#',
//         },
//         {
//           title: 'Limits',
//           url: '#',
//         },
//       ],
//     },
//   ],
//   projects: [
//     {
//       name: 'Design Engineering',
//       url: '#',
//       icon: Frame,
//     },
//     {
//       name: 'Sales & Marketing',
//       url: '#',
//       icon: PieChart,
//     },
//     {
//       name: 'Travel',
//       url: '#',
//       icon: Map,
//     },
//   ],
// };

const sidebarData = {
  user: {
    name: 'Ryan Arago',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
    {
      name: 'Evil Corp.',
      logo: Command,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Home',
      items: [
        {
          title: 'Dashboard',
          url: '/dashboard',
          icon: LayoutDashboard,
        },
        {
          title: 'Company Management',
          url: '/dashboard/admin/company',
          icon: BriefcaseBusiness,
        },
        {
          title: 'Supplier Management',
          url: '/admin/company',
          icon: PackageSearch,
        },
        {
          title: 'Client Management',
          url: '/admin/company',
          icon: UserStar,
        },
        {
          title: 'Bank Account Management',
          url: '/admin/company',
          icon: CreditCard,
        },
        {
          title: 'Competitor Management',
          url: '/admin/company',
          icon: Target,
        },
        {
          title: 'Transaction Management',
          url: '/admin/company',
          icon: ReceiptText,
        },
        {
          title: 'User Management',
          url: '/admin/company',
          icon: UserCog,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
