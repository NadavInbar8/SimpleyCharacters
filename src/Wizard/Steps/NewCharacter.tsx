import { useState } from "react";
import { Flexbox, SectionTitle, SubSectionTitle } from "../../shared";
import styled from "styled-components";
import { Dropzone } from "../../shared/Dropzone/Dropzone";
import { Input } from "../../shared/Input/Input";
import { useFormContext } from "react-hook-form";
import StyledSelect from "../../shared/Select/StyledSelect";

const Wrapper = styled(Flexbox)`
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces8[3]};
`;

const Section = styled(Flexbox)`
  gap: ${({ theme }) => theme.spaces8[2]};
  font-size: ${({ theme }) => theme.fonts.normal};
`;

const UploaderFieldWrapper = styled(Flexbox)`
  border: 1px dashed ${({ theme }) => theme.colors.grey1};
  height: 200px;
  width: 200px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("assests/imgs/defaultProfile.png");
  background-size: cover;
  background-position: center;
`;

const PreviewContainer = styled(Flexbox)`
  img {
    max-width: 200px;
    display: block;
    margin-bottom: 10px;
    border-radius: 4px;
  }
`;

const MAX_SIZE = 1024 * 1024 * 10;

export const NewCharacter: React.FC = ({}) => {
  const {
    register,
    formState: { errors },
    watch,
    control,
  } = useFormContext();

  const [file, setFile] = useState<{
    base64?: string | ArrayBuffer | null;
    preview?: string;
    name: string;
  } | null>(null);
  const characterName = watch("characterName");

  const handleFilesAccepted = (acceptedFiles: any) => {
    console.log(">>> acceptedFiles", acceptedFiles);
    setFile(acceptedFiles[0]);
  };

  const handleInvalidFile = (file: File) => {
    console.log(">>>> invalid file:", file);
  };
  const options = [
    { value: "1", label: "Apple" },
    { value: "2", label: "Ball" },
    { value: "3", label: "Cat" },
  ];
  return (
    <Wrapper>
      <Section>
        <PreviewContainer>
          {file ? (
            file.preview && <img src={file.preview} alt={file.name} />
          ) : (
            <UploaderFieldWrapper>
              <Dropzone
                onDropAccepted={handleFilesAccepted}
                onUploadInvalidFile={handleInvalidFile}
                accept={{ "image/*": [] }}
                multiple={false}
                maxSize={MAX_SIZE}
              >
                <p style={{ opacity: 0.2 }}>
                  Drag 'n' drop an image here, or click to select one
                </p>
              </Dropzone>
            </UploaderFieldWrapper>
          )}
        </PreviewContainer>
        <Flexbox column gridGap="8px">
          <SubSectionTitle>Character Details:</SubSectionTitle>
          <Input
            name="characterName"
            label="Character Name:"
            placeholder="Enter your character name"
            register={register<string>("characterName", {
              required: "Character name is required",
              maxLength: {
                value: 20,
                message: "Character name must be less than 20 characters",
              },
            })}
            value={characterName} // Pass the watched value here
            error={errors?.characterName?.message}
          />
          <StyledSelect
            name="mySelect"
            control={control}
            options={options}
            placeholder="Select an option"
            filled={!!errors.mySelect}
            focused={false} // Adjust dynamically if needed
            error={errors.mySelect?.message}
            interactivePlaceholder={"Starting Level"}
          />
        </Flexbox>
      </Section>
      <Section column>
        <SectionTitle>Preferences</SectionTitle>
        Sources
      </Section>
    </Wrapper>
  );
};
