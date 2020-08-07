require('dotenv').config()
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
      ${process.env.mailjetListId}
    )

    //send email
    Email.sendWithoutAttachment(
      delegate.firstName,
      delegate.lastName,
      delegate.email,
      'African Women in Leadership Organisation',
      'info@awlo.org',
      'De-Culturing Rape in Africa and Finding effective solutions for Victims.',
      textBody(delegate.firstName, delegate.lastName),
      htmlBody(delegate.firstName, delegate.lastName)
    )
  }
}

module.exports = NotifyService
