const targets = [
  {
    target: 'pino-pretty',
    options: {
      name: 'dev-terminal',
      level: 'error', // It should be 'error', but it works as 'info' (default value)

      // setting pino-pretty
      colorize: true,
      levelFirst: true,
      include: 'level,time,',
      translateTime: 'yyyy-mm-dd HH:MM:ss Z',
    },
  },
  {
    target: 'pino/file',
    options: {
      name: 'dev-local-file',
      level: 'fatal', // It should be 'error', but it works as 'info' (default value)
      destination: './pino/logs/dev.log',
      mkdir: true,
    },
  },
]

export default {
  transport: {
    targets,
  },
}
