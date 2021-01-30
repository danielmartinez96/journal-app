import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid)=>{
    try {
        const notesSnap = await db.collection(`${uid}/journal/notes`).get();
        const notes = [];
        console.log(notesSnap)
        notesSnap.forEach(snapHijo=>{
            notes.push({
                id:snapHijo.id,
                ...snapHijo.data()
            })
        })
        
        return notes;
    } catch (error) {
        console.log("hola 2")
    }
}
