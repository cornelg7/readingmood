/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NewLogo from "./NewLogo";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function NewFooter(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="137px"
      direction="row"
      width="1163px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="8px 24px 8px 24px"
      backgroundColor="rgba(9,27,42,1)"
      {...getOverrideProps(overrides, "NewFooter")}
      {...rest}
    >
      <NewLogo
        width="171px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NewLogo")}
      ></NewLogo>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(239,240,240,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="© Copyright piqbubble 2023"
        {...getOverrideProps(overrides, "\u00A9 Copyright piqbubble 2023")}
      ></Text>
    </Flex>
  );
}
