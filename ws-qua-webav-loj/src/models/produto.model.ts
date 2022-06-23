import { Categoria } from "./categoria.model";

export class Produto {

  codigo: number = 0;
  nome: string = '';
  desc: string = '';
  //categoria: string = '';
  categoria: Categoria = new Categoria();
  cor: string = '';
  valor: string = '';
  foto: string = '';
  quantidade: number = 0;

}
