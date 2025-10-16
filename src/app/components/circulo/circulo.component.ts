import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonItem, IonContent, IonLabel, IonInput, IonButton, IonText, IonCard, IonImg } from '@ionic/angular/standalone';
import { Circulo } from 'src/app/models/circulo';

@Component({
    selector: 'app-circulo',
    templateUrl: './circulo.component.html',
    styleUrls: ['./circulo.component.scss'],
    imports: [IonImg, 
    IonText,
    IonInput,
    IonLabel,
    IonContent,
    IonItem,
    FormsModule,
    IonButton,
    IonCard
],
})
export class CirculoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
    public radioCm: number | null = null;
    public perimetroResultado: number | null = null;
    public calcularPerimetroCirculo(): void {
        if (this.radioCm && this.radioCm > 0) {
            const miCirculo = new Circulo('Círculo de cálculo', this.radioCm);

            const perimetro = miCirculo.calcularPerimetro();

            // toFixed(2) para redondear.
            this.perimetroResultado = parseFloat(perimetro.toFixed(2));
        } else {
            this.perimetroResultado = null;
            console.log('Por favor, introduce un radio válido.');
        }
    }
}
