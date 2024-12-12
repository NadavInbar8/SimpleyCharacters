import styled from "styled-components";
import { Card, Flexbox, PageContainer, Titlebar } from "../shared";
import { useCallback, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";

const Container = styled(Flexbox)`
  flex: 1;
  overflow: hidden;
`;

const FullWidth = styled(Flexbox)`
  align-items: start;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.spaces8[3]};
  overflow: hidden;
`;

interface Step {
  Component: React.ComponentType<any>;
}

interface WizardProps {
  title: string;
  steps: Step[];
}

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const Wizard = ({ title, steps: STEPS }: WizardProps) => {
  let { stepNum } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const basePath = useMemo(() => pathname.slice(0, -1), [pathname]);
  const step = useMemo(() => {
    const parsed = Number(stepNum);
    return isNaN(parsed) ? 1 : parsed;
  }, [stepNum]);

  const currentStep = useMemo(() => {
    return STEPS[step] ? step : 1;
  }, [step, STEPS]);

  const stepInfo = useMemo(() => STEPS[currentStep], [currentStep, STEPS]);
  const CurrentStepComponent = useMemo(() => stepInfo?.Component, [stepInfo]);

  const next = useCallback(() => {
    navigate(`${basePath}${currentStep + 1}`);
  }, [navigate, currentStep, basePath]);

  const back = useCallback(() => {
    navigate(`${basePath}${currentStep - 1}`);
  }, [navigate, currentStep, basePath]);

  //   const handleSubmit = useCallback(
  //     (x: any) => {
  //       console.log(">>> x", x);

  //       const isLastPage = currentStep === Object.keys(STEPS).length;
  //       if (isLastPage) {
  //         console.log(">>>> last page");
  //       } else {
  //         next();
  //       }
  //     },
  //     [currentStep, next, STEPS]
  //   );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <PageContainer>
      <Titlebar>{title}</Titlebar>
      <Card>
        {/* progress bar will be here */}
        <Container column>
          <FullWidth between>
            {/* <CurrentStepComponent /> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue="test" {...register("example")} />

              <input {...register("exampleRequired", { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" />
            </form>
          </FullWidth>
          {/* <WizardButtons */}
        </Container>
      </Card>
    </PageContainer>
  );
};
