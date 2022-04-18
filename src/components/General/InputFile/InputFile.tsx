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
        <div className={styles.fileUpload}>
            <button className={styles.fileUploadBtn} type="button">Add Image</button>
            <div className={styles.imageUploadWrap} ref={imageUploadWrap}>
                <input className={styles.fileUploadInput} type='file' accept="image/*" onChange={(input) => readURL(input)} />
                <div className={styles.dragText}>
                    <h3>Drag and drop a file or select add Image</h3>
                </div>
            </div>
            <div className={styles.fileUploadContent} ref={fileUploadContent}>
                <img className={styles.fileUploadImage} src="#" alt="" ref={fileUploadImage} />
                <div className={styles.imageTitleWrap}>
                    <button type="button" className="removeImage">Remove <span className={styles.imageTitle} ref={imageTitle}>Uploaded Image</span></button>
                </div>
            </div>
        </div>
    );
  }
  
export default InputFile;
  