import { CommunityData } from "@/atoms/communityAtom";
import { db } from "@/firebase/clientApp";
import { Heading } from "@chakra-ui/react";
import {
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";

type CommunityPageProps = {
  commData: CommunityData;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ commData }) => {
  return <Heading>{commData.name}</Heading>;
};

// you must return a JSON-serializable object
// no props with objects or undefined vals fror Next.js
function pageProps(doc: DocumentSnapshot<DocumentData>) {
  let data = doc.data() as CommunityData;
  return {
    props: {
      commData: { ...data, creationDate: data.creationDate.nanoseconds },
    },
  };
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const communityRef = doc(
    db,
    "communities",
    context.query.communityId as string
  );

  try {
    const communityDoc = await getDoc(communityRef);
    return pageProps(communityDoc);
  } catch (e) {
    console.log("getServerSideProps error", e);
  }
}

export default CommunityPage;
