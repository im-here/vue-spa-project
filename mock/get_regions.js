const faker = require('faker')
faker.locale = 'zh_CN'

module.exports = {
  api: '/mock/edu_rest/acquire_campus/:id',
  response: function (req, res) {
    res.json({
      rlt: 'true',
      msg: 'ok',
      data: [
        { id: faker.random.uuid(), name: faker.random.words() },
        { id: faker.random.uuid(), name: faker.random.words() },
        { id: faker.random.uuid(), name: faker.random.words() }
      ]
    })
  }
}
