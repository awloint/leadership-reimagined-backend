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
      '24490'
    )

    //send email
    Email.sendWithoutAttachment(
      delegate.firstName,
      delegate.lastName,
      delegate.email,
      'African Women in Leadership Organisation',
      'info@awlo.org',
      'Workplace Inequality - Aligning you as a brand to purposefully disrupt the system.',
      textBody(delegate.firstName, delegate.lastName),
      htmlBody(delegate.firstName, delegate.lastName)
    )
  }
}

module.exports = NotifyService
