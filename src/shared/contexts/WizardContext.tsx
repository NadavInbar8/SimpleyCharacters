import { createContext, useMemo, useState } from "react";
import { WizardProviderProps, WizardState } from "./interfaces";

const WizardContext = createContext<WizardState | undefined>(undefined);

export const WizardProvider: React.FC<WizardProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [title, setTitle] = useState<string>("Some Default Title");
  const value = useMemo(
    () => ({
      currentStep,
      setCurrentStep,
      title,
      setTitle,
    }),
    [currentStep, title]
  );

  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
};

export default WizardContext;
