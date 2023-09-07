import styled from "styled-components";

export const WritingWrap = styled.div`
    color: #000;
`

export const WritingHeader = styled.div`
    position: relative;
    margin-top: 20px;
    border-bottom: 1px solid #323232;
    text-align: left;

    & > .title {
        margin-bottom: 16px;
        font-size: 22px;
        color: #000000;
    }

    & > .tool_area {
        position: absolute;
        bottom: 12px;
        right: 0;

        
    }
`

export const WriteBtn = styled.button`
        min-width: 46px;
        height: 36px;
        margin-left: 10px;
        padding: 0 12px;
        font-size: 13px;
        line-height: 36px;
        display: inline-block;
        border-radius: 6px;
        box-sizing: border-box;
        font-weight: 700;
        text-align: center;
        vertical-align: top;
`

export const WritingContent = styled.div`
    position: relative;
    padding-top: 12px;
    padding-bottom: 50px;
`

export const WritingEditor = styled.div`
    float: left;
    width: 862px;
`

export const FlexableTextArea = styled.div`
    & > .textarea_input {
        display: inline-block;
        width: 100%;
        min-height: 40px;
        padding: 11px 12px 10px;
        border: 1px solid #ebecef;
        box-sizing: border-box;
        overflow: hidden;
        resize: none;
        word-break: break-all;
        font-size: 15px;
        letter-spacing: -.23px;
        line-height: 17px;
        outline: none;
    }

    & textarea {
        font-weight: 400;
        writing-mode: horizontal-tb !important;        
    }
`

export const Editor = styled.div`
    margin-top: 12px;
    border: 1px solid #ebecef;
    border-bottom: 0;
    background: #ffffff;
`