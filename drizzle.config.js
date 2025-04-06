export default {

    schema: './src/db/schema.js',

    out: './drizzle',

    dialect: 'postgresql',

    dbCredentials: {

        ssl: false,

        host: '127.0.0.1',

        port: 5432,

        user: 'nodejs_course_admin',

        password: 'my_password',

        database: 'nodejs_course_database',

    },

};