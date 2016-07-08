import React from 'react'
import CustomButton from './custombutton'

const Task = ({ task }) => <li className='task'>{ task } <CustomButton message='X' name='remove' /></li>

Task.propTypes = {
  task: React.PropTypes.string.isRequired,
};

export default Task
