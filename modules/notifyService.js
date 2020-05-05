const Newsletter = require('./newsletter')
const Email = require('./email')
const { htmlBody, textBody } = require('../emails/registrationSuccessful')
const Delegate = require('../models/delegate')

class NotifyService {
  static email_delegate (delegate) {
    const name = `${delegate.firstName} ${delegate.lastName}`

    //add user to mailing list
    Newsletter.addToList(
      delegate.firstName,
      delegate.lastName,
      name,
      delegate.email,
      delegate.phone,
      '19008'
    )

    //send email
    Email.sendWithoutAttachment(
      delegate.firstName,
      delegate.lastName,
      delegate.email,
      'African Women in Leadership Organisation',
      'info@awlo.org',
      'Women in the Frontline In Crisis Time: Rethinking Impact And The Challenges Of Leadership',
      textBody(delegate.firstName, delegate.lastName),
      htmlBody(delegate.firstName, delegate.lastName)
    )
  }
}

module.exports = NotifyService
