/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function NewHero(props) {
  const { mainEventHandler, secondaryEventHandler, overrides, ...rest } = props;
  return (
    <Flex
      gap="72px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(9,27,42,1)"
      {...getOverrideProps(overrides, "NewHero")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 28")}
      >
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="60px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="530px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Want to listen to music while reading?"
          {...getOverrideProps(
            overrides,
            "Want to listen to music while reading?"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="60px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="546px"
          height="83px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="We recommend songs that match the vibe of your book!"
          {...getOverrideProps(
            overrides,
            "We recommend songs that match the vibe of your book!"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="25.5px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="575px"
          height="93px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Simply enter the book title and let our app recommend songs that perfectly capture the mood and atmosphere of your favorite reads. Elevate your reading game and lose yourself in the story with readingmood."
          {...getOverrideProps(
            overrides,
            "Simply enter the book title and let our app recommend songs that perfectly capture the mood and atmosphere of your favorite reads. Elevate your reading game and lose yourself in the story with readingmood."
          )}
        ></Text>
      </Flex>
      <Flex
        gap="31px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 5589")}
      >
        <Flex
          gap="11px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="20px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(17,35,49,1)"
          {...getOverrideProps(overrides, "Button Area left")}
        >
          <Flex
            gap="11px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="11px 19px 11px 19px"
            {...getOverrideProps(overrides, "Frame 5590")}
          >
            <Button
              shrink="0"
              size="large"
              isDisabled={false}
              variation="primary"
              children="Become a member"
              onClick={mainEventHandler}
              {...getOverrideProps(overrides, "Button36513188")}
            ></Button>
            <Flex
              gap="4px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 5588")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(255,255,255,1)"
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
                children="For $9 / mo"
                {...getOverrideProps(overrides, "For $9 / mo")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Button
          shrink="0"
          size="small"
          isDisabled={false}
          variation="link"
          children="or just give it a try ->"
          onClick={secondaryEventHandler}
          {...getOverrideProps(overrides, "Button36513206")}
        ></Button>
      </Flex>
    </Flex>
  );
}
