// App.styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,
    Header: styled.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,
    Main: styled.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .workspaceLayout {
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: grid;
            grid-template-columns: 260px minmax(0, 1fr);
            gap: 28px;
            padding: 18px 22px 42px;
        }
        .sideMenu {
            position: sticky;
            top: 18px;
            align-self: start;
            max-height: calc(100vh - 36px);
            overflow-y: auto;
            padding: 16px 10px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
        }
        .menuLabel { margin: 0 10px 12px; color: var(--color-text-muted); font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .sideMenu nav { display: grid; gap: 5px; }
        .sideMenu button { width: 100%; padding: 10px 12px; border: 1px solid transparent; border-radius: 10px; background: transparent; color: var(--color-text-secondary); text-align: left; cursor: pointer; font: inherit; }
        .sideMenu button:hover, .sideMenu button.active { background: var(--color-primary); border-color: var(--color-primary); color: #07110b; }
        .contentWrapper { min-width: 0; padding: 4px 0; }
        @media (max-width: 820px) {
            .workspaceLayout { grid-template-columns: 1fr; padding: 14px; }
            .sideMenu { position: static; max-height: none; }
            .sideMenu nav { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `,
};
