export interface DBConfig  {
  user: string;
  password: string;
  database: string;
  server: string;
  port: number;
  pool: {
    max: number;
    min: number;
    idleTimeoutMillis: number;
  },
  options: {
    encrypt: boolean;
    trustedConnection: boolean;
    trustServerCertificate: boolean;
  }
}