import styled from "styled-components";
import { Card, Flexbox, PageContainer, Titlebar } from "../shared";
import { useForm, FormProvider } from "react-hook-form";
import { WizardButtons } from "./WizardButtons";
import { useEffect, useMemo, useState } from "react";
import { useWizard } from "../shared/hooks/useWizard";
import { StepMap, STEPS, WizardFormValues } from "./constants";

const FullWidth = styled(Flexbox)`
  align-items: start;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spaces8[3]};
  overflow: hidden;
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
`;

export const Wizard: React.FC = () => {
  const { currentStep, title, setTitle } = useWizard();
  const stepInfo = useMemo(
    () => STEPS[currentStep as keyof StepMap],
    [currentStep]
  );
  const CurrentStepComponent = useMemo(
    () => stepInfo && stepInfo.Component,
    [stepInfo]
  );

  const methods = useForm<WizardFormValues>({
    defaultValues: {},
    shouldUnregister: true,
    mode: "onChange", // Trigger validations only on change
  });
  const {
    handleSubmit,
    watch,
    formState: { isValid },
    reset,
  } = methods;

  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    setTitle(stepInfo.title);
  }, [currentStep]);

  useEffect(() => {
    reset({}, { keepValues: true });
  }, [currentStep, reset]);

  const onSubmit = (data: any) => {
    console.log(">>>", data);
  };

  const watchedValues = watch();
  const allFieldsFilled = stepInfo.requiredFields.every((fieldName) => {
    const value = watchedValues[fieldName];
    return value !== undefined && value !== null && value !== "";
  });

  const disableContinue = !allFieldsFilled || (!isValid && hasInteracted);

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <PageContainer>
      <Titlebar>{title}</Titlebar>
      <Card>
        <FullWidth>
          <FormProvider {...methods}>
            <Form
              onSubmit={handleSubmit(onSubmit)}
              onChange={handleInteraction}
            >
              <CurrentStepComponent />
            </Form>
          </FormProvider>
        </FullWidth>
        <WizardButtons
          continueText="Continue"
          currentStep={2}
          loading={false}
          onContinue={handleSubmit(onSubmit)}
          disableContinue={disableContinue}
        />
      </Card>
    </PageContainer>
  );
};
