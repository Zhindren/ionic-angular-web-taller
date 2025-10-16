import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
    ladoA: number;
    ladoB: number;
    ladoC: number;

    constructor(nombre: string, ladoA: number, ladoB: number, ladoC: number) {
        super(nombre);
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}
