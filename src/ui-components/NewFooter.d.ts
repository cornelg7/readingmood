/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NewLogoProps } from "./NewLogo";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewFooterOverridesProps = {
    NewFooter?: PrimitiveOverrideProps<FlexProps>;
    NewLogo?: NewLogoProps;
    "\u00A9 Copyright piqbubble 2023"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NewFooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NewFooterOverridesProps | undefined | null;
}>;
export default function NewFooter(props: NewFooterProps): React.ReactElement;
