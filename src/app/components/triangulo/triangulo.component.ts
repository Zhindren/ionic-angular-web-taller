import { Component, MissingTranslationStrategy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IonItem,
    IonContent,
    IonLabel,
    IonInput,
    IonButton,
    IonText,
} from '@ionic/angular/standalone';
import { TrianguloEscaleno } from 'src/app/models/triangulo-escaleno';

@Component({
    selector: 'app-triangulo',
    templateUrl: './triangulo.component.html',
    styleUrls: ['./triangulo.component.scss'],
    imports: [IonContent, IonItem, IonLabel, IonInput, FormsModule, IonButton, IonText],
})
export class TrianguloComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    public ladoA: number | null = null;
    public ladoB: number | null = null;
    public ladoC: number | null = null;
    public perimetroResultado: number | null = null;

    public calcularPerimetroTriangulo(): void {
        if (this.ladoA && this.ladoB && this.ladoC) {
            const miTriangulo = new TrianguloEscaleno(
                'Triangulo de cálculo',
                this.ladoA,
                this.ladoB,
                this.ladoC
            );

            const perimetroResultado = miTriangulo.calcularPerimetro();

            this.perimetroResultado = parseFloat(perimetroResultado.toFixed(2));
        } else {
            this.perimetroResultado = null;
            console.log('Por favor, introduce un radio válido');
        }
    }
}
