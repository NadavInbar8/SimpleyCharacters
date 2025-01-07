import { useState } from "react";
import {
  Checkbox,
  Flexbox,
  Option,
  SectionTitle,
  SubSectionTitle,
  SelectInput,
  Dropzone,
  Input,
} from "../../shared";
import styled from "styled-components";
import { Controller, useFormContext } from "react-hook-form";
import { WizardFormValues } from "../constants";

const Wrapper = styled.div`
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces8[3]};
  width: 100%;
  height: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
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
      </Section>
      <Section>
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
        <Controller
          name="level"
          rules={{ required: "Level is required" }}
          render={({ field }) => (
            <SelectInput
              control={control}
              {...field}
              options={levelOptions}
              label="Level"
              error={formState.errors.gender}
            />
          )}
        />
        <Controller
          name="abilitiesGeneration"
          rules={{ required: "Must pick abilities generation option" }}
          render={({ field }) => (
            <SelectInput
              control={control}
              {...field}
              options={abilitiesGenerationOptions}
              label="Abilities Generation Option"
              error={formState.errors.gender}
            />
          )}
        />
      </Section>
      <Section column>
        <SectionTitle>Character Options</SectionTitle>
        <SubSectionTitle>
          These options enable or disable some options your character will have.
        </SubSectionTitle>
        <SubSection column>
          <Checkbox
            label="Average hit points"
            name="averageHitPoints"
            register={register}
            defaultChecked={false}
          />
          <Checkbox
            label="Feats"
            name="feats"
            register={register}
            defaultChecked={false}
          />
          <Checkbox
            label="Multiclassing"
            name="multiclassing"
            register={register}
            defaultChecked={false}
          />
          <Checkbox
            label="Battlerager"
            name="battlerager"
            register={register}
            defaultChecked={false}
          />
          <Checkbox
            label="Bladesinger"
            name="bladesinger"
            register={register}
            defaultChecked={false}
          />
          <Checkbox
            label="Firearms"
            name="firearms"
            register={register}
            defaultChecked={false}
          />
        </SubSection>
      </Section>
    </Wrapper>
  );
};
