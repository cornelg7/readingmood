/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NewLogo from "./NewLogo";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function NewNav(props) {
  const { name, authText, handleAuth, overrides, ...rest } = props;
  return (
    <Flex
      gap="370px"
      direction="row"
      width="638px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="8px 24px 8px 24px"
      backgroundColor="rgba(9,27,42,1)"
      {...getOverrideProps(overrides, "NewNav")}
      {...rest}
    >
      <NewLogo
        width="115.04px"
        height="35px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NewLogo")}
      ></NewLogo>
      <Flex
        gap="14px"
        direction="row"
        width="311px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Menu")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          borderRadius="20px"
          padding="11px 19px 11px 19px"
          backgroundColor="rgba(17,35,49,1)"
          {...getOverrideProps(overrides, "User36503183")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "User36503184")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="left"
              display={name && name == "none" ? "none" : "flex"}
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
              children={name}
              {...getOverrideProps(overrides, "Name")}
            ></Text>
            <Button
              shrink="0"
              size="default"
              isDisabled={false}
              variation="primary"
              children={authText}
              onClick={handleAuth}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
