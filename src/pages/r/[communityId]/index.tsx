import { CommunityData } from "@/atoms/communityAtom";
import Header from "@/components/Community/Header";
import NotFound from "@/components/Community/NotFound";
import { db } from "@/firebase/clientApp";
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
  missingPageName: string,
};

const CommunityPage: React.FC<CommunityPageProps> = ({
  commData,
  missingPageName,
}) => {
  if (commData) {
    return (
      <>
        <Header commData={commData} />
      </>
    );
  } else {
    return <NotFound missingPageName={missingPageName} />;
  }
};

function pageProps(doc: DocumentSnapshot<DocumentData>) {
  if (!doc.exists()) { return {props:{commData: "", missingPageName: doc.id}}; } // to signal when a community does not exist
  let data = doc.data() as CommunityData;
  // you must return a JSON-serializable object
  // no props with objects or undefined vals fror Next.js
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
