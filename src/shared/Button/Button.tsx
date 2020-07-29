import React, {FunctionComponent} from 'react';
import './button.css';

interface ButtonProps {
    type: string;
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FunctionComponent<ButtonProps> = ({type, onClick, children, disabled}) => {
    const getCss = (type: string): string => {
        switch (type) {
            case 'submit': {
                return 'submit br2 bg-green b--none white';
            }
            case 'new': {
                return 'new b--none green bg-white';
            }
            case 'remove': {
                return 'remove b--none red bg-white';
            }
            default:
                return '';
        }
    }

    return <button className={getCss(type)} onClick={(e): void => onClick(e)} disabled={disabled}>{children}</button>
};

export default Button;

