import React from "react";
import { Button as ButtonOrigin, Flexbox, Icon } from "../shared";
import styled from "styled-components";
import { theme } from "../theme";

interface WizardButtonsProps {
  disableContinue: boolean;
  currentStep: number;
  loading: boolean;
  continueText: string;
  onContinue: () => void;
}

const Button = styled(ButtonOrigin)`
  width: 146px;
`;

const Wrapper = styled(Flexbox)`
  box-sizing: border-box;
  padding-left: ${({ theme: { wizard } }) => wizard.leftPadding};
  padding-right: ${({ theme: { wizard } }) => wizard.rightPaddingNoSkeleton};
  width: 100%;
`;

const ProgressButtons = styled(Flexbox)``;

const BackButton = styled(Flexbox)`
  color: ${({ theme }) => theme.colors.primaryBlue};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.normal};
`;

export const WizardButtons: React.FC<WizardButtonsProps> = ({
  disableContinue,
  currentStep,
  loading,
  continueText,
  onContinue,
}) => {
  return (
    <Wrapper $end={true} gridGap={theme.spaces8[5]} middle>
      <div>
        {currentStep !== 1 && (
          <BackButton
            between={true}
            // onClick={back}
          >
            <Icon type={"material"} src="keyboard_backspace" />
            &nbsp;Back
          </BackButton>
        )}
      </div>
      <ProgressButtons>
        <>
          <Flexbox>
            <div id="wizard-button"></div>
            <Button
              loading={loading}
              disabled={disableContinue || loading}
              onClick={() => onContinue()}
            >
              {continueText}
            </Button>
          </Flexbox>
        </>
      </ProgressButtons>
    </Wrapper>
  );
};
