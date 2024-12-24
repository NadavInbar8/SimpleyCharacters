// import React, { useCallback, useState } from "react";
// import styled from "styled-components";
// import { Controller, FieldError, Control, FieldValues } from "react-hook-form";
// import { Flexbox } from "../Flexbox/Flexbox";
// import { InteractivePlaceholder as InteractivePlaceholderOrigin } from "../InteractivePlaceholder";
// import { Error } from "../Typography/Typography";
// import { StyledSelect } from "./StyledSelect";

// // Styled Components
// const Wrapper = styled(Flexbox)<{
//   interactivePlaceholder?: boolean;
//   hasLabel: boolean;
// }>`
//   height: unset;
//   padding-bottom: 14px;
//   position: relative;

//   ${({ interactivePlaceholder }) =>
//     interactivePlaceholder &&
//     `
//     padding-top: 17px;
//   `};
// `;

// const InteractivePlaceholder = styled(InteractivePlaceholderOrigin)<{
//   focused: boolean;
// }>`
//   ${({ focused, theme }) =>
//     focused &&
//     `
//     color: ${theme.colors.primaryBlue};
//   `};
// `;

// // Define Props for the Select Component
// interface Option {
//   label: string;
//   value: string;
// }

// interface SelectProps {
//   name: string;
//   control: Control<FieldValues>;
//   options: Option[];
//   hasLabel?: boolean;
//   hasInitialValue?: boolean;
//   interactivePlaceholder?: string;
//   placeholder?: string;
//   disabled?: boolean;
//   error?: FieldError;
//   isCreatable?: boolean;
// }

// // Main Select Component
// export const Select: React.FC<SelectProps> = ({
//   name,
//   control,
//   options,
//   hasLabel = false,
//   hasInitialValue,
//   interactivePlaceholder,
//   placeholder = "Select...",
//   disabled,
//   error,
//   isCreatable,
// }) => {
//   const [shouldBeLabel, setShouldBeLabel] = useState(
//     hasInitialValue !== undefined
//   );
//   const [focused, setFocused] = useState(false);

//   const handleInputChange = useCallback(() => {
//     if (!shouldBeLabel) setShouldBeLabel(true);
//   }, [shouldBeLabel]);

//   const handleFocus = useCallback(() => {
//     if (!shouldBeLabel) setShouldBeLabel(true);
//     setFocused(true);
//   }, [shouldBeLabel]);

//   return (
//     <Wrapper
//       column={true}
//       hasLabel={hasLabel}
//       interactivePlaceholder={!!interactivePlaceholder}
//     >
//       <InteractivePlaceholder
//         shouldBeLabel={shouldBeLabel}
//         focused={focused}
//         htmlFor={name}
//       >
//         {interactivePlaceholder}
//       </InteractivePlaceholder>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <StyledSelect
//             {...field}
//             options={options}
//             isDisabled={disabled}
//             value={field.value || (hasInitialValue ? hasInitialValue : null)}
//             placeholder={interactivePlaceholder ? null : placeholder}
//             onChange={(selected: { label: string; value: string } | null) => {
//               field.onChange(selected);
//               setFocused(false);
//             }}
//             onFocus={handleFocus}
//             onBlur={() => {
//               setShouldBeLabel(!!field.value);
//               setFocused(false);
//               field.onBlur();
//             }}
//             onInputChange={handleInputChange}
//           />
//         )}
//       />
//       {error && <Error>{error.message}</Error>}
//     </Wrapper>
//   );
// };
