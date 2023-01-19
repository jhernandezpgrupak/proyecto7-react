const path = require('path') //validar el entorno de desarrollo para las carpetas
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HP = new HtmlWebpackPlugin({ // instancia 
    template: './src/index.html', // configuración 
    filename: 'index.html'
})
const DotEnv = require('dotenv-webpack')
//exportar modulos de desarrollo
module.exports = {
    entry: './src/index.js', ///código de origen de la aplicación
    output : {
        path: path.join(__dirname, 'dist'), //donde se colocara todo el codigo
        filename: 'bundle.js'// como se llamara el archivo de salida 
    },
    devServer: { //crear un servidor de desarrolo, evitar la copilacion en cada cambio
        port : 4000
    },
    resolve : {
        extensions : ['.js','.jsx'] // para importar archivos sin su extension
    },
    module : {
        rules :[
            {
                test : /\.(js|jsx)$/, //ejecutar babel para todos los archivos 
                use: ['babel-loader'],
                exclude: /node_molues/
            },
            {
                test : /\.css$/,
                use: ['style-loader', 'css-loader']
            }
    ]         
    },
    plugins : [HP,new DotEnv()]
}