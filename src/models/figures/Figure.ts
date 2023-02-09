import logo from '../../images/figures/black-king.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export enum FigureNames {
  FIGURE = 'figure',
  QUEEN = 'queen',
  KING = 'king',
  BISHOP = 'bishop',
  ROOK = 'rook',
  KNIGHT = 'knight',
  PAWN = 'pawn',
}

export class Figure {
  color: Colors;
  logo: typeof logo | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.logo = null;
    this.cell = cell;
    this.cell.figure = this;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    return true;
  }

  moveFigure(target: Cell) {}
}
