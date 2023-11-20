import React, { FC } from 'react';
import { SectionListData } from 'react-native';
import { SectionList } from 'native-base';
import { ISectionListProps } from 'native-base/lib/typescript/components/basic/SectionList/types';

import RoundedImageTitleListItem from 'components/listItems/RoundImageTitleListItem';
import { RoundImageTitleListDataItem } from 'models/list.model';

interface Section {
  title: string;
  data: Array<RoundImageTitleListDataItem>;
}

interface Props {
  containerProps?: ISectionListProps<RoundImageTitleListDataItem, Section>;
  data?: Array<SectionListData<RoundImageTitleListDataItem>>;
  SectionHeader: any;
}

const RoundImageTitleSectionList: FC<Props> = (props: Props) => {
  const { containerProps, data, SectionHeader } = props;
  return (
    <SectionList<RoundImageTitleListDataItem, Section>
      sections={data as any}
      keyExtractor={(item, index): string => `${item.id}${index}`}
      renderItem={({ item }): JSX.Element => (
        <RoundedImageTitleListItem item={item} />
      )}
      renderSectionHeader={(sectionData): JSX.Element => {
        return <SectionHeader {...sectionData} />;
      }}
      {...containerProps}
    />
  );
};

export default RoundImageTitleSectionList;
