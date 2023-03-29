import React from 'react'
import '../components/Todolist.css'

export default class Todolist extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }

    render() {
        return (
            <>
            <h1 className='text-center'>Your Pocket Todo App</h1>
            <div className='m-4 d-flex justify-content-around'>
                <form id="dataEntry" className='mt-3'>
                    <div className="mb-3">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Add Todo</label>
                    </div>
                    </div>
                    <button type="submit" className="btn btn-secondary">Add</button>
                </form>
                <div id="displayarea" className='mt-3'>
                    <div className='h3 text-center'>You have no Todos set</div>
                    <div className='container text-center'>
                        <div className="row">
                            <div className="col-8 text-start">Task Name Area</div>
                            <div className="col-4">Button Area</div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
