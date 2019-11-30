'use strict'
const Contacto = use('App/Models/Contacto.js');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with contactos
 */
class ContactoController {
  /**
   * Show a list of all contactos.
   * GET contactos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Contacto.all());
  }

  /**
   * Render a form to be used for creating a new contacto.
   * GET contactos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new contacto.
   * POST contactos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Contacto.create(request.all());
    return response.json('Creado');
  }

  /**
   * Display a single contacto.
   * GET contactos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing contacto.
   * GET contactos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update contacto details.
   * PUT or PATCH contactos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let contacto = await  Contacto.find(params.id);
    contacto.merge(request.all());
    await  contacto.save();
    return response.json('Editado');
  }

  /**
   * Delete a contacto with id.
   * DELETE contactos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let contacto = await Contacto.find(params.id);
    await contacto.delete();
    return response.json('Eliminado');
  }
}

module.exports = ContactoController
