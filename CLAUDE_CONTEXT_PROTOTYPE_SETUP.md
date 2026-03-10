# Prototype Setup Context for Claude Code

This file contains exact instructions for Claude Code to replicate the prototype setup changes made to a Next.js admin dashboard template.

## Overview
Transform an existing Next.js admin dashboard into a prototype workspace with 4 specific prototypes and updated user profile.

## File Modifications Required

### 1. Update Sidebar Navigation Items
**File:** `src/navigation/sidebar/sidebar-items.ts`

#### Step 1: Update Imports
Replace the imports section with:
```typescript
import {
  Banknote,
  Calendar,
  ChartBar,
  Fingerprint,
  Forklift,
  Gauge,
  GraduationCap,
  Kanban,
  LayoutDashboard,
  Lock,
  type LucideIcon,
  Mail,
  MessageSquare,
  Presentation,
  ReceiptText,
  ShoppingBag,
  SquareArrowUpRight,
  TrendingUp,
  User,
  Users,
  Wallet,
} from "lucide-react";
```

#### Step 2: Update First Navigation Group
Replace the first navigation group (id: 1) with:
```typescript
{
  id: 1,
  label: "Prototypes",
  items: [
    {
      title: "Soham",
      url: "/dashboard/default",
      icon: User,
    },
    {
      title: "Slide check",
      url: "/dashboard/crm",
      icon: Presentation,
    },
    {
      title: "Demand monitor",
      url: "/dashboard/finance",
      icon: TrendingUp,
    },
    {
      title: "Budget tracker",
      url: "/dashboard/analytics",
      icon: Wallet,
    },
    // {
    //   title: "E-commerce",
    //   url: "/dashboard/coming-soon",
    //   icon: ShoppingBag,
    //   comingSoon: true,
    // },
    // {
    //   title: "Academy",
    //   url: "/dashboard/coming-soon",
    //   icon: GraduationCap,
    //   comingSoon: true,
    // },
    // {
    //   title: "Logistics",
    //   url: "/dashboard/coming-soon",
    //   icon: Forklift,
    //   comingSoon: true,
    // },
  ],
},
```

#### Step 3: Comment Out Other Navigation Groups
Replace navigation groups with id: 2 and id: 3 with commented versions:
```typescript
// {
//   id: 2,
//   label: "Pages",
//   items: [
//     {
//       title: "Email",
//       url: "/dashboard/coming-soon",
//       icon: Mail,
//       comingSoon: true,
//     },
//     {
//       title: "Chat",
//       url: "/dashboard/coming-soon",
//       icon: MessageSquare,
//       comingSoon: true,
//     },
//     {
//       title: "Calendar",
//       url: "/dashboard/coming-soon",
//       icon: Calendar,
//       comingSoon: true,
//     },
//     {
//       title: "Kanban",
//       url: "/dashboard/coming-soon",
//       icon: Kanban,
//       comingSoon: true,
//     },
//     {
//       title: "Invoice",
//       url: "/dashboard/coming-soon",
//       icon: ReceiptText,
//       comingSoon: true,
//     },
//     {
//       title: "Users",
//       url: "/dashboard/coming-soon",
//       icon: Users,
//       comingSoon: true,
//     },
//     {
//       title: "Roles",
//       url: "/dashboard/coming-soon",
//       icon: Lock,
//       comingSoon: true,
//     },
//     {
//       title: "Authentication",
//       url: "/auth",
//       icon: Fingerprint,
//       subItems: [
//         { title: "Login v1", url: "/auth/v1/login", newTab: true },
//         { title: "Login v2", url: "/auth/v2/login", newTab: true },
//         { title: "Register v1", url: "/auth/v1/register", newTab: true },
//         { title: "Register v2", url: "/auth/v2/register", newTab: true },
//       ],
//     },
//   ],
// },
// {
//   id: 3,
//   label: "Misc",
//   items: [
//     {
//       title: "Others",
//       url: "/dashboard/coming-soon",
//       icon: SquareArrowUpRight,
//       comingSoon: true,
//     },
//   ],
// },
```

### 2. Remove Support Card from Sidebar
**File:** `src/app/(main)/dashboard/_components/sidebar/app-sidebar.tsx`

Find the SidebarFooter section and comment out the SidebarSupportCard:
```typescript
<SidebarFooter>
  {/* <SidebarSupportCard /> */}
  <NavUser user={rootUser} />
</SidebarFooter>
```

### 3. Update User Profile Data
**File:** `src/data/users.ts`

Replace the first user object (id: "1") with:
```typescript
{
  id: "1",
  name: "Sebastian Anders",
  username: "sebastiananders",
  email: "hi@sebastian-anders.com",
  avatar: "https://avatars.githubusercontent.com/u/43849669",
  role: "administrator",
},
```

## Expected Results

After applying these changes:

1. **Sidebar Navigation:**
   - Section labeled "Prototypes" instead of "Dashboards"
   - 4 prototype items: Soham (User icon), Slide check (Presentation icon), Demand monitor (TrendingUp icon), Budget tracker (Wallet icon)
   - All other navigation items commented out but preserved

2. **Sidebar Footer:**
   - Support card ("Looking for something more?") removed
   - Only user profile displayed at bottom

3. **User Profile:**
   - Name: Sebastian Anders
   - Email: hi@sebastian-anders.com
   - Username: sebastiananders

## Routing Mapping
- **Soham** → `/dashboard/default` (existing Default dashboard content)
- **Slide check** → `/dashboard/crm` (existing CRM dashboard content)  
- **Demand monitor** → `/dashboard/finance` (existing Finance dashboard content)
- **Budget tracker** → `/dashboard/analytics` (existing Analytics dashboard content)

## Notes for Claude Code
- All changes preserve existing dashboard content - only navigation labels and icons are updated
- Commented code can be easily restored by uncommenting
- Icons are from Lucide React library (already installed in the template)
- Changes maintain existing TypeScript types and interfaces
- No new dependencies required

## Verification
After making these changes:
1. Run `npm run dev` to start development server
2. Verify sidebar shows only "Prototypes" section with 4 items
3. Verify user profile shows "Sebastian Anders" 
4. Verify no support card appears above user profile
5. Confirm all prototype links navigate to existing dashboard pages

## Context Usage
To use this context in a new project, provide this entire file to Claude Code with the instruction: "Apply all the changes documented in this context file to transform this admin dashboard into the prototype workspace."