'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('header','HeaderController.index');
Route.post('header/Add','HeaderController.store');
Route.put('header/Edit/:id','HeaderController.update');
Route.delete('header/Delete/:id','HeaderController.destroy');

Route.get('body','BodyController.index');
Route.post('body/Add','BodyController.store');
Route.put('body/Edit/:id','BodyController.update');
Route.delete('body/Delete/:id','BodyController.destroy');

Route.get('footer','FooterController.index');
Route.post('footer/Add','FooterController.store');
Route.put('footer/Edit/:id','FooterController.update');
Route.delete('footer/Delete/:id','FooterController.destroy');

Route.get('menu','MenuController.index');
Route.post('menu/Add','MenuController.store');
Route.put('menu/Edit/:id','MenuController.update');
Route.delete('menu/Delete/:id','MenuController.destroy');

Route.get('img','ImgController.index');
Route.post('img/Add','ImgController.store');
Route.put('img/Edit/:id','ImgController.update');
Route.delete('img/Delete/:id','ImgController.destroy');

Route.get('contacto','ContactoController.index');
Route.post('contacto/Add','ContactoController.store');
Route.put('contacto/Edit/:id','ContactoController.update');
Route.delete('contacto/Delete/:id','ContactoController.destroy');

Route.get('seccionmenu','SeccionmenuController.index');
Route.post('seccionmenu/Add','SeccionmenuController.store');
Route.put('seccionmenu/Edit/:id','SeccionmenuController.update');
Route.delete('seccionmenu/Delete/:id','SeccionmenuController.destroy');

Route.get('srcmenu','SrcmenuController.index');
Route.post('srcmenu/Add','SrcmenuController.store');
Route.put('srcmenu/Edit/:id','SrcmenuController.update');
Route.delete('srcmenu/Delete/:id','SrcmenuController.destroy');

Route.get('seccioncont','SeccioncontController.index');
Route.post('seccioncont/Add','SeccioncontController.store');
Route.put('seccioncont/Edit/:id','SeccioncontController.update');
Route.delete('seccioncont/Delete/:id','SeccioncontController.destroy');

