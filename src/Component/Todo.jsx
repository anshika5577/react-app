import React, { useState } from 'react';
import "./Todo.css"

function Todo() {

    const [userInfo, setUserInfo] = useState([])
    const [user, setUser] = useState({ username: "", age: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInfo((userInfo) => [...userInfo, user]);
    }
    const handleClear = (e) => {
        e.preventDefault();
        setUser({ username: "", age: "" })
    }
    const handleDelete = (e,username) => {
        e.preventDefault();
        let filteredUser = userInfo.filter((user) => user.username !== username);
        setUserInfo(filteredUser);
    }

    const handleClearAll = (e) => {
        e.preventDefault();
        setUserInfo([]);
    }
    return (
        <div className="container">
            <div className='main-heading'>
                <h2 className='text-center bg-dark text-white p-2'>ToDo</h2>
            </div>
            <div className="row my-div">
                <div className="col-md-4 form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={handleChange}
                                value={user.username}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                className="form-control"
                                name="age"
                                value={user.age}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <div className="col-md-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary my-button"
                                    onClick={handleSubmit}
                                >Save</button>
                            </div>
                            <div className="col-md-6">
                                <button
                                    type="submit"
                                    className="btn btn-primary my-button"
                                    onClick={handleClear}
                                >Clear</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Table section */}
                <div className="col-md-4 form">
                    <div className="row">
                        <p>User</p>
                        <table className="table">
                            <thead>
                                <tr className='table-head'>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                { userInfo.map((user, index) => (
                                <tr className='table-row' key={index}>
                                    <td>{user.username}</td>
                                    <td>{user.age}</td>
                                    <td><button className='btn my-button-2' onClick={(e) => handleDelete(e,user.username)}>CLEAR</button></td>
                                  </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="col-md-12">
                            <button 
                                className='btn btn-block btn-dark text-white'
                                onClick={handleClearAll}
                            >CLEAR ALL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;
