export const EnvConfiguration = () => ({
  db_host: process.env.DB_HOST,
  db_port: +process.env.DB_PORT,
  db_name: process.env.DB_NAME,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  port: +process.env.PORT,
  salt_encrit_password: +process.env.SALT_ENCRIT_PASSWORD,
  auth_token_secret: process.env.AUTH_TOKEN_SECRET,
});

export const enviroment = {
  salt_password: +process.env.SALT_ENCRIT_PASSWORD,
  auth_token_secret: process.env.AUTH_TOKEN_SECRET,
};
