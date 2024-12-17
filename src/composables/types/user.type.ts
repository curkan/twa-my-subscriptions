export interface IUser {
  id: number;
  settings: IUserSettings;
  photo_url?: string;
}

export interface IUserSettings {
  notify_to_bot: boolean;
}
