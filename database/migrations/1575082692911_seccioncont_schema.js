'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SeccioncontSchema extends Schema {
  up () {
    this.create('seccionconts', (table) => {
      table.increments()
      table.string('srcImg',1000);
      table.string('href',1000);
      table.timestamps()
    })
  }

  down () {
    this.drop('seccionconts')
  }
}

module.exports = SeccioncontSchema
