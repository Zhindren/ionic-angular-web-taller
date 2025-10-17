import { TrianguloEscaleno } from './triangulo-escaleno';

export class TrianguloEquilatero extends TrianguloEscaleno {
    constructor(nombre: string, lado: number) {
        super(nombre, lado, lado, lado);
    }


    // agregado en caso de implementacion futura , entre los requisitos nunca se especifico que habia que diferenciar 
    // entre triangulos para calcular el perimetro , solo se indica que tiene que estar definida la clase y su metodo.
    override calcularPerimetro(): number {
        if (this.ladoA && this.ladoA >= 0) {
            return 3 * this.ladoA;
        } else if (this.ladoB && this.ladoB >= 0) {
            return 3 * this.ladoB;
        } else if (this.ladoC && this.ladoC >= 0) {
            return 3 * this.ladoC;
        } else {
            return 0
        }
    }
}
