import { useState } from 'react';
import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";

function App() {

  const [text, setText] = useState('')
  const [data, setData] = useState([])

  const handleSubmet = (event) => {
    event.preventDefault();

    if (!text.trim()) {
      return null
    }

    let date = new Date()
    let newTodos = {
      id: uuidv4(),
      text,
      time: `${date.getHours()}:${date.getMinutes()}`
    }
    setData([...data, newTodos])
    setText("")
  }

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))

  }

  return (

    <>
      <div className='my-0 m-auto w-[450px] h-[600px] rounded-xl bg-cyan-300 mt-10 flex items-center flex-col gap-8 p-5'>
        <h2 className='text-orange-600 text-5xl font-bold'>ToDo List...</h2>
        <form className=' w-full flex items-center gap-6' onSubmit={handleSubmet} action="">
          <input className='w-full h-[38px] outline-none rounded-lg px-4' value={text} onChange={(e) => setText(e.target.value)} type="text" />
          {
            text.trim() ? <button className='bg-green-700 w-[90px] h-[38px] rounded-lg text-white text-center'>Create</button> : <></>
          }
        </form>
        <div className='w-full flex flex-col gap-4 overflow-y-auto h-[400px] ... card__group'>
          {
            data.map((item) => (
              <div key={item.id} className='w-full flex items-center justify-between '>
                <span className='max-w-52 w-full h-auto truncate bg-white pt-1 pb-1 pl-2 pr-2 rounded-md'>{item.text}</span>
                <button className='w-[40px] text-center btn__edit'><MdOutlineEditCalendar /></button>
                <p className='w-[40px] text-center rounded-lg date__p'>{item.time}</p>
                <button className='w-[40px] text-center rounded-lg delete__btn' onClick={() => handleDelete(item.id)}><MdDelete /></button>
              </div>
            ))
          }
        </div>
      </div>
    </>

  )
}

export default App
