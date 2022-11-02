export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_PORT: number;
      KEYCLOAK_CLIENT_ID: string;
      KEYCLOAK_SERVER_URL: string;
      KEYCLOAK_REALM: string;
      KEYCLOAK_CLIENT_SECRET: string;
    }
  }
}
