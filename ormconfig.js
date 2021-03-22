const rootDir = process.env.NODE_ENV === 'production' ? './dist' : './src';

module.exports = [
  {
  name: 'default',
  type: 'mongodb',
  url: process.env.MONGODB_URL,
  useNewUrlParser: true,
  logging: !!(process.env.NODE_ENV !== 'production'),
  useUnifiedTopology: true,
  entities: [`${rootDir}/modules/**/infra/typeorm/schemas/*.{js,ts}`]
  }
]
