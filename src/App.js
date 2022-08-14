import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {db} from './firebase'
import {addDoc, collection, deleteDoc, doc, getDocs} from 'firebase/firestore'

function App() {


  const [attivita, setAttivita] = useState([]);
  const [newTask, setNewTask] = useState('')

  const collezioneAttivita = collection(db, 'tasks')

  useEffect(() => {

      const getTasks = async () => {
        const data = await getDocs(collezioneAttivita);
        setAttivita(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      }
      getTasks();
  })

  const creaTask = async () => {
    await addDoc(collezioneAttivita, {taskName: newTask})
    setNewTask('')
  }

  const eliminaTask = async (id) => {

    const taskDoc = doc(db, 'tasks', id)

    await deleteDoc(taskDoc)
  }




  return (
    <div className="App max-w-xl mx-auto">
      <h1 className='text-4xl font-medium my-4'>To Do List</h1>
      <div className='flex flex-row justify-between gap-8'>
          <input type="text" 
            className='border px-4 py-2 rounded-lg w-full'
            placeholder="Attività.." value={newTask} onChange={(event) => {setNewTask(event.target.value)}}
            />
          <button 
            className='bg-blue-400 px-4 py-2 text-white rounded-lg'
            onClick={() => {creaTask()}}>Aggiungi</button> 
      </div>

      <div className='max-w-xl grid-cols-1 mx-auto my-8'>
        <h2 className='font-medium text-2xl text-center'>Lista attività</h2>
        <div className='grid grid-cols-1 gap-6 mt-12'>
          {
            attivita.reverse().map((task) => {
              return(
                <div className='grid grid-cols-2 gap-8'>
                  <h4 className='text-2xl text-left'>{task.taskName}</h4>
                  <button 
                    className='bg-red-500 px-4 py-2 rounded-xl w-28 text-white ml-auto'
                    onClick={() => {eliminaTask(task.id)}}>Elimina</button>
                </div>
              )
            })
          }
        </div>




      </div>
    </div>
  );
}

export default App;
