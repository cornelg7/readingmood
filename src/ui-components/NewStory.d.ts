/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewStoryOverridesProps = {
    NewStory?: PrimitiveOverrideProps<FlexProps>;
    Banner?: PrimitiveOverrideProps<ImageProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<ViewProps>;
    ReadTime?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NewStoryProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NewStoryOverridesProps | undefined | null;
}>;
export default function NewStory(props: NewStoryProps): React.ReactElement;
