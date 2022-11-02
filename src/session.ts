import Keycloak, { KeycloakConfig } from "keycloak-connect";
import session from "express-session";

export class KeycloakSession {
  private keycloak: Keycloak.Keycloak;
  constructor() {
    this.keycloak = KeycloakSession.init();
  }

  public static init() {
    const memoryStore = new session.MemoryStore();
    const keycloakConfig: KeycloakConfig = {
      "bearer-only": true,
      "auth-server-url": process.env.KEYCLOAK_SERVER_URL,
      "ssl-required": "external",
      realm: process.env.KEYCLOAK_REALM,
      "confidential-port": 0,
      resource: process.env.KEYCLOAK_CLIENT_ID,
    };
    return new Keycloak({ store: memoryStore }, keycloakConfig);
  }
}
