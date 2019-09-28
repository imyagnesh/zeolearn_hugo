import React, {  memo} from 'react'
import { Consumer } from '../../App'

const addTodo = ({ addTodo, changeText, value }) => {
    console.log('addTodo')
    return (
        <div>
            <div>
                <Consumer>
                    {(props) => <div>
                        <p>{props.greet}</p>
                    </div>}
                </Consumer>

            </div>
        
        <form onSubmit={addTodo}>
            <input type="text" value={value} onChange={changeText} placeholder="Write your todo Here" required />
            <button type="submit" >Add Todo</button>
        </form>
        </div>
    )
}

export default memo(addTodo)
