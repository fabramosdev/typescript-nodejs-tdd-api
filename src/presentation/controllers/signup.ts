import { HttpRequest, HttpResponse, Controller, EmailValidator } from '../protocols'
import { MissingParamError, InvalidParamError, ServerError } from '../errors'
import { badRequest } from '../helpers/http-helper'


export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  
  constructor(emailValidator: EmailValidator) {
    this.emailValidator = emailValidator  
  }

  handle(httpRequest: HttpRequest): HttpResponse {

    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    try {
      for(const field of requiredFields) {
        if(!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        } 
      }
      const isValid = this.emailValidator.isValid(httpRequest.body.email)
        if(!isValid) {
          return badRequest(new InvalidParamError('email'))
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return {
        statusCode: 500,
        body: new ServerError()
      }
    }
  }
}