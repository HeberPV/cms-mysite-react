'use strict'
const Srcimg = use('App/Models/Srcimg.js');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with srcimgs
 */
class SrcimgController {
  /**
   * Show a list of all srcimgs.
   * GET srcimgs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return response.json(await Srcimg.all());
  }

  /**
   * Render a form to be used for creating a new srcimg.
   * GET srcimgs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new srcimg.
   * POST srcimgs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Srcimg.create(request.all());
    return response.json('Creado');
  }

  /**
   * Display a single srcimg.
   * GET srcimgs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing srcimg.
   * GET srcimgs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update srcimg details.
   * PUT or PATCH srcimgs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let srcimg = await  Srcimg.find(params.id);
    srcimg.merge(request.all());
    await  srcimg.save();
    return response.json('Editado');
  }

  /**
   * Delete a srcimg with id.
   * DELETE srcimgs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let srcimg = await Srcimg.find(params.id);
    await srcimg.delete();
    return response.json('Eliminado');
  }
}

module.exports = SrcimgController
