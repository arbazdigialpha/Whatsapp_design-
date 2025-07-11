import React from 'react'
import UploadImage from '../../assets/uploadImage.png'

type UploadModalProps = {
    onClose : () => void;
    isVisible : boolean
}

const UploadModals = ( { onClose , isVisible } : UploadModalProps ) => {
    return (
        <section className={`upload-modal ${isVisible ? 'show-modal' : 'hide-modal'}`}>
            <div className='modal-header vr-center'>
                <h2 className='modal-name'> Upload Documents </h2>
                <p className='cls-icon vr-center cur-pointer' onClick={onClose}> X </p>
            </div>
            <div className="modal-body">
                <div className="upload-section">
                    <p className='upload-txt'> Add your documents here. You can upload upto 12 files </p>
                    <div className="upload-box vr-center">
                        <input type="file" name="fileUpload" id="fileUpload" className='file-upload' />
                        <label className="upload-icon vr-center" htmlFor='fileUpload'>
                            <img src={UploadImage.src} alt="upload icon" loading='lazy' className='upload-image cur-pointer' />
                        </label>
                        <p className='dd-txt'> Drag and drop your files here. </p>
                        <p className='limit-size-txt'> 5MB max per files </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UploadModals