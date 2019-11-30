'use strict'
const Seccioncont = use('App/Models/Seccioncont.js');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with seccionconts
 */
class SeccioncontController {
  /**
   * Show a list of all seccionconts.
   * GET seccionconts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Seccioncont.all());
  }

  /**
   * Render a form to be used for creating a new seccioncont.
   * GET seccionconts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new seccioncont.
   * POST seccionconts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Seccioncont.create(request.all());
    return response.json('Creado');
  }

  /**
   * Display a single seccioncont.
   * GET seccionconts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing seccioncont.
   * GET seccionconts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update seccioncont details.
   * PUT or PATCH seccionconts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let seccioncont = await  Seccioncont.find(params.id);
    seccioncont.merge(request.all());
    await  seccioncont.save();
    return response.json('Editado');
  }

  /**
   * Delete a seccioncont with id.
   * DELETE seccionconts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let seccioncont = await Seccioncont.find(params.id);
    await seccioncont.delete();
    return response.json('Eliminado');
  }
}

module.exports = SeccioncontController
