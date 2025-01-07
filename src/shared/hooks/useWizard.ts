import { useContext } from "react";
import { WizardState } from "../contexts/interfaces";
import { WizardContext } from "../contexts";

export const useWizard = (): WizardState => {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error("useWizard must be used within a WizardProvider");
  }
  return context;
};
