/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewHeroOverridesProps = {
    NewHero?: PrimitiveOverrideProps<FlexProps>;
    "Frame 28"?: PrimitiveOverrideProps<FlexProps>;
    "Want to listen to music while reading?"?: PrimitiveOverrideProps<TextProps>;
    "We recommend songs that match the vibe of your book!"?: PrimitiveOverrideProps<TextProps>;
    "Simply enter the book title and let our app recommend songs that perfectly capture the mood and atmosphere of your favorite reads. Elevate your reading game and lose yourself in the story with readingmood."?: PrimitiveOverrideProps<TextProps>;
    "Frame 5589"?: PrimitiveOverrideProps<FlexProps>;
    "Button Area left"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5590"?: PrimitiveOverrideProps<FlexProps>;
    Button36513188?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 5588"?: PrimitiveOverrideProps<FlexProps>;
    "For $9 / mo"?: PrimitiveOverrideProps<TextProps>;
    Button36513206?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NewHeroProps = React.PropsWithChildren<Partial<FlexProps> & {
    mainEventHandler?: (event: SyntheticEvent) => void;
    secondaryEventHandler?: (event: SyntheticEvent) => void;
} & {
    overrides?: NewHeroOverridesProps | undefined | null;
}>;
export default function NewHero(props: NewHeroProps): React.ReactElement;
