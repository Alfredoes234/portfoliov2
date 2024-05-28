import { integer, pgEnum, pgTable, serial, text, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

const skills = pgTable('skills', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }),
    img: text('img'),
    imgAlt: varchar('img-alt', { length: 256 }),
    url: text('url')
});

const projects = pgTable('projects', {
    id: serial('id').primaryKey(),
    title: varchar('title', { length: 256 }),
    brief: text('brief'),
    content: text('content'),
    img: text('img'),
    imgAlt: varchar('img-alt', { length: 256 })
})

export { skills, projects }; 