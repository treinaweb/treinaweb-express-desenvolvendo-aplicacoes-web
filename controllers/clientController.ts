import { Request, Response} from 'express';

function index(req: Request, res: Response, next: any){
    res.render('index');
}

function produto(req: Request, res: Response, next: any){
    var produtos = [
        {
            nome: 'Memória Ram',
            descricao: '16Gb'
        },
        {
            nome: 'Placa de video',
            descricao: '8Gb'
        },
        {
            nome: 'Monitor',
            descricao: 'FullHD'
        }
    ];
    var produto = produtos[parseInt(`${req.params.id}`)];
    res.render('produto', {produto: produto});
}

export default { index, produto };