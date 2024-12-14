import { isEmpty } from "lodash";
import { useCallback } from "react";
import {
  useDropzone,
  Accept,
  FileWithPath,
  FileRejection,
} from "react-dropzone";
import styled from "styled-components";

// Styled container (this is optional, you can style it with your own CSS)
const Wrapper = styled.div<{ isFlex?: boolean }>`
  cursor: pointer;
  outline: none;
  ${({ isFlex }) => isFlex && "display: flex"};
`;

interface DropzoneProps {
  // Called when valid files are dropped/selected
  onDropAccepted?: (files: ExtendedFile[]) => void;
  // Called when invalid files are dropped/selected
  onUploadInvalidFile?: (file: FileWithPath) => void;
  accept?: Accept;
  multiple?: boolean;
  disabled?: boolean;
  maxSize?: number;
  minSize?: number;
  children?: React.ReactNode;
  isFlex?: boolean;
}

interface ExtendedFile extends FileWithPath {
  base64?: string | ArrayBuffer | null;
  preview?: string;
}

export const Dropzone: React.FC<DropzoneProps> = ({
  onDropAccepted,
  onUploadInvalidFile,
  accept,
  multiple,
  disabled = false,
  maxSize,
  minSize,
  children,
  isFlex,
}) => {
  const handleAcceptedFiles = useCallback(
    (files: ExtendedFile[]) => {
      onDropAccepted && onDropAccepted(files);
    },
    [onDropAccepted]
  );

  const { getRootProps, getInputProps } = useDropzone({
    disabled,
    accept: accept,
    multiple: multiple,
    maxSize: maxSize,
    minSize: minSize,
    onDrop: (acceptedFiles: FileWithPath[], rejectedFiles: FileRejection[]) => {
      if (!isEmpty(rejectedFiles)) {
        if (onUploadInvalidFile)
          return onUploadInvalidFile(rejectedFiles[0].file);
        return;
      }
      if (isEmpty(acceptedFiles)) return;
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const extendedFile: ExtendedFile = Object.assign(file, {
          base64: event.target?.result,
          preview: URL.createObjectURL(file),
        });
        handleAcceptedFiles([extendedFile]);
      };
    },
  });

  return (
    <Wrapper {...getRootProps()} isFlex={isFlex}>
      <input {...getInputProps()} />
      {children}
    </Wrapper>
  );
};
