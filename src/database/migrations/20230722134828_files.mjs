/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex.schema.createTableIfNotExists("files", (table) => {
    table.bigIncrements();
    table.string("slug").notNullable();
    table.string("name").notNullable();
    table.string("mime").notNullable();
    table.string("path").notNullable();
    table.integer("size").notNullable();
    table.date("delete_at");
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    table.dateTime("updated_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  await knex.schema.dropTableIfExists("files");
};
