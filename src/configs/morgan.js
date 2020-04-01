import morgan from 'morgan';
import json from 'morgan-json';

const format = json({
  short: ':method :url :status',
  length: ':res[content-length]',
  'response-time': ':response-time ms'
});

export default morgan(format);
