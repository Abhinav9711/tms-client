import React, { useState, useRef, useEffect } from 'react'
import { Modal, ModalHeader } from 'reactstrap'
import axios from 'axios';

function DragNDrop({ data, email }) {

    const [list, setList] = useState(data);
    const [oldList, setOldList] = useState(data);
    const [dragging, setDragging] = useState(false);
    const [edit, setEdit] = useState(false);
    const [k, setK] = useState();
    const [i, setI] = useState();
    useEffect(() => {
        setList(data);

    }, [setList, data])

    const dragItem = useRef();
    const dragNode = useRef();

    const handleDragStart = (e, params) => {
        console.log('Starting to drag', params)
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setTimeout(() => {
            setDragging(true);
        }, 0)
    }
    const handleDragEnter = async (e, params) => {
        var newList = [];
        console.log('Entering a drag target', params, e)
        const currentItem = dragItem.current;
        if (dragNode.current !== e.target) {
            console.log('Target is NOT the same as dragged item')
            setList(oldList => {
                newList = JSON.parse(JSON.stringify(oldList))
                newList[params.key].items.splice(params.itemI, 0, newList[currentItem.key].items.splice(currentItem.itemI, 1)[0])
                dragItem.current = params;
                return newList
            })
            newList = JSON.parse(JSON.stringify(list))
            newList[params.key].items.splice(params.itemI, 0, newList[currentItem.key].items.splice(currentItem.itemI, 1)[0])
            await axios.put(`https://task-management-system.cyclic.app/user/update`, {
                list: newList,
                email
            })
        }
    }

    const handleDragEnd = (e) => {
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd)
        dragItem.current = null;
        dragNode.current = null;
    }
    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.key === params.key && currentItem.ItemI === params.ItemI) {
            return "current dnd-item"
        }
        return "dnd-item"
    }

    if (list) {
        return (
            <div className="drag-n-drop">
                {list.map((grp, key) => (

                    <div
                        key={grp.title}
                        className="dnd-group"
                        onDragEnter={dragging && !grp.items.length ? (e) => handleDragEnter(e, { key, itemI: 0 }) : null}
                    >
                        <p>{grp.status}</p>
                        {grp.items.map((item, itemI) => (
                            <div
                                draggable
                                key={item}
                                onDragStart={(e) => handleDragStart(e, { key, itemI })}
                                onClick={(e) => {setK(key); setI(itemI)} }
                                onDragEnter={dragging ? (e) => { handleDragEnter(e, { key, itemI }) } : null} className={dragging ? getStyles({ key, itemI }) : "dnd-item"}>
                                <div className='dnd-group1'>
                                    <p>{item.title} -   </p>
                                </div>
                                <p>{item.description}</p>
                                <button className='task-button' onClick={() => setEdit(true)} style={{ marginTop: '50px' }}>Edit</button>
                                {edit && <Addtask setEdit={setEdit} key1={k} itemI={i} list={list} setList={setList} email={email} />}
                            </div>
                        ))}
                    </div>

                ))}
            </div>
        )
    } else { return null }
}
export default DragNDrop;

function Addtask(props) {
    const [isPop, setIsPop] = useState(true);
    const { key1, itemI, list, setList, setEdit, email } = props;
    const task = list[key1];
    const item = task.items[itemI]
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);

    async function handleClick() {
        setIsPop(false);
        setEdit(false);
        item.title = title;
        item.description = description;
        task.items[itemI] = item;
        list[key1] = task

        await axios.put('https://task-management-system.cyclic.app/user/update', {
            list, email
        })
        setList(list);
    }
    return (
        <div>
            <Modal size='md' isOpen={isPop} toggle={(isPop) => { setIsPop(!isPop); props.setEdit(false) }}>
                <ModalHeader style={{ backgroundColor: '#ffffec' }} toggle={() => { setIsPop(!isPop); props.setEdit(false) }} >Update Task... <br />
                    <div style={{ marginLeft: '100px', marginTop: '10px', marginBottom: '5px' }}>
                        <input style={{ marginBottom: '10px', backgroundColor: '#ffffec' }} placeholder='Add Title' size="25" required value={title} onChange={(e) => { setTitle(e.target.value) }}></input> <br />
                        <textarea style={{ marginBottom: '5px', backgroundColor: '#ffffec' }} placeholder='Add Description' rows="3" cols="27" required value={description} onChange={(e) => { setDescription(e.target.value) }} ></textarea> <br />
                        <button onClick={handleClick} style={{ marginBottom: '10px', size: 'md', textAlign: 'center', backgroundColor: '#04AA6D', marginLeft: '80px', color: '#fff' }}>   update </button>
                    </div>
                </ModalHeader>
            </Modal>
        </div>
    )
}
