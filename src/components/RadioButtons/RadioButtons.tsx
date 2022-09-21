import { useEffect, useState } from 'react';
import { getPositions } from '../../api/users';
import { IPosition } from '../../types/IPosition';
import './RadioButtons.scss';

type Props = {
  position_id: string;
  handleChange: (value: string) => void;
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
        <div className='RadioButtons__item' key={position.id}> 
          <input 
            type="radio" 
            name="position"
            value={position.id}
            checked={+position_id === position.id}
            className="RadioButtons__input"
            onChange={() => handleChange(position.id.toString())}
          />
          <label>
            {position.name}
          </label>
    </div>
      )}
    </div>
)}
