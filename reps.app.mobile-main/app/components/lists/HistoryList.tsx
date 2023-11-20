import React, { FC, useMemo } from 'react';
import { SectionListData, StyleSheet } from 'react-native';
import { format, parseISO } from 'date-fns';
import { Box, Heading, SectionList } from 'native-base';
import { ISectionListProps } from 'native-base/lib/typescript/components/basic/SectionList/types';

import HistoryListItem from 'components/listItems/HistoryListItem';
import { HistoryListData, HistoryListDataItem } from 'models/list.model';

interface Section {
  title: string;
  data: Array<HistoryListData>;
}

interface Props {
  containerProps?: ISectionListProps<HistoryListDataItem, Section>;
  data?: Array<SectionListData<HistoryListDataItem | null>>;
  ListHeaderComponent?: JSX.Element;
  handleDeleteItem?: (id: string) => void;
}

const HistoryListSectionHeader: FC<{ title: string }> = ({
  title,
}): JSX.Element => {
  const formattedTitle = useMemo(() => {
    return format(parseISO(title), 'MMM yyyy');
  }, [title]);

  return (
    <Heading
      fontSize={16}
      fontWeight={700}
      lineHeight={21}
      px={4}
      py={2}
      pt={6}
      bg={'backgroundGray.400'}
    >
      {formattedTitle}
    </Heading>
  );
};

const HistoryList: FC<Props> = (props: Props) => {
  const { containerProps, data, handleDeleteItem, ListHeaderComponent } = props;

  return (
    <SectionList<HistoryListDataItem, Section>
      sections={data as any}
      keyExtractor={(item): string => {
        return item.id || Math.random().toString();
      }}
      renderItem={({ item }): JSX.Element => (
        <HistoryListItem item={item} handleDeleteItem={handleDeleteItem} />
      )}
      renderSectionHeader={(sectionData): JSX.Element => {
        return <HistoryListSectionHeader title={sectionData.section.title} />;
      }}
      ListHeaderComponentStyle={style.headerComponent}
      ListHeaderComponent={ListHeaderComponent}
      ItemSeparatorComponent={(): JSX.Element => {
        return (
          <Box borderColor={'white:alpha.70'} borderBottomWidth={1} m={4} />
        );
      }}
      SectionSeparatorComponent={(): JSX.Element => {
        return <Box mt={4} />;
      }}
      {...containerProps}
    />
  );
};

const style = StyleSheet.create({
  headerComponent: {
    margin: 16,
  },
});

export default HistoryList;
