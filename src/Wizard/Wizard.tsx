import styled from "styled-components";
import { Card, Flexbox, PageContainer, Titlebar } from "../shared";
import { useForm, FormProvider } from "react-hook-form";
import { WizardButtons } from "./WizardButtons";
import { useEffect, useMemo } from "react";
import { useWizard } from "../shared/hooks/useWizard";
import { STEPS } from "./constants";

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
  const stepInfo = useMemo(() => STEPS[currentStep], [currentStep, STEPS]);
  const CurrentStepComponent = useMemo(
    () => stepInfo && stepInfo.Component,
    [stepInfo]
  );

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
    setTitle(stepInfo.title);
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
              <CurrentStepComponent />
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