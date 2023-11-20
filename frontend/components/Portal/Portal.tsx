import ReactDOM from 'react-dom';

interface IPortal {
    children: React.ReactElement | React.ReactElement[];
    wrapperId: Element | DocumentFragment;
}

const Portal = ({children, wrapperId,}: IPortal) => {
    return ReactDOM.createPortal(children, wrapperId);
};

export default Portal;
