import React, { FC } from 'react';
import { Figure } from '../models/figures/Figure';

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}
const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <h3>{title}</h3>

      {figures.map(figure => (
        <div key={figure.id}>
          <span>{figure.name}</span>
          {figure.logo && (
            <img src={figure.logo} height={20} alt={figure.name} />
          )}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
