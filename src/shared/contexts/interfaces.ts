export interface WizardState {
  currentStep: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export interface WizardProviderProps {
  children: React.ReactNode;
}
