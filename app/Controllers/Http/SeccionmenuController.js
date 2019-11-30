'use strict'
const Seccionmenu = use('App/Models/Seccionmenu.js');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with seccionmenus
 */
class SeccionmenuController {
  /**
   * Show a list of all seccionmenus.
   * GET seccionmenus
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Seccionmenu.all());
  }

  /**
   * Render a form to be used for creating a new seccionmenu.
   * GET seccionmenus/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new seccionmenu.
   * POST seccionmenus
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Seccionmenu.create(request.all());
    return response.json('Creado');
  }

  /**
   * Display a single seccionmenu.
   * GET seccionmenus/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing seccionmenu.
   * GET seccionmenus/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update seccionmenu details.
   * PUT or PATCH seccionmenus/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let seccionmenu = await  Seccionmenu.find(params.id);
    seccionmenu.merge(request.all());
    await  seccionmenu.save();
    return response.json('Editado');
  }

  /**
   * Delete a seccionmenu with id.
   * DELETE seccionmenus/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let seccionmenu = await Seccionmenu.find(params.id);
    await seccionmenu.delete();
    return response.json('Eliminado');
  }
}

module.exports = SeccionmenuController
