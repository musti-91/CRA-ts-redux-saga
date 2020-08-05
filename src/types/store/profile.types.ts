export interface IProfile {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: string[];
  product: string;
  type: string;
  uri: string;
}
export interface IProfileState {
  loading: boolean;
  data?: IProfile;
  error: any;
}
