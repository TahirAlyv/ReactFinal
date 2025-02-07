import styled from 'styled-components';
import { useState } from 'react';

function Footer({ onPageChange, listSize }) {
    const [pageNumbers, setPageNumbers] = useState([1, 2, 3]);

    const handleItemClick = (item) => {
        onPageChange(item);
    };

    const handleNavigation = (direction) => {
        if (direction === 'next' && pageNumbers[2] < listSize) {
            setPageNumbers((prev) => prev.map(num => num + 2));
        } else if (direction === 'prev' && pageNumbers[0] > 1) {
            setPageNumbers((prev) => prev.map(num => num - 2));
        }
    };

    const isPrevDisabled = pageNumbers[0] <= 1;
    const isNextDisabled = pageNumbers[2] >= listSize;

    return (
        <CryptoFooter>
            <Div>
                <NavButton
                    onClick={() => handleNavigation('prev')}
                    disabled={isPrevDisabled}
                >
                    {`<`}
                </NavButton>

                {pageNumbers.map((num) => (
                    <PageNumber key={num} onClick={() => handleItemClick(num)}>
                        {num}
                    </PageNumber>
                ))}

                <NavButton
                    onClick={() => handleNavigation('next')}
                    disabled={isNextDisabled}
                >
                    {`>`}
                </NavButton>
            </Div>
        </CryptoFooter>
    );
}

export default Footer;
let CryptoFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(35, 45, 66);
    width: 100%;
    height: 50px;
    margin-top: 321px;
`;

let Div = styled.div`
    display: flex;
`;

let NavButton = styled.span`
    cursor: pointer;
    opacity: ${(props) => (props.disabled ? 0.3 : 1)};
    pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
    transition: opacity 0.3s ease;
    margin: 0 10px;
`;

let PageNumber = styled.span`
    cursor: pointer;
    margin: 0 10px;
    &:hover {
        text-decoration: underline;
    }
`;
