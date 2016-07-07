import React from 'react'
import CustomButton from './custombutton'

const InputTask = ({ type, message, onButtonSelected }) =>
    <div className='input-task'>
      <input placeholder={message} type={type} /><CustomButton message='Ajouter' onClick={onButtonSelected} />
    </div>

InputTask.propTypes = {
  message: React.PropTypes.string,
  type: React.PropTypes.string,
};

InputTask.defaultProps = {
  message: 'Nouvelle tâche',
  type: 'text',
};

export default InputTask
