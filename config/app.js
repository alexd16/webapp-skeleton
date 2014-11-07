var rootPath = process.cwd();
module.exports = {
  name: 'AppName',
  rootPath: rootPath,
  srcPath: rootPath+'/app',
  distPath: rootPath+'/dist',
  tasks: ['clean', 'scripts', 'styles', 'fonts', 'images', 'templates', 'htmlBuild', 'server'],
  apiPrefix: '/api',
  apiProxy: {
    enabled: true,
    host: 'http://localhost:3000',
  }
};