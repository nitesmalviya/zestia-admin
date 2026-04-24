import { NavItem } from '@/types/navigation';
import { DocumentIcon, ExerciseLvcIcon, ExecutiveIcon, NotificationsIcon, UserLookupIcon, UserSubscriptionsIcon } from '@/components/icons/sidebar-icons';

export const PUBLIC_PATH = {
  LOGIN: "/login",
};

export const PRIVATE_PATH = {
  HOME: "/executive-snapshot",
  EXECUTIVE_SNAPSHOT: "/executive-snapshot",
  USERS: "/users",
  REVENUE: "/revenue",
  ONBOARDING: "/onboarding",
  NOTIFICATIONS: "/notifications-activity",
  EXERCISE_LVC: "/exercise-lvc",
  USER_LOOKUP: "/user-lookup",
  AFFILIATES: "/affiliates",
  COUPONS: "/coupons",
};

export const ROUTES_PATH = {
  ...PUBLIC_PATH,
  ...PRIVATE_PATH
};

export const pagePerOptions = [5, 10, 25];
export const limit = 10;

/* Sidebar navigation grouped by section */

export const NAV_SECTIONS = ['OVERVIEW', 'USERS', 'PRODUCT', 'TOOLS'] as const;

export const NAV: NavItem[] = [
  // OVERVIEW
  { id: 'executive-snapshot', label: 'Executive Snapshot', icon: ExecutiveIcon, iconSize: 14, href: '/executive-snapshot', section: 'OVERVIEW' },
  // USERS
  { id: 'users', label: 'Users & Subscriptions', icon: UserSubscriptionsIcon, iconSize: 14, href: '/users', section: 'USERS' },
  { id: 'revenue', label: 'Revenue', icon: DocumentIcon, iconSize: 18, href: '/revenue', section: 'USERS' },
  // PRODUCT
  { id: 'onboarding', label: 'Onboarding', icon: UserSubscriptionsIcon, iconSize: 14, href: '/onboarding', section: 'PRODUCT' },
  { id: 'notifications', label: 'Notifications & Activity', icon: NotificationsIcon, iconSize: 18, href: '/notifications-activity', section: 'PRODUCT' },
  { id: 'exercise', label: 'Exercise & LVC', icon: ExerciseLvcIcon, iconSize: 18, href: '/exercise-lvc', section: 'PRODUCT' },
  // TOOLS
  { id: 'user-lookup', label: 'User Lookup', icon: UserLookupIcon, iconSize: 18, href: '/user-lookup', section: 'TOOLS' },
];


export const formatDate = (dateString?: string | null) => {
  if (!dateString) return "-";

  const date = new Date(dateString);

  if (isNaN(date.getTime())) return "-"; // invalid date safety

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};


export const formatNumber = (num: number) =>
  new Intl.NumberFormat('en-IN').format(num);

export const formatLabel = (text: string) => {
  return text.replace(/-/g, ' ');
};