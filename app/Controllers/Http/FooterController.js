'use strict'
const Footer = use('App/Models/Footer.js');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with footers
 */
class FooterController {
  /**
   * Show a list of all footers.
   * GET footers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Footer.all());
  }

  /**
   * Render a form to be used for creating a new footer.
   * GET footers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new footer.
   * POST footers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Footer.create(request.all());
    return response.json('Creado');
  }

  /**
   * Display a single footer.
   * GET footers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing footer.
   * GET footers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update footer details.
   * PUT or PATCH footers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let footer = await  Footer.find(params.id);
    footer.merge(request.all());
    await  footer.save();
    return response.json('Editado');
  }

  /**
   * Delete a footer with id.
   * DELETE footers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let footer = await Footer.find(params.id);
    await footer.delete();
    return response.json('Eliminado');
  }
}

module.exports = FooterController
