import { useEffect, useState } from 'react';
import { getPositions } from '../../api/users';
import { IPosition } from '../../types/IPosition';
import { RadioButtonItem } from '../RadioButtonItem/RadioButtonItem';
import './RadioButtons.scss';

type Props = {
  position_id: number | null;
  handleChange: (value: number) => void;
};

export const RadioButtons:React.FC<Props> = ({ position_id, handleChange }) => {
  const [availablePositions, setPositions] = useState<IPosition[]>([]);

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
          value={position.id} 
          handleChange={handleChange}
          position_id={position_id}
        />
      )}
    </div>
)}
