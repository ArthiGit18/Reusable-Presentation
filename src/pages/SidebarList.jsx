import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

const initialItems = [
    'Presentation Title',
    'Presentation Description',
    'Process',
    'Section Cover',
    'Content Column',
    'Links Tab',
    'Image Tab',
];

const SidebarList = ({ onSelectItem }) => {
    const [items, setItems] = useState(initialItems);
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    // Reorder items on drag end
    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);
        setItems(newItems);
    };

    // Delete an item
    const handleDelete = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    // Duplicate an item
    const handleDuplicate = (index) => {
        const newItems = [...items];
        newItems.splice(index + 1, 0, items[index]);
        setItems(newItems);
    };

    // Save edit
    const handleEditSave = (index) => {
        const newItems = [...items];
        newItems[index] = editValue;
        setItems(newItems);
        setEditIndex(null);
    };

    return (
        <div>
            <ul className="sidebar_list">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="sidebar">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {items.map((item, index) => (
                                    <Draggable key={index} draggableId={`item-${index}`} index={index}>
                                        {(provided) => (
                                            <li
                                                className="sidebar_list_1"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                onClick={() => onSelectItem(item)}
                                            >
                                                {editIndex === index ? (
                                                    <>
                                                        <input
                                                            value={editValue}
                                                            onChange={(e) => setEditValue(e.target.value)}
                                                        />
                                                        <CheckCircleOutlineRoundedIcon
                                                            sx={{
                                                                fontSize: "25px",
                                                                padding: "3px",
                                                                backgroundColor: "pink",
                                                                borderRadius: "50%",
                                                                color: "purple",
                                                                cursor: "pointer"


                                                            }}
                                                            onClick={() => handleEditSave(index)}>Save</CheckCircleOutlineRoundedIcon>
                                                    </>
                                                ) : (
                                                    <>
                                                        {item}
                                                        <span>
                                                            <EditOutlinedIcon

                                                                sx={{
                                                                    fontSize: "25px",
                                                                    padding: "3px",
                                                                    backgroundColor: "palegreen",
                                                                    borderRadius: "50%",
                                                                    color: "green",
                                                                    cursor: "pointer"


                                                                }}
                                                                onClick={(e) => {
                                                                    e.stopPropagation(); // 👈 prevent triggering onClick on li
                                                                    setEditIndex(index);
                                                                    setEditValue(item);
                                                                }}
                                                            >Edit</EditOutlinedIcon>
                                                            <DeleteOutlineOutlinedIcon
                                                                sx={{
                                                                    fontSize: "25px",
                                                                    padding: "3px",
                                                                    backgroundColor: "bisque",
                                                                    borderRadius: "50%",
                                                                    color: "red",
                                                                    cursor: "pointer"

                                                                }}
                                                                onClick={() => handleDelete(index)}>Delete</DeleteOutlineOutlinedIcon>
                                                            <ContentCopyIcon
                                                                sx={{
                                                                    fontSize: "25px",
                                                                    padding: "3px",
                                                                    backgroundColor: "powderblue",
                                                                    borderRadius: "50%",
                                                                    color: "green",
                                                                    cursor: "pointer"

                                                                }}
                                                                onClick={() => handleDuplicate(index)}>Duplicate</ContentCopyIcon>
                                                        </span>
                                                    </>
                                                )}
                                            </li>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </ul>
        </div>
    );
};

export default SidebarList;
