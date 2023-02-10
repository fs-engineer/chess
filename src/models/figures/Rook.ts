import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../images/figures/black-rook.png';
import whiteLogo from '../../images/figures/white-rook.png';

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell): boolean {
    // TODO check this simplify
    if (!super.canMove(target)) return false;

    if (this.cell.isEmptyHorizontal(target)) {
      return true;
    }

    // TODO check this simplify
    if (this.cell.isEmptyVertical(target)) {
      return true;
    }

    return false;
  }
}
