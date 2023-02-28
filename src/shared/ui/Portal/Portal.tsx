import ReactDOM from 'react-dom';
import { ReactNode } from 'react';

interface PortalProps {
    children: ReactNode,
    parent?: Element
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        parent = document.body,
    } = props;

    return ReactDOM.createPortal(children, parent);
};
