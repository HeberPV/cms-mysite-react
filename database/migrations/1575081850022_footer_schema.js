'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FooterSchema extends Schema {
  up () {
    this.create('footers', (table) => {
      table.increments()
      table.string('descripcion',300);
      table.timestamps()
    })
  }

  down () {
    this.drop('footers')
  }
}

module.exports = FooterSchema
