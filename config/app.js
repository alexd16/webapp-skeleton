var rootPath = process.cwd();
module.exports = {
  name: 'AppName',
  rootPath: rootPath,
  srcPath: rootPath+'/app',
  distPath: rootPath+'/dist',
  tasks: ['clean', 'scripts', 'styles', 'fonts', 'images', 'templates', 'htmlBuild', 'server'],
  apiProxy: {
    enabled: true,
    host: 'localhost',
    port: '3000',
    urlPrefix: 'api'
  }
};