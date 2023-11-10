import React from 'react';
import AppLayout from '@components/AppLayout/AppLayout';
import { Get } from '@helpers/fetch_';
import CandidateIdPageComponent from '@components/CandidateIdPageComponent/CandidateIdPageComponent';

const Page = () => {
    // const [data, setData] = useState({});
    // const {
    //     get: getCandidate,
    //     response: responseCandidate,
    //     pending: pendingCandidate,
    //     error: errorCandidate, 
    // } = Get();

    // useEffect(() => {
    //     getCandidate();
    // }, []);

    // useEffect(() => {
    //     if(!errorCandidate) {
    //         setData(responseCandidate);
    //     }
    // }, [responseCandidate]);

    // return(
    //     <>
    //         {pendingCandidate ? 'loading...' : (
    //             <CandidateIdPageComponent
    //                 paragraph={data.paragraph}
    //                 key={data.id}
    //                 name={data.name}
    //                 src={data.src}
    //                 alt={data.alt}
    //             />
    //         )}
    //     </>
    // )

    const scheduleCallHandler = () => {
        console.log('booked');
    }

    const DUMMY_ITEMS = {
        src:"",
        alt: "test alt image",
        name: "{{name}}",
        id: "c1",
        diploma: "Information and Technology high school diploma",
        bachelor: "Computer Science Bsc",
        master: "Software Development Msc",
        professionalCertificate: "Frontend Bootcamp",
        workExperiences: [
            {
                id: 'we1',
                companyName: 'Stark Industries',
                role: 'Software Frontend Engineer',
                from: '01/04/2021',
                to: '15/06/2022',
            },
            {
                id: 'we2',
                companyName: 'Stark Industries',
                role: 'Software Frontend Engineer',
                from: '01/04/2021',
                to: '15/06/2022',
            },
            {
                id: 'we3',
                companyName: 'Stark Industries',
                role: 'Software Frontend Engineer',
                from: '01/04/2021',
                to: '15/06/2022',
            },
        ],
        hardSkills: [
            'html5',
            'css3',
            'javascript',
            'react.js',
            'redux',
            'python3',
            'django',
            'flask',
            'mySQL',
            'MongoDB',
            'AWS'
        ],
        softSkills: [
            'teamwork',
            'adaptability',
            'empathy',
            'precision',
        ],
    }

    return(
        <CandidateIdPageComponent
            src={DUMMY_ITEMS.src}
            alt={DUMMY_ITEMS.alt}
            name={DUMMY_ITEMS.name}
            diploma={DUMMY_ITEMS.diploma}
            bachelor={DUMMY_ITEMS.bachelor}
            master={DUMMY_ITEMS.master}
            professionalCertificate={DUMMY_ITEMS.professionalCertificate}
            workExperiences={DUMMY_ITEMS.workExperiences}
            hardSkills={DUMMY_ITEMS.hardSkills}
            softSkills={DUMMY_ITEMS.softSkills}
            onClick={scheduleCallHandler}
        />
    )
}

Page.getLayout = function getLayout(page) {
    return (
        <AppLayout>
            {page}
        </AppLayout>
    )
}

export default Page;
