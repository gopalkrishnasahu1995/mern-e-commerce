import express from 'express'
import createError, { HttpError } from 'http-errors'
import { RegisterRoutes } from '../swaggerApi/routes'
import logger from './utils/Logger'
import { setup, serve } from 'swagger-ui-express'
import swaggerDocument from '../swaggerApi/swagger.json'
import config from './config/app'
import { ValidateError } from 'tsoa'

import './controllers/UserController'
import path from 'path'

class App {
  public app: express.Express

  constructor() {
    this.app = express()
    this.setup()
  }

  private setup(): void {
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    )
    RegisterRoutes(this.app)
    this.app.use(express.json())
    this.app.use(config.swagger, serve, setup(swaggerDocument))

    this.app.use(express.static(path.resolve(__dirname, '../', 'client/build')))
    this.app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../', 'client/build/index.html'))
    })

    //tsoa error handling
    this.app.use(function errorHandler(
      err: unknown,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ): express.Response | void {
      if (err instanceof ValidateError) {
        console.warn(`Caught Validation Error for ${req.path}:`, err.fields)
        return res.status(422).json({
          message: 'Validation Failed',
          details: err?.fields,
        })
      }
      if (err instanceof Error) {
        return res.status(500).json({
          message: 'Internal Server Error',
        })
      }

      next()
    })

    // catch 404 and forward to error handler
    this.app.use(
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        next(createError(404))
      }
    )

    // error handler which is a middleware
    this.app.use(
      (err: HttpError, req: express.Request, res: express.Response) => {
        // set locals, only providing error in development
        logger.error(err)
        res.locals.message = err.message
        res.locals.error =
          req.app.get('env') === 'development' ? err : 'Some error ocurred'
        // Util has a method that can convert an error to String for Json conversion
        const errorResponse = {
          // Error: utils.errorStringify(res.locals.error, null, "\t"),
          Error: res.locals.error,
        }
        // render the error page
        res.status(err.status || 500)

        // TODO  Sending the Stringified error trace back to  caller, ideally you wont do this in prod
        res.json(errorResponse)
      }
    )
  }
}
export default new App().app
