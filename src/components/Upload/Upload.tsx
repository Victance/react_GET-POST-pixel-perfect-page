import { useState } from 'react';
import './Upload.scss';

export const Upload:React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  let displayedName;

  if (selectedFile) {
    displayedName = selectedFile.name.length > 30
      ? selectedFile.name.slice(0,15) + '...' + selectedFile.name.slice(-10)
      : selectedFile.name
  }
  

  return (
    <div className='Upload ApplyForm__Upload'>
      <input 
        type="file" 
        className='Upload__input'
        id='upload'
        onChange={(e) => {
          if (!e.target.files) {return};
          setSelectedFile(e.target.files[0])
        }}
      />

      <label 
        htmlFor="upload"
        className='Upload__button'
      >
        Upload
      </label>

      <p className='Upload__text'>
        {displayedName || 'Upload your photo'}
      </p>
    </div>
  )
}