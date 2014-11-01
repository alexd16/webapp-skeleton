var rootPath = process.cwd();
module.exports = {
  name: 'AppName',
  rootPath: rootPath,
  srcPath: rootPath+'/app',
  distPath: rootPath+'/dist',
  tasks: ['clean', 'scripts', 'styles', 'htmlBuild', 'server'],
  apiProxy: {
    enabled: true,
    host: 'localhost',
    port: '3000',
    urlPrefix: 'api'
  }
};