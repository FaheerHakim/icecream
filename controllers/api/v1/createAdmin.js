const createAdmin = require('../../../models/User');

const bcrypt = require('bcrypt')

const createAdmin = async () => {
    const password = await bcrypt.hash('12345', 10)
    await User.create({ email: 'joris@thomasMore.be', password })
    console.log('Admin aangemaakt!')
}

createAdmin()