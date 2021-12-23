const rotas = require('express').Router()

const conexao = require('./config/conexao')

//rota para listar dados no database

rotas.get('/',(req, res)=>{
    //criando uma query para selecionar todos os dados da tabela (tb_info)
    let sql = 'select * from tb_info'
    conexao.query(sql, (erro, rows, fields)=>{
        if(erro)throw erro
        res.json(rows)
    })
})

//rota para mostrar as transferências através do id

rotas.get('/:id', (req, res)=>{
    const {id} = req.params
    let sql = `select * from tb_info where id_transferencia = ?`
    conexao.query(sql,[id], (erro, rows, fields)=>{
        if(erro)throw error
        res.json(rows[0])
    })
})

//rota criada para deletar uma transferência (através do id)

rotas.delete('/:id', (req, res)=>{
    const {id} = req.params
    let sql = `delete from tb_info where id_transferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields)=>{
        if (erro) throw erro 
        res.json({status:'transferencia excluida com sucesso'})
    })
})

//rota criada para fazer uma inclusão de transferência na tabela

rotas.post('/', (req, res)=>{
    const {nomeCliente, contaCliente, valor} = req.body
    let sql = `insert into tb_info(nomeCliente, contaCliente, valor) values('${nomeCliente}', '${contaCliente}', '${valor}')`
    conexao.query(sql, (erro, rows, fields)=>{
        if(erro)throw erro
        res.json({status: "trasnferência incluida"})
    })
})

//rota criada para editar as transferências
rotas.put('/:id', (req,res)=>{

    //variáveis definidas como objeto
    const {id} = req.params
    const {nomeCliente, contaCliente, valor} = req.body
    //criação de variável sql
    let sql = `update tb_info set
     nomeCliente = '${nomeCliente}', contaCliente = '${contaCliente}', valor = '${valor}'  where id_transferencia = '${id}'`

    
     conexao.query(sql, (erro, rows, fields)=>{
         if(erro) throw erro
         res.json({status:"info transfer editada com sucesso"})
     })

    
})

module.exports = rotas