module.exports = {
  devServer: {
	  port: '8083',
	  headers:{
        'Access-Control-Allow-Origin':'*'
      }
  },
  configureWebpack:{
        output:{
        library:'fronted',
        libraryTarget:'umd'
    }
  }
}