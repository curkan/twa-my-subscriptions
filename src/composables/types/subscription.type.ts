export interface ISubscription {
  id: number;
  title: string;
  amount: number;
  currency: string;
  start_at: string;
  period: EPeriod;
  pan?: string;
}

export enum EPeriod {
  annually = "annually",
  monthly = "monthly",
  weekly = "weekly",
}
