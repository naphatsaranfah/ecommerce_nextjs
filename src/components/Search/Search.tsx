import { Input, InputGroup, InputLeftElement, Box } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { searchInputStyles } from "./styles";

export const Search = () => {
    return (
        <Box>
            <InputGroup size="sm" w={{ base: "100%", lg: "32rem" }}>
                <InputLeftElement
                    pointerEvents="none"
                    // eslint-disable-next-line react/no-children-prop
                    children={<SearchIcon color="gray.300" />}
                />
                <Input {...searchInputStyles} />
            </InputGroup>
        </Box>
    );
};
