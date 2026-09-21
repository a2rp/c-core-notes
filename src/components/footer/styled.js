import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 18px 15px 28px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        .copyright a {
            color: var(--color-text-primary);
            font-weight: 700;
        }

        @media (width < 680px) {
            align-items: flex-start;
            flex-direction: column;
        }
    `,
    Links: styled.nav`
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 8px;

        @media (width < 680px) {
            justify-content: flex-start;
        }
    `,
    IconLink: styled.a`
        width: 34px;
        height: 34px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--color-border);
        border-radius: 9px;
        color: var(--color-text-secondary);
        transition: color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;

        &:hover,
        &:focus-visible {
            color: var(--color-primary);
            border-color: var(--color-primary);
            box-shadow: 0 0 16px var(--color-shadow);
            text-decoration: none;
        }
    `,
};
