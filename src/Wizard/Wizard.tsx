import styled from "styled-components";
import { Card, Flexbox, PageContainer, Titlebar } from "../shared";
import { useForm, FormProvider } from "react-hook-form";
import { WizardButtons } from "./WizardButtons";
import { useEffect } from "react";
import { useWizard } from "../shared/hooks/useWizard";
import { STEP_TITLES } from "./constants";

const FullWidth = styled(Flexbox)`
  align-items: start;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spaces8[3]};
  overflow: hidden;
`;

export type Inputs = {
  example: string;
  exampleRequired: string;
};

export const Wizard: React.FC = () => {
  const { currentStep, title, setTitle } = useWizard();

  const methods = useForm<Inputs>({
    mode: "onBlur",
    defaultValues: {
      example: "",
      exampleRequired: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    trigger,
  } = methods;

  // Trigger validation on mount
  useEffect(() => {
    trigger();
  }, [trigger]);

  useEffect(() => {
    setTitle(STEP_TITLES[currentStep]);
  }, [currentStep]);

  const onSubmit = (data: Inputs) => {
    console.log(">>>", data);
  };

  const disableContinue = Object.keys(errors).length > 0;

  return (
    <PageContainer>
      <Titlebar>{title}</Titlebar>
      <Card>
        <FullWidth>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Step components will go here */}
            </form>
          </FormProvider>
        </FullWidth>
        <WizardButtons
          continueText="Continue"
          currentStep={2}
          loading={false}
          onContinue={() => {
            console.log("hello");
          }}
          disableContinue={disableContinue}
        />
      </Card>
    </PageContainer>
  );
};
