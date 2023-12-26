import React from 'react';
import style from "./dialogs.module.css";
import Chat from "./Chat/Chat";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    return (
        <section className={style.dialogs}>
            <Dialog></Dialog>
            <Chat></Chat>
        </section>
    );
};

export default Dialogs;