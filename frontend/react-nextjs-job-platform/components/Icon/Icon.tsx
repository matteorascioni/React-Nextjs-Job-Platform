import React from 'react';
import { IconClass, Icons } from '@typescript/types';

import Apache from '@svg/apache.svg';
import ArrowLeft from '@svg/arrow_left.svg';
import Aws from '@svg/aws.svg';
import Calendar from '@svg/calendar.svg';
import Css from '@svg/css.svg';
import Close from '@svg/close.svg';
import ChevronDown from '@svg/chevron_down.svg';
import ChevronLeft from '@svg/chevron_left.svg';
import ChevronRight from '@svg/chevron_right.svg';
import Django from '@svg/django.svg';
import Docker from '@svg/docker.svg';
import Education from '@svg/education.svg';
import Facebook from '@svg/facebook.svg';
import Flask from '@svg/flask.svg'; 
import Gatsby from '@svg/gatsby.svg';
import GoogleCloud from '@svg/google_cloud.svg';
import GoogleLogin from '@svg/google_login.svg';
import GraphQl from '@svg/graphql.svg';
import Html from '@svg/html.svg';
import Instagram from '@svg/instagram.svg';
import Javascript from '@svg/javascript.svg';
import Laravel from '@svg/laravel.svg';
import Linkedin from '@svg/linkedin.svg';
import Next from '@svg/next.svg';
import Nginx from '@svg/nginx.svg';
import NoSql from '@svg/nosql.svg';
import ReactIcon from '@svg/react.svg';
import Redux from '@svg/redux.svg';
import Sql from '@svg/sql.svg';
import Typescript from '@svg/typescript.svg';
import WorkExperience from '@svg/work_experience.svg';

import styles from './Icon.module.css';

interface IIcon {
    icon?: Icons | null;
    className?: string;
    iconClass?: IconClass;
}

const Icon = ({icon, iconClass, className,}: IIcon) => {
    if (!icon || !iconClass) {
        return null;
    }
    
    const classNames = `${className ? className : ''} ${styles.base} ${iconClass ? styles[iconClass] : ''}`;
    
    switch (icon) {
        case 'apache':
            return <Apache className={classNames} />;
        case 'arrow_left':
            return <ArrowLeft className={classNames} />;
        case 'aws':
            return <Aws className={classNames} />;
        case 'calendar':
            return <Calendar className={classNames} />;
        case 'css':
            return <Css className={classNames} />;
        case 'close':
            return <Close className={classNames} />;
        case 'chevron_down':
            return <ChevronDown className={classNames} />;
        case 'chevron_left':
            return <ChevronLeft className={classNames} />;
        case 'chevron_right':
            return <ChevronRight className={classNames} />;
        case 'django':
            return <Django className={classNames} />;
        case 'docker':
            return <Docker className={classNames} />;
        case 'education':
            return <Education className={classNames} />;
        case 'flask':
            return <Flask className={classNames} />;
        case 'facebook':
            return <Facebook className={classNames} />;
        case 'gatsby':
            return <Gatsby className={classNames} />;
        case 'google_cloud':
            return <GoogleCloud className={classNames} />;
        case 'google_login':
            return <GoogleLogin className={classNames} />;
        case 'graphql':
            return <GraphQl className={classNames} />;
        case 'facebook':
            return <Facebook className={classNames} />;
            //@ts-ignore
        case 'html':
            return <Html className={classNames} />;
        case 'instagram':
            return <Instagram className={classNames} />;
        case 'javascript':
            return <Javascript className={classNames} />;
        case 'laravel':
            return <Laravel className={classNames} />;
        case 'linkedin':
            return <Linkedin className={classNames} />;
        case 'next':
            return <Next className={classNames} />;
        case 'nginx':
            return <Nginx className={classNames} />;
        case 'nosql':
            return <NoSql className={classNames} />;
        case 'react':
            return <ReactIcon className={classNames} />;
        case 'redux':
            return <Redux className={classNames} />;
        case 'sql':
            return <Sql className={classNames} />;
        case 'typescript':
            return <Typescript className={classNames} />;
        case 'work_experience':
            return <WorkExperience className={classNames} />;
    }
    return null;
};

export default Icon;