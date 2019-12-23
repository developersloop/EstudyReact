const winston = require('winston');

const logger = winston.createLogger({
        level: 'error',
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [new winston.transports.File({level: 'info' , filename: 'api.log'})]
  });

module.exports = logger;

 

