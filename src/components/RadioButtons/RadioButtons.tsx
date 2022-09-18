import { useEffect, useState } from 'react';
import { getPositions } from '../../api/users';
import { Position } from '../../types/Position';
import { RadioButtonItem } from '../RadioButton/RadioButtonItem';
import './RadioButtons.scss';

export const RadioButtons:React.FC = () => {
  const [availablePositions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    getPositions().then(data => 
      setPositions(data.positions)
    )
  }, [])

  return (
    <div className='RadioButtons'>
      <p className='RadioButtons__title'> Select your position</p>

      {availablePositions.map(position => 
        <RadioButtonItem 
          key={position.id} 
          name={position.name} 
        />
      )}
    </div>
)}
