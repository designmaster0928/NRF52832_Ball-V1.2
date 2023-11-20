import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { CheckIcon, ISelectProps, Select } from 'native-base';

interface Props<T> {
  handleValueChange?: (value: T) => void;
  options: Array<string>;
  selectProps?: ISelectProps;
  title: string;
}

export function SelectLarge<T>({
  handleValueChange,
  options,
  selectProps,
  title,
}: Props<T>): JSX.Element {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <Select
      accessibilityLabel={title}
      borderColor={'gray.400'}
      borderRadius={5}
      dropdownIcon={
        <FontAwesomeIcon
          icon={faChevronDown}
          style={styles.selectChevron}
          size={16}
        />
      }
      fontSize={'xl'}
      fontWeight={700}
      mt={4}
      onValueChange={(itemValue): void => {
        if (handleValueChange) {
          handleValueChange(itemValue as T);
        }

        setSelectedValue(itemValue);
      }}
      p={4}
      placeholder={title}
      placeholderTextColor={'white'}
      selectedValue={selectedValue}
      _actionSheet={{
        useRNModal: Platform.OS === 'ios',
      }}
      _selectedItem={{
        bg: 'teal.600',
        endIcon: <CheckIcon size="5" />,
      }}
      _text={{
        color: 'blue',
      }}
      {...selectProps}
    >
      {options.map((option) => (
        <Select.Item key={option} label={option} value={option.toLowerCase()} />
      ))}
    </Select>
  );
}

const styles = StyleSheet.create({
  selectChevron: {
    color: 'white',
    marginRight: 24,
  },
});
