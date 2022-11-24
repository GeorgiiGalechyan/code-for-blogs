const targets = [
  {
    target: 'pino/file',
    options: {
      name: 'prod-local',
      level: 'info',
      destination: './pino/logs/prod.log'
    },
  },
  // {
  //   target: 'pino/file',
  //   options: {
  //     name: 'prod-elk',
  //     level: 'info',
  //   },
  // },
]

export default {
  transport: {
    targets
  },
}

const test = false
