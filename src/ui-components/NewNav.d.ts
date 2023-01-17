/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NewLogoProps } from "./NewLogo";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewNavOverridesProps = {
    NewNav?: PrimitiveOverrideProps<FlexProps>;
    NewLogo?: NewLogoProps;
    Menu?: PrimitiveOverrideProps<FlexProps>;
    User36503183?: PrimitiveOverrideProps<FlexProps>;
    User36503184?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NewNavProps = React.PropsWithChildren<Partial<FlexProps> & {
    name?: String;
    authText?: String;
    handleAuth?: (event: SyntheticEvent) => void;
} & {
    overrides?: NewNavOverridesProps | undefined | null;
}>;
export default function NewNav(props: NewNavProps): React.ReactElement;
