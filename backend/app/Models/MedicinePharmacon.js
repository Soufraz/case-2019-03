'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MedicinePharmacon extends Model {
  static get table () {
    return 'medicine_pharmacon'
  }

  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = MedicinePharmacon
