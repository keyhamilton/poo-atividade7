class Calculadora {
    protected _operanX: number;
    protected _operandY: number;

    constructor(operandB: number, operandC: number) {
        this._operanX = operandB;
        this._operandY = operandC;
    };

    public somar(): number {
        return this._operanX + this._operandY;
    }
}

export { Calculadora };