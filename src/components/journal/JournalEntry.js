import React from 'react';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notesActions';

export const JournalEntry = ({
    id,
    title,
    body,
    imageUrl,
    date
}) => {
    const noteDate= moment(date);
    const dispatch = useDispatch()
    const handleActiveNote = () => {
        dispatch(activeNote(id,{
            title,
            body,
            imageUrl,
            date
        }))
    }
    
    return (
        <div 
            className="journal__entry pointer animate__animated animate__fadeInUp animate__faster"
            onClick={handleActiveNote}
        >
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage:`url(${imageUrl})`                    
                }}
            ></div>
            <div className="jornal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}                  
                </p>

            </div>
            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('DD')}</h4>
            </div>
        </div>
    )
}
