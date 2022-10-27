import React from "react";
import {
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import { Heading } from "../../../models/heading";

type Props = {
  heading: Heading | undefined;
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  practitionerName: {
    fontFamily: "Courier-Bold",
  },
  practitionerInfo: {},
  place: {
    marginTop: 5,
    textAlign: "right",
  },
});

const HeadingPreview = ({ heading }: Props) => {
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.practitionerName}>
          <Text>{heading?.name}</Text>
        </View>
        <View style={styles.practitionerInfo}>
          <Text>{heading?.content}</Text>
        </View>
        <View style={styles.place}>
          <Text>
            {heading?.place ? `Le 22/10/2022, à ${heading.place}` : null}
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <PDFViewer showToolbar={false} width={400} height={541}>
      <MyDocument />
    </PDFViewer>
  );
};

export { HeadingPreview };
