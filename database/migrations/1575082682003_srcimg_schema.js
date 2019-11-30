'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SrcimgSchema extends Schema {
  up () {
    this.create('srcimgs', (table) => {
      table.increments()
      table.string('src',100);
      table.timestamps()
    })
  }

  down () {
    this.drop('srcimgs')
  }
}

module.exports = SrcimgSchema
