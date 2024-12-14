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
  Annually = "annually",
  Monthly = "monthly",
  Weekly = "weekly",
}
