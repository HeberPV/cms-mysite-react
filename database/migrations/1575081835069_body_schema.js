'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BodySchema extends Schema {
  up () {
    this.create('bodies', (table) => {
      table.increments()
      table.string('titulo',300);
      table.string('descripcion',1000);
      table.timestamps()
    })
  }

  down () {
    this.drop('bodies')
  }
}

module.exports = BodySchema
