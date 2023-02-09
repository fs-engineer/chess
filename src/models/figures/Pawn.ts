import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../images/figures/black-pawn.png';
import whiteLogo from '../../images/figures/white-pawn.png';

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.PAWN;
  }

  canMove(target: Cell): boolean {
    // TODO check this simplify
    if (!super.canMove(target)) return false;

    return true;
  }
}
