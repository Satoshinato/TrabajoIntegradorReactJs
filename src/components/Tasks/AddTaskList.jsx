/* eslint-disable react/prop-types */
import { useState } from 'react'

function AddTaskList ({ onAddTask, getTaskList }) {
  const [showForm, setShowForm] = useState(false)

  function toggleForm () {
    setShowForm(!showForm)
  }

  const eventNewTaskList = (e) => {
    e.preventDefault()
    const formAddTask = new FormData(e.target)
    const nombre = formAddTask.get('nombre')
    onAddTask(nombre)
    e.target.reset()
    setShowForm(false)
  }
  return (
    <>
      {showForm
        ? (
          <div className='addTaskList'>
            <form onSubmit={eventNewTaskList}>
              <input
                type='text'
                placeholder='Introduzca titulo de la lista'
                aria-label='Nombre de la lista'
                name='nombre'
                id='nombre'
                required
              />
              <input type='submit' value='Añadir' />
            </form>
            <span onClick={toggleForm}>[X]</span>
          </div>
          )
        : (
          <div className='addTaskList' onClick={toggleForm}>
            [+] {getTaskList() ? 'Añadir una lista' : 'Añadir otra lista'}
          </div>
          )}

    </>

  )
}

export default AddTaskList
