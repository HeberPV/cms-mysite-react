'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HeaderSchema extends Schema {
  up () {
    this.create('headers', (table) => {
      table.increments()
      table.string('titulo',300);
      table.string('subtitulo',300);
      table.string('img',300);
      table.timestamps()
    })
  }

  down () {
    this.drop('headers')
  }
}

module.exports = HeaderSchema
