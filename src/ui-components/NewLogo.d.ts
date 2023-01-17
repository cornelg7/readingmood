/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewLogoOverridesProps = {
    NewLogo?: PrimitiveOverrideProps<ViewProps>;
    Vector36503198?: PrimitiveOverrideProps<IconProps>;
    Vector36563224?: PrimitiveOverrideProps<IconProps>;
    Vector36503200?: PrimitiveOverrideProps<IconProps>;
    Vector36503203?: PrimitiveOverrideProps<IconProps>;
    Vector36503204?: PrimitiveOverrideProps<IconProps>;
    "headphones 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector36562744?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector36563031?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NewLogoProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NewLogoOverridesProps | undefined | null;
}>;
export default function NewLogo(props: NewLogoProps): React.ReactElement;
