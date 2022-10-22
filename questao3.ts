import { Calculadora } from "./questao2";

class CalculadoraCientífica extends Calculadora {

    constructor(operandA: number, operandB: number) {
        super(operandA, operandB);
    }
    public exponenciar(): number {
        return this._operanX ** this._operandY;
    }
}

export { CalculadoraCientífica };

/*
c. Foi necessária alguma modificação em Calculadora para o acesso aos
atributos?
    SIM.
    Os atributos de Calculadora precisam agora do modificador protected para 
    serem acessados na subclasse, do contrário, a subclasse teria que ter atributos 
    próprios, o que anula a vantagem de usar herança para evitar repetição de código.
 */