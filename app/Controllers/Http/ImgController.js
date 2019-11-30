'use strict'
const Img = use('App/Models/Img.js');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with imgs
 */
class ImgController {
  /**
   * Show a list of all imgs.
   * GET imgs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Img.all());
  }

  /**
   * Render a form to be used for creating a new img.
   * GET imgs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new img.
   * POST imgs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Img.create(request.all());
    return response.json('Creado');
  }

  /**
   * Display a single img.
   * GET imgs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing img.
   * GET imgs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update img details.
   * PUT or PATCH imgs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let img = await  Img.find(params.id);
    img.merge(request.all());
    await  img.save();
    return response.json('Editado');
  }

  /**
   * Delete a img with id.
   * DELETE imgs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let img = await Img.find(params.id);
    await img.delete();
    return response.json('Eliminado');
  }
}

module.exports = ImgController
