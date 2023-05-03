import { DropResult, DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { Mockdata } from '../../data/Mockdata'
import { useState } from 'react'
import {IssuesListitem} from '../IssuesListItem/IssuesListItem'

const IssuesForm = () => {
    const [data, setData] = useState(Mockdata);

    const onDragEnd = (result:DropResult) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId);
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId);

            const sourceCol = data[sourceColIndex];
            const destinationCol = data[destinationColIndex];

            const sourceTask = [...sourceCol.tasks];
            const destinationTask = [...destinationCol.tasks];

            const [removed] = sourceTask.splice(source.index, 1);
            destinationTask.splice(destination.index, 0, removed);

            data[sourceColIndex].tasks = sourceTask;
            data[destinationColIndex].tasks = destinationTask;
            
        } else {
            const colIndex = data.findIndex(e => e.id === source.droppableId);
            const col = data[colIndex];
            const tasks = [...col.tasks];
            const [removed] = tasks.splice(source.index, 1);
            tasks.splice(destination.index, 0, removed);
        
            data[colIndex].tasks = tasks;
        }
        
        setData(data);
        console.log(data)
    }


    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="issues-form">
                {
                    data.map(section => (
                        <Droppable
                            key={section.id}
                            droppableId={section.id}
                        >
                            {(provided) => (
                                <div className="issues-column"
                                    {...provided.droppableProps}
                                    // className='issues-column'
                                    ref={provided.innerRef}
                                >
                                    <div>
                                        {
                                            section.tasks.map((task, index) => (
                                                <Draggable
                                                    key={task.id}
                                                    draggableId={task.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                ...provided.draggableProps.style,
                                                                opacity: snapshot.isDragging ? '0.5' : '1'
                                                            }}
                                                        >
                                                            <IssuesListitem>
                                                                {task}
                                                            </IssuesListitem>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))
                }
            </div>
        </DragDropContext>
    )
}

export default IssuesForm