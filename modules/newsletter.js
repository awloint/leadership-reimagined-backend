require('dotenv').config()
const mailjet = require('node-mailjet').connect(
  process.env.mailjetPublicKey,
  process.env.mailjetSecretKey
)

class Newsletter {
  static addToList (firstName, lastName, name, email, phone, list) {
    mailjet
      .post('contactslist', { version: 'v3' })
      .id(list)
      .action('managemanycontacts')
      .request({
        Action: 'addnoforce',
        Contacts: [
          {
            Email: email,
            IsExcludedFromCampaigns: 'false',
            Name: name,
            Properties: {
              firstname: firstname,
              lastname: lastname,
              phone: phone
            }
          }
        ]
      })
      .then(result => {
        console.log(result.body)
      })
      .catch(err => {
        console.log(err.statusCode)
      })
  }
}
