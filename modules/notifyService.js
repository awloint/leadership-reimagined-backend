const Newsletter = require('./newsletter')
const Email = require('./email')
const { htmlBody, textBody } = require('../emails/registrationSuccessful')
const { Delegate } = require('../models/delegate')

class NotifyService {
  static email_delegate (delegate) {
    const name = `${volunteer.firstName} ${volunteer.lastName}`

    //add user to mailing list
    Newsletter.addToList(
      volunteer.firstName,
      volunteer.lastName,
      name,
      volunteer.email,
      volunteer.phone,
      '19008'
    )

    //send email
    Email.sendWithoutAttachment(
      volunteer.firstName,
      volunteer.lastName,
      volunteer.email,
      'African Women in Leadership Organisation',
      'info@awlo.org',
      'Women in the Frontline In Crisis Time: Rethinking Impact And The Challenges Of Leadership',
      textBody(volunteer.firstName, volunteer.lastName),
      htmlBody(volunteer.firstName, volunteer.lastName)
    )
  }
}

module.exports = NotifyService
