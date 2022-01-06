import { Knex } from "knex";

const KNEX_CONFIG_CLIENT = "postgresql";

export class KnexConfig {
  private getConnection(): Knex.ConnectionConfig {
    return { host: "", database: "", user: "", password: "" };
  }

  getConfig(): Knex.Config {
    const connection = this.getConnection();
    return {
      client: KNEX_CONFIG_CLIENT,
      connection,
    };
  }
}
