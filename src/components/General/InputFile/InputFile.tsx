import { useRef } from 'react';
import styles from './InputFile.module.scss';

function InputFile() {
    const imageUploadWrap = useRef<HTMLDivElement>(null);
    const fileUploadImage = useRef<HTMLImageElement>(null);
    const fileUploadContent = useRef<HTMLDivElement>(null);
    const imageTitle = useRef<HTMLSpanElement>(null);

    const readURL = (input: any) => {
        console.log('readURL', input);
    }
    
    return (
        <div className="fileUpload">
            <button className="fileUploadBtn" type="button">Add Image</button>
            <div className="imageUploadWrap" ref={imageUploadWrap}>
                <input className="fileUploadInput" type='file' accept="image/*" onChange={(input) => readURL(input)} />
            </div>
            <div className="fileUploadContent" ref={fileUploadContent}>
                <img className="fileUploadImage" src="#" alt="" ref={fileUploadImage} />
                <div className="imageTitleWrap">
                    <button type="button" className="removeImage">Remove <span className="imageTitle" ref={imageTitle}>Uploaded Image</span></button>
                </div>
            </div>
        </div>
    );
  }
  
export default InputFile;
  