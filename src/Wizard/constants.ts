import { ComponentType } from "react";
import { NewCharacter } from "./Steps/NewCharacter";

export interface Step<TFields> {
  Component: ComponentType;
  title: string;
  requiredFields: (keyof TFields)[];
}

export type Step1Fields = {
  characterName: string;
  startingLevel: string | number;
  abilitiesGeneration: string | number;
  gender: string;
  terms: boolean;
};

export type Step2Fields = {
  skillName: string;
  skillLevel: number;
  experience: string;
};

export type StepMap = {
  newCharacter: Step<Step1Fields>;
  abilities: Step<Step2Fields>;
};

export type StepKeys = keyof StepMap; // "newCharacter" | "abilities"

export type WizardFormValues = Step1Fields & Step2Fields;

const newCharacter: Step<Step1Fields> = {
  Component: NewCharacter,
  title: "New Character",
  requiredFields: ["characterName", "gender", "terms"], // Valid keys of Step1Fields
};
const abilities: Step<Step2Fields> = {
  Component: NewCharacter,
  title: "Skill Selection",
  requiredFields: ["skillName", "skillLevel"], // Valid keys of Step1Fields
};

export const STEPS: StepMap = {
  newCharacter,
  abilities,
};
