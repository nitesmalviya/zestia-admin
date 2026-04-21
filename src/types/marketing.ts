export type CouponForm = {
  code: string;
  type: string;
  value: string;
  applies: string;
  duration: string;
  expiry: string;
  maxUses: number;
  perUser: number;
};

export type AffiliateForm = {
  name: string;
  email: string;
  handle: string;
  type: string;
  commissionRate: string;
};
