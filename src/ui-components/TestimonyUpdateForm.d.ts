/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Testimony } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestimonyUpdateFormInputValues = {
    name?: string;
    body?: string;
    avatar?: string;
};
export declare type TestimonyUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonyUpdateFormOverridesProps = {
    TestimonyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestimonyUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestimonyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testimony?: Testimony;
    onSubmit?: (fields: TestimonyUpdateFormInputValues) => TestimonyUpdateFormInputValues;
    onSuccess?: (fields: TestimonyUpdateFormInputValues) => void;
    onError?: (fields: TestimonyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TestimonyUpdateFormInputValues) => TestimonyUpdateFormInputValues;
    onValidate?: TestimonyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TestimonyUpdateForm(props: TestimonyUpdateFormProps): React.ReactElement;
