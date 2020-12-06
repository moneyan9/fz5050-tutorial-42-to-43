import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import notesSlice from "../features/notesSlice";

const NewNoteInput = () => {

    const [note, setNote] = useState<string>("");

    const dispatch = useDispatch<Dispatch<PayloadAction<string>>>();

    //テキストエリアの入力値監視用
    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }


    //storeへのdispatch
    const addNote = (note: string) => {
        dispatch(notesSlice.actions.add(note));
    }


    //ボタンを押したときの処理
    const handleAddNote = () => {
        addNote(note); //グローバルstateにnoteを追加
        setNote(""); //テキストエリアリセット
    }

    return (
        <div>
            <input onChange={updateNote} value={note} type="text" />
            <button onClick={handleAddNote}> add note</button>
            <div>debug:{note}</div>
        </div>
    );
}

export default NewNoteInput
