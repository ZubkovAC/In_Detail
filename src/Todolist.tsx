import React, {useState,KeyboardEvent} from 'react';



type TaskType = {
    id:string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: any) => void
    addTask:(massive:string)=> void
}

export function Todolist({title,tasks,removeTask,changeFilter,addTask}: PropsType) {


    const [oneTask, twoTask] = useState('all')


    const onKeyPressHangler =(e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.charCode===13) {
            addTask(oneTask)
            twoTask('xylio')
        }}
    const onClickHangler = ()=>{
        addTask(oneTask)
        twoTask('shmarovoz')    }

            return <div>
                <h3>{title}</h3>
                <div>
                    <input value={oneTask}
                           onChange={e=>{twoTask(e.currentTarget.value)}}
                           onKeyPress={onKeyPressHangler}/>

                    <button onClick={onClickHangler}>+</button>

                </div>
                <ul>
                    {
                        tasks.map(t => <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={ () => { removeTask(t.id) } }>x</button>
                        </li>)
                    }
                </ul>
                <div>
                    <button onClick={ () => { changeFilter("all") } }>
                        All
                    </button>
                    <button onClick={ () => { changeFilter("active") } }>
                        Active
                    </button>
                    <button onClick={ () => { changeFilter("completed") } }>
                        Completed
                    </button>
                </div>
            </div>
        }

