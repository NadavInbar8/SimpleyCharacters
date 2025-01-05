import { useState } from "react";
import {
  Button,
  Checkbox,
  Flexbox,
  SectionTitle,
  SubSectionTitle,
} from "../../shared";
import styled from "styled-components";
import { Dropzone } from "../../shared/Dropzone/Dropzone";
import { Controller, useFormContext } from "react-hook-form";
import StyledSelect, { Option } from "../../shared/Select/StyledSelect";
import { Input } from "../../shared/Input/Input";
import { WizardFormValues } from "../constants";
import { SelectInput } from "../../shared/Select/Select";

const Wrapper = styled.div`
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces8[3]};
  width: 100%;
  height: 100%;
  min-width: 100%;
`;

const Section = styled(Flexbox)`
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spaces8[2]};
  font-size: ${({ theme }) => theme.fonts.normal};
`;

const SubSection = styled(Flexbox)`
  width: 50%;
  gap: ${({ theme }) => theme.spaces8[2]};
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

const makeLevelOptions = () => {
  const array: Option[] = [];
  for (let i = 1; i <= 20; i++) {
    array.push({ label: i, value: i });
  }
  return array;
};

export const NewCharacter: React.FC = ({}) => {
  const { register, formState, control, trigger } = useFormContext();
  const handleBlur = async (field: keyof WizardFormValues) => {
    await trigger(field); // Trigger validation for the field
  };
  const [file, setFile] = useState<{
    base64?: string | ArrayBuffer | null;
    preview?: string;
    name: string;
  } | null>(null);
  const levelOptions = makeLevelOptions();
  const genderOptions: Option[] = [
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
  ];
  const abilitiesGenerationOptions: Option[] = [
    { label: "Point Buy", value: 1 },
    { label: "Roll 3d6", value: 2 },
    { label: "Roll 4d6 (discard lowest)", value: 3 },
    { label: "Standard Array (15, 14, 13, 12, 10, 8", value: 4 },
  ];

  const handleFilesAccepted = (acceptedFiles: any) => {
    console.log(">>> acceptedFiles", acceptedFiles);
    setFile(acceptedFiles[0]);
  };

  const handleInvalidFile = (file: File) => {
    console.log(">>>> invalid file:", file);
  };

  return (
    <Wrapper>
      <Section>
        <Flexbox gridGap="16px">
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
          <SubSection column>
            <Input
              name="characterName"
              label="Character Name"
              placeholder="Enter your character name"
              register={register}
              validation={{
                required: "Character name is required",
                maxLength: {
                  value: 20,
                  message: "Character name must be less than 20 characters",
                },
              }}
              onBlur={() => handleBlur("characterName")}
              error={formState.errors.characterName?.message}
            />
            <Controller
              name="gender"
              rules={{ required: "Gender is required" }}
              render={({ field }) => (
                <SelectInput
                  control={control}
                  {...field}
                  options={genderOptions}
                  label="Gender"
                  error={formState.errors.gender}
                />
              )}
            />
          </SubSection>
        </Flexbox>
      </Section>
      <Section column>
        <SectionTitle>Character Options</SectionTitle>
        <SubSectionTitle>
          These options enable or disable some options your character will have.
        </SubSectionTitle>
        <SubSection column>
          <Checkbox
            label="Accept Terms and Conditions"
            name="terms"
            register={register}
            defaultChecked={false}
            validation={{ required: "You must agree to the terms" }}
          />
        </SubSection>
      </Section>
    </Wrapper>
  );
};
