import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notesActions'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    const dispatch = useDispatch();
    const { active:note } = useSelector(state => state.notes)
    // const [valueForm,handleChangeInput] = useForm({...rest})
    const [formValues, handleChangeInput, reset] = useForm(note)
    const { title, body,id } = formValues;
    const activeId = useRef(note.id);
    useEffect(() => {
        if(note.id !== activeId.current){
            reset();
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id,{...formValues}));
    }, [formValues,dispatch]);

    const handleDeleteNote = () => {
        dispatch(startDeleting(id));
    }
    
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    name="title"
                    value={title}
                    onChange={handleChangeInput}
                />

                <textarea
                    placeholder="What happend today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleChangeInput}
                ></textarea>
                {
                    (note.imageUrl)
                    && (<div className="notes__image">
                        <img
                            src={note.imageUrl}
                            alt="imagen"
                        />
                    </div>)
                }
            </div>
            <button
                className="btn btn-danger"
                onClick={handleDeleteNote}
            >
                DELETE
            </button>
        </div>
    )
}
