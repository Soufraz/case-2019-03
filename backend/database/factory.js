'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Doctor', (faker) => {
  return {
    name: faker.name()
  }
})

Factory.blueprint('App/Models/Patient', (faker) => {
  return {
    name: faker.name()
  }
})
