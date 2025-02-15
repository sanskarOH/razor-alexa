import express from 'express'
import routes from '../api/index.ts'
import config from '../config/index.ts'

export default ({app}: {app : express.Application} ): void =>{
    app.use(config.api.prefix , routes())
}