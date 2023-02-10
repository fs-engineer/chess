import { Figure, FigureNames } from './Figure';
import { Colors } from '../Colors';
import { Cell } from '../Cell';
import blackLogo from '../../images/figures/black-bishop.png';
import whiteLogo from '../../images/figures/white-bishop.png';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell): boolean {
    // TODO check this simplify
    if (!super.canMove(target)) return false;

    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }

    return false;
  }
}
