const connect = require('./connect')


module.exports = function testConnnect(){
    try{
        const query = `SELECT 'Conexão bem-sucedida' AS Mensagem`
        connect.query(query,function(err){
            if(err){
                console.log('Conexão não realizada',err)
                return;
            }
            console.log('Conexão realizada com Mysql')
        });
    }
    catch(error){
        console.error("Erro a executar a consulta")
    }
}