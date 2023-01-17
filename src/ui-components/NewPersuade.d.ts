/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewPersuadeOverridesProps = {
    NewPersuade?: PrimitiveOverrideProps<FlexProps>;
    "Become a member to get 200 book recommendations per month!"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Banner?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type NewPersuadeProps = React.PropsWithChildren<Partial<FlexProps> & {
    handleClick?: (event: SyntheticEvent) => void;
    src?: String;
} & {
    overrides?: NewPersuadeOverridesProps | undefined | null;
}>;
export default function NewPersuade(props: NewPersuadeProps): React.ReactElement;
