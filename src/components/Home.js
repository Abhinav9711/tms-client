import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Modal, ModalHeader } from 'reactstrap'
import axios from 'axios';
import '.././App.css';
import DragNDrop from './DragNDrop'


function Home() {
    const location = useLocation();
    const { name, email, taskDetails } = location.state;
    const [data, setData] = useState(taskDetails);

    async function refreshedPage() {
        const response = await axios.post(`https://tms-server.cyclic.app/user/task`, {
            email
        })
        const { data = '' } = response.data;
        setData(data);
    }
    useEffect(() => {
        window.addEventListener("beforeunload", alertUser);
        return async () => {
            await refreshedPage();
            window.removeEventListener("beforeunload", alertUser);
        };
    }, []);

    const alertUser = (e) => {
        e.preventDefault();
        e.returnValue = "";
    };
    return (
        <div className="App">
            <Link to='/login' className='task-button' style={{ marginLeft: '1800px', marginTop: '30px', color: 'black' }}>Logout</Link>
            <h1><b>Hi {name}, Welcome to the Task Management System</b></h1>

            <Addtask email={email} name={name} setData={setData} />
            <header className="App-header">
                <DragNDrop data={data} email={email} />
              
            </header>
        </div>
    );
}

function Addtask(props) {
    const [isPop, setIsPop] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('todo');
    const [error, setError] = useState(false);

    function handleStatus(e) {
        setStatus(e.target.value);
    }

    function handleTitle(e) {
        setTitle(e.target.value);
    }
    function handleDescription(e) {
        setDescription(e.target.value);
    }

    function Error() {
        return (
            <div>
                <p style={{ marginLeft: '110px', color: 'red' }}>Please pass all the values</p>
            </div>
        )
    }
    async function handleSubmit(e) {
        e.preventDefault()
        if (!status || !title || !description) {
            setError(true);
            return;
        }
        setError(false);

        const response = await axios.post('https://tms-server.cyclic.app/user/create', {
            title, description, status, email: props.email
        });
        props.setData(response.data.data)
        setTitle(''); setDescription(''); setIsPop(false)
    }

    return (
        <div>
            <Modal size='md' isOpen={isPop} toggle={(isPop) => { setIsPop(!isPop); setError(false) }}>
                <ModalHeader style={{ backgroundColor: '#ffffec' }} toggle={() => { setIsPop(!isPop); setError(false) }} >Create new task... <br />
                    <div style={{ marginLeft: '100px', marginTop: '10px', marginBottom: '5px' }} >
                        <input style={{ marginBottom: '12px', backgroundColor: '#ffffec' }} placeholder='Add Title' size="25" value={title} onChange={handleTitle}></input> <br />
                        <textarea style={{ marginBottom: '5px', backgroundColor: '#ffffec' }} placeholder='Add Description' rows="3" cols="27" value={description} onChange={handleDescription}></textarea> <br />
                    </div>
                    <label style={{ marginLeft: '5px' }}>Select status</label>
                    <select style={{ width: '170px', height: '35px', backgroundColor: '#ffffec', marginBottom: '20px', marginLeft: '40px' }} placeholder='Select status' onChange={handleStatus} value={status} >
                        <option value='todo'>Todo</option>
                        <option value='in progress'>In Progress</option>
                        <option value='completed'>Completed</option>
                    </select>
                    {error && Error()}
                    <button style={{ marginBottom: '10px', size: 'md', textAlign: 'center', backgroundColor: '#cbc6c6', marginLeft: '185px', marginTop: '8px' }}
                        onClick={handleSubmit}>  Create task </button>

                </ModalHeader>
            </Modal>
            <button className='task-button' onClick={() => setIsPop(true)}>Create New Task</button>

        </div>
    )
}


export default Home;