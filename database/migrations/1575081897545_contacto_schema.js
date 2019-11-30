'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactoSchema extends Schema {
  up () {
    this.create('contactos', (table) => {
      table.increments()
      table.integer('idFooter',10);
      table.integer('idSeccionCont',10);
      table.timestamps()
    })
  }

  down () {
    this.drop('contactos')
  }
}

module.exports = ContactoSchema
