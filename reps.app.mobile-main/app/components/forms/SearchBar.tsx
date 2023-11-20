import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Flex, Input } from 'native-base';

interface Props {
  placeholder?: string;
}

const SearchBar: FC<Props> = ({ placeholder }): JSX.Element => {
  return (
    <Flex>
      <Input
        mx={2}
        mt={4}
        bg={'white'}
        left={0}
        right={0}
        placeholder={placeholder}
        placeholderTextColor={'gray.400'}
        borderRadius="4"
        py="3"
        px="2"
        fontSize="14"
        InputLeftElement={
          <FontAwesomeIcon
            icon={faSearch}
            color={'#F5610B'}
            style={styles.icon}
          />
        }
      />
    </Flex>
  );
};

const styles = StyleSheet.create({
  icon: { marginLeft: 10 },
});

export default SearchBar;
