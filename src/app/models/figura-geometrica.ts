export abstract class FiguraGeometrica {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    // Método abstracto (sin implementación)
    abstract calcularPerimetro(): number;
  }
  