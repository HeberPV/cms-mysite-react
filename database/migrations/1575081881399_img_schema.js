'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImgSchema extends Schema {
  up () {
    this.create('imgs', (table) => {
      table.increments()
      table.integer('idSrc',10);
      table.integer('idBody',10);
      table.timestamps()
    })
  }

  down () {
    this.drop('imgs')
  }
}

module.exports = ImgSchema
