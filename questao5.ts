class Produto {
    private _id: string;
    private _descricao: string;
    private _quantidade: number;
    private _preco: number;

    constructor(id: string, descricao: string, quantidade: number, preco: number) {
        this._id = id;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._preco = preco;
    }

    /**
     * repor
quantidade: number : void    */
    public repor(quantidade: number): void {
        this._quantidade += quantidade;
    }

    /**
     * baixa
     * quantidade: number : boolean 
     */
    public darBaixa(quantidade: number): boolean {
        if(quantidade <= this._quantidade) {
            this._quantidade -= quantidade;
            return true;
        }
        return false;
    }

    get id(): string {
        return this._id;
    }

    get descricao(): string {
        return this._descricao;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get preco(): number {
        return this._preco;
    }
}

class ProdutoPerecivel extends Produto {
    private _validade: Date;

    constructor(id: string, descricao: string, quantidade: number, preco: number, validade: string) {
        super(id, descricao, quantidade, preco);
        this._validade = new Date(validade);
    }

    get validade(): string {
        return this._validade.toLocaleDateString();
    }

    public ehValido(): boolean {
        let data: Date = new Date();
        return data <= this._validade;
    }
}



class Estoque {
    private _produtos: Produto[];

    constructor(produtos: Produto[]) {
        this._produtos = produtos;
    }

    /**
     * consultar
 : Produto    */
    public consultar(id: string): Produto {
        let produtoProcurado!: Produto;
        for (let p of this._produtos) {
            if(p.id == id) {
                produtoProcurado = p;
                break;
            }
        }
        return produtoProcurado;
    }

    private consultarIndice(id: string): number {
        let indice: number = -1;
        for(let i = 0; i < this._produtos.length; i++) {
            if(this._produtos[i].id == id) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    
    /**
     * inserir
     */
    public inserir(produto: Produto): void   {
        let p: Produto = this.consultar(produto.id);
        if(p == null) {
            if(produto instanceof ProdutoPerecivel) {
                if(produto.ehValido()) {
                    this._produtos.push(produto);
                }
            }
            else {
                this._produtos.push(produto);
            }
        }
    }

    /**
     * repor
id: string : void    */
    public repor(id: string, quantidade: number): void {
        let p: Produto = this.consultar(id);
        if(p != null){
            if(p instanceof ProdutoPerecivel) {
                if(p.ehValido()) {
                    p.repor(quantidade);
                }
            }
        }
    }

    /**
     * darBaixa
id: string, quantidade: number : void    */
    public darBaixa(id: string, quantidade: number): void {
        let p: Produto = this.consultar(id);
        if(p != null){
            p.darBaixa(quantidade);
        }
    }

    /**
     * excluir
id: string : void    */
    public excluir(id: string): void {
        let indice: number = this.consultarIndice(id);
        if(indice != -1) {
            for(let i: number = indice; i < this._produtos.length; i++){
                this._produtos[i] = this._produtos[i+1];
            }
            this._produtos.pop();
        }
    }

    /**
     * listarVencidos
 : Produto[]    */
    public listarVencidos(): Produto[] {
        let vencidos: Produto[] = [];
        for (const p of this._produtos) {
            if(p instanceof ProdutoPerecivel && !p.ehValido()) {
                vencidos.push(p)
                
            }
            
        }
        return vencidos;
    }   
}

export { Produto, ProdutoPerecivel, Estoque };