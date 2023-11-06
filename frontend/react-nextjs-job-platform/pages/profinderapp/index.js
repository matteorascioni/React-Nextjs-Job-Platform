import React, { Fragment } from 'react';
import CandidateSection from '@sections/CandidateSection/CandidateSection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DUMMY_ITEMS = [
    {
        src:"",
        alt: "",
        name: "name",
        id: "c1",
    },
    {
        src:"",
        alt: "",
        name: "{{name}} 2",
        id: "c2"
    },
    {
        src:"",
        alt: "",
        name: "{{name}} 3",
        id: "c3"
    },
    {
        src:"",
        alt: "",
        name: "{{name}} 4",
        id: "c4"
    },
    {
        src:"",
        alt: "",
        name: "{{name}} 5",
        id: "c5"
    },
    {
        src:"",
        alt: "",
        name: "{{name}} 6",
        id: "c6"
    },
];

export async function getStaticProps({ locale }) {
    return{
        props: {
            ...(await serverSideTranslations(locale, ['home', 'common'])),
        },
    };
}

export default function HomeApp() {
    return (
        <Fragment>
            <CandidateSection 
                headline="Dummy Headline"
                items={DUMMY_ITEMS}
            />
            <CandidateSection 
                headline="Dummy Headline"
                items={DUMMY_ITEMS}
            />
            <CandidateSection 
                headline="Dummy Headline"
                items={DUMMY_ITEMS}
            />
        </Fragment>
    );
}