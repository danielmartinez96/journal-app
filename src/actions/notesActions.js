import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from 'sweetalert2';
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote(doc.id, newNote));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {

        try {

            const notes = await loadNotes(uid);

            dispatch(setNotes(notes))
            
        } catch (error) {
            console.log(error)
        }
    }   
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {

        try {
            const { uid } = getState().auth;
            if (!note.imageUrl) delete note.imageUrl;

            const noteToFS = { ...note };
            delete noteToFS.id;


            await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFS);
            dispatch(refreshNote(note.id, noteToFS));
            Swal.fire('Saved', note.title, 'success');
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
    }

}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: note } = getState().notes;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });
        const fileUrl = await fileUpload(file);

        note.imageUrl = fileUrl;
        dispatch(startSaveNote(note));
        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;

        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch(deleteNote(id));
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const cleaningLogoutNote = () => ({
    type: types.notesLogoutCleaning
})