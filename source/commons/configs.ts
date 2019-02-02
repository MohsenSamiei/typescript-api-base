import dotenv from "dotenv";

dotenv.config();

class AppConfig {
    public port: number = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000;
}
export const appconfig: AppConfig = new AppConfig();

class EnvConfig {
    public name: string = process.env.NODE_ENV ? process.env.NODE_ENV : "development";
    public is_test: boolean = this.name === "test";
    public is_development: boolean = this.name === "development";
    public is_stage: boolean = this.name === "stage";
    public is_production: boolean = this.name === "production";
}
export const envconfig: EnvConfig = new EnvConfig();
