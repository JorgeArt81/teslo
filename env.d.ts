namespace NodeJS {
  interface ProcessEnv {
    PORT: string;

    // Add your own environment variables here
    API_PORT: string;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB: string;
    POSTGRES_PORT: string;
    POSTGRES_HOST: string;
    POSTGRES_SYNC: string;
  }
}
