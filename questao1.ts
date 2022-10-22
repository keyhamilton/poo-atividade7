class Veiculo {
    private _placa: string;
    private _ano: number;

    constructor(placa: string, ano: number) {
        this._placa = placa;
        this._ano = ano;
    }
}

class Carro extends Veiculo {
    private _modelo: string;

    constructor(placa: string, ano: number, modelo: string) {
        super(placa, ano);
        this._modelo = modelo;
    }
}

class CarroEletrico extends Carro {
    private _autonomiaBateria: number;

    constructor(placa: string, ano: number, modelo: string, autonomia: number) {
        super(placa, ano, modelo);
        this._autonomiaBateria = autonomia;
    }
}

export {Veiculo, Carro, CarroEletrico};