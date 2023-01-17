/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NewTestimonyProps } from "./NewTestimony";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewTestimoniesOverridesProps = {
    NewTestimonies?: PrimitiveOverrideProps<CollectionProps>;
    NewTestimony?: NewTestimonyProps;
} & EscapeHatchProps;
export declare type NewTestimoniesProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => NewTestimonyProps;
} & {
    overrides?: NewTestimoniesOverridesProps | undefined | null;
}>;
export default function NewTestimonies(props: NewTestimoniesProps): React.ReactElement;
