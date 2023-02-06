import { db } from '@/firebase/clientApp';
import { doc, DocumentData, DocumentSnapshot, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

type CommunityPageProps = {
   data: undefined 
};

const CommunityPage:React.FC<CommunityPageProps> = ({data}) => {
    
    return <div>There might be posts here one day</div>
}

function pageProps(doc: DocumentSnapshot<DocumentData>) {
    const props = {
        data: doc.data()
    }
    return props
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
       console.log("getServerSideProps error", e) 
    }
}

export default CommunityPage;