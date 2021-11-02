import React from "react";
import Select, { CreatableSelect } from "./chakra-react-select";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Container,
  Text,
  Link,
  FormControl,
  FormLabel,
  Code,
  FormErrorMessage
} from "@chakra-ui/react";
import { groupedOptions, colourOptions } from "./docs/data";

const mappedColourOptions = colourOptions.map((option) => ({
  ...option,
  colorScheme: option.value
}));

export default () => (
  <Container mb={12}>
    <Text p={4} fontSize="lg">
      TESt chakra
    </Text>

    <FormControl p={4}>
      <FormLabel>Select with creatable options</FormLabel>
      <CreatableSelect
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>
    <Flex>
      <Box alignItems="left">
        <Button mr={2}>Left</Button>
        <Button mr={2}>Left 1</Button>
      </Box>
      <Spacer />
      <Box alignItems="right">
        <Button spacing={4} align="right">
          Right
        </Button>
      </Box>
    </Flex>

    <FormControl p={4} isDisabled>
      <FormLabel>
        Disabled select from the <Code>FormControl</Code>
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
    </FormControl>

    <FormControl p={4} isInvalid>
      <FormLabel>
        Invalid select from the <Code>FormControl</Code>
      </FormLabel>
      <Select
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
      <FormErrorMessage>
        This error message shows because of an invalid FormControl
      </FormErrorMessage>
    </FormControl>

    <FormControl p={4}>
      <FormLabel>
        Invalid select from the <Code>Select</Code> element itself
      </FormLabel>
      <Select
        isInvalid
        isMulti
        name="colors"
        options={groupedOptions}
        placeholder="Select some colors..."
        closeMenuOnSelect={false}
      />
      <FormErrorMessage>
        You can't see this error message because the isInvalid prop is set on
        the select element instead of the form control
      </FormErrorMessage>
    </FormControl>
  </Container>
);
