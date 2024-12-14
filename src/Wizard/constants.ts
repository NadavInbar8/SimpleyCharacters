import { ComponentType } from "react";
import { NewCharacter } from "./Steps/NewCharacter";

interface Step {
  Component: ComponentType;
  title: string;
}

export const STEPS: Record<number, Step> = {
  1: { Component: NewCharacter, title: "New Character" },
};
