interface ImportMetaEnv {
  readonly app_name: string;
  readonly app_env: string;
  readonly PUBLIC_APPWRITE_APIKEY: string;
  readonly PUBLIC_APPWRITE_BLOG: string;
  readonly PUBLIC_APPWRITE_POSTS: string;
  readonly PUBLIC_APP_ROUTE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
