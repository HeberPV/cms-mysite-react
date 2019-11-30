'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SeccionmenuSchema extends Schema {
  up () {
    this.create('seccionmenus', (table) => {
      table.increments()
      table.string('descripcion',100);
      table.timestamps()
    })
  }

  down () {
    this.drop('seccionmenus')
  }
}

module.exports = SeccionmenuSchema
