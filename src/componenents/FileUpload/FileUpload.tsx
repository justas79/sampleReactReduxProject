import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';


import style from './file-upload.module.scss';




const cx = classNames.bind(style);

const FileUpload: React.FC = () => {



  const dispatch = useDispatch();

  const [file, setFile] = useState<File[]>([]);
  const upload = (): void => {
    if (file.length) {

    }
    clearFiles();
  };
  const removeFile = (index: number): void => {
    const updatedFile = file.slice(0, index).concat(file.slice(index + 1, file.length));
    setFile(updatedFile);
  };
  const onDrop = (newFile: File[] | [File]): void => {
    if (newFile.length > 1) {
      newFile.map((fileForUpload) => setFile((prevState: File[]) => [...prevState, fileForUpload]));
    } else {
      setFile((prevState: File[]) => [...prevState, newFile[0]]);
    }
  };
  const clearFiles = (): void => {
    setFile([]);
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
  });

  const thumbs =
    file &&
    file.map((file: File, key: number) => (
      <div key={key} className={cx('file-list')}>
        <div>{file.name}</div>
        <button onClick={(): void => removeFile(key)} >Remove file</button>
      </div>
    ));

  return (
    <>

        <div className={cx('body')}>
          <div {...getRootProps()} className={cx('container')}>
            <input {...getInputProps()} />
            <div className={cx('text')}>
              Drag and drop file here or <span className="text-blue">browse for a file</span>
            </div>
          </div>
          <div>{thumbs}</div>
        </div>

        <button
          onClick={upload}

        >Upload File</button>

    </>
  );
};

export default FileUpload;
