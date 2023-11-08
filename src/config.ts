import 'dotenv/config';

export const PORT = process.env.PORT ?? 3000;

export const typeBd = process.env.TYPE_BD ?? 'mysql';

export const host_bd = process.env.HOST_BD ?? 'localhost';

export const port_bd = process.env.PORT_BD ?? '3306';

export const user_name_bd = process.env.USER_NAME_BD ?? 'root';

export const password_bd = process.env.PASSWORD_BD ?? 'root';

export const name_bd = process.env.NAME_BD ?? 'nest-test';
