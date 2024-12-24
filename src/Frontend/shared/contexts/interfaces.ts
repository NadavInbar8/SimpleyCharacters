export interface WizardState {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export interface WizardProviderProps {
  children: React.ReactNode;
}
