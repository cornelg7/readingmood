/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestimonyCreateFormInputValues = {
    name?: string;
    body?: string;
    avatar?: string;
};
export declare type TestimonyCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonyCreateFormOverridesProps = {
    TestimonyCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestimonyCreateFormProps = React.PropsWithChildren<{
    overrides?: TestimonyCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestimonyCreateFormInputValues) => TestimonyCreateFormInputValues;
    onSuccess?: (fields: TestimonyCreateFormInputValues) => void;
    onError?: (fields: TestimonyCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestimonyCreateFormInputValues) => TestimonyCreateFormInputValues;
    onValidate?: TestimonyCreateFormValidationValues;
} & React.CSSProperties>;
export default function TestimonyCreateForm(props: TestimonyCreateFormProps): React.ReactElement;
