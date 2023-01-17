/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewMarketingPricingOverridesProps = {
    NewMarketingPricing?: PrimitiveOverrideProps<FlexProps>;
    "Frame 63"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 390"?: PrimitiveOverrideProps<FlexProps>;
    Free?: PrimitiveOverrideProps<TextProps>;
    "$0/mo"?: PrimitiveOverrideProps<TextProps>;
    Button36573026?: PrimitiveOverrideProps<ButtonProps>;
    Divider29766687?: PrimitiveOverrideProps<DividerProps>;
    "Frame 13829766688"?: PrimitiveOverrideProps<FlexProps>;
    Icon29766689?: PrimitiveOverrideProps<ViewProps>;
    Vector29766690?: PrimitiveOverrideProps<IconProps>;
    "Try demo now for free, limited to 2 recommendations per day"?: PrimitiveOverrideProps<TextProps>;
    "Frame 394"?: PrimitiveOverrideProps<FlexProps>;
    Yearly?: PrimitiveOverrideProps<TextProps>;
    "$9/mo"?: PrimitiveOverrideProps<TextProps>;
    Button36572918?: PrimitiveOverrideProps<ButtonProps>;
    Divider36572919?: PrimitiveOverrideProps<DividerProps>;
    "Frame 13936572924"?: PrimitiveOverrideProps<FlexProps>;
    Icon36572925?: PrimitiveOverrideProps<ViewProps>;
    Vector36572926?: PrimitiveOverrideProps<IconProps>;
    "200 book recommendations per month36572927"?: PrimitiveOverrideProps<TextProps>;
    "Frame 137"?: PrimitiveOverrideProps<FlexProps>;
    Icon36572929?: PrimitiveOverrideProps<ViewProps>;
    Vector36572930?: PrimitiveOverrideProps<IconProps>;
    "1000 songs per month36572931"?: PrimitiveOverrideProps<TextProps>;
    "Frame 13836572920"?: PrimitiveOverrideProps<FlexProps>;
    Icon36572921?: PrimitiveOverrideProps<ViewProps>;
    Vector36572922?: PrimitiveOverrideProps<IconProps>;
    "Save $36 when buying for a year"?: PrimitiveOverrideProps<TextProps>;
    "Frame 395"?: PrimitiveOverrideProps<FlexProps>;
    Monthly?: PrimitiveOverrideProps<TextProps>;
    "$12/mo"?: PrimitiveOverrideProps<TextProps>;
    Button36572964?: PrimitiveOverrideProps<ButtonProps>;
    Divider36572965?: PrimitiveOverrideProps<DividerProps>;
    "Frame 13836572966"?: PrimitiveOverrideProps<FlexProps>;
    Icon36572967?: PrimitiveOverrideProps<ViewProps>;
    Vector36572968?: PrimitiveOverrideProps<IconProps>;
    "200 book recommendations per month36572969"?: PrimitiveOverrideProps<TextProps>;
    "Frame 13936572970"?: PrimitiveOverrideProps<FlexProps>;
    Icon36572971?: PrimitiveOverrideProps<ViewProps>;
    Vector36572972?: PrimitiveOverrideProps<IconProps>;
    "1000 songs per month36572973"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NewMarketingPricingProps = React.PropsWithChildren<Partial<FlexProps> & {
    handleClickOne?: (event: SyntheticEvent) => void;
    handleClickTwo?: (event: SyntheticEvent) => void;
    handleClickThree?: (event: SyntheticEvent) => void;
} & {
    overrides?: NewMarketingPricingOverridesProps | undefined | null;
}>;
export default function NewMarketingPricing(props: NewMarketingPricingProps): React.ReactElement;
