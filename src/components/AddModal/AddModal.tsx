import { set } from 'mongoose';
import React, { useState } from 'react'
import './AddModal.css'

interface AddModalProps {
    shouldShow: boolean;
    onRequestClose: () => void;
    children: React.ReactNode;
    title: string;
    buttonText: string;
    closeButtonText: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const AddModal = ({ shouldShow, onRequestClose, children, title, buttonText, closeButtonText, onSubmit }: AddModalProps) => {

    return shouldShow ? (

        <div className={`modal fade ${shouldShow ? 'show' : ''}`} >
            <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                <form className="modal-content" onSubmit={onSubmit}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">{title}</h1>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onRequestClose}>{closeButtonText}</button>
                        <input type="submit" className="btn btn-primary" value={buttonText} />
                    </div>
                </form>
            </div>
        </div>
    ) : null
}
