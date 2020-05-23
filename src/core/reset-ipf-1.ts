import styled from 'styled-components';

export const fontFamily = '\'Roboto\', sans-serif';
export const TOOLTIPS_ACTIVE = false;

export const StyledWrapperReset = styled.div`
* {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    font-family: ${fontFamily};
    box-sizing: border-box;
    .drop-element {
      z-index: 99999999999;
    }
  }

  body, #root {
    overflow: hidden;
    width: 100%;
    height: 100vH;
  }

  a, h1, h2, h3, h4, h5, h6, strong, span[role=link] {font-weight: 500;}

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section { display: block; }
  body { line-height: 1; }
  ol, ul { list-style: none; }
  blockquote, q {
    quotes: none;

    &:before,
    &:after {
      content: '';
      content: none;
    }
  }

  *::selection {
      background-color: #8ED8F8;
      color: #000000;
    }


  /* ---------------------------------------
   * MUI1 Modal styling
   * ---------------------------------------
   */
  div.ui-modal {
    z-index: 10000000;
  }


  /* ---------------------------------------
   * MUI1 Dango styling
   * ---------------------------------------
   */
  body > div.dango-menu {
    z-index: 900000;

    > div[role="document"] > ul[role="menu"] {
      padding: 0 !important;

      > div {
        border-color: transparent;
        outline: transparent;
      }
    }

    li[role="menuitem"] {
      min-height: 32px !important;
      line-height: 32px !important;
      font-size: 12px !important;
      font-family: ${fontFamily} !important;
      padding: 0 0.5rem;
      justify-content: space-between;

      & svg {
        margin: 4px !important;
      }
    }
  }

  div {
    .dango-menu > button {
      font-family: ${fontFamily} !important;
      padding: 0 !important;
      margin: 0 !important;

      &:hover {
        background: transparent;
      }
    }
  }

  /* ---------------------------------------
   * DatePicker selected colour
   * ---------------------------------------
   */
  div.ui-date-picker, div.ui-date-picker-high-contrast, div.e-dropdownbase {
    font-family: ${fontFamily} !important;

    /* Current day styles */
    .e-calendar .e-content td.e-focused-date.e-today span.e-day,
    .e-calendar .e-content td.e-today span.e-day {
       border-color: #3f586e;
       color: #3f586e;
    }

    /* Input styling */
    .e-float-input input,
    .e-float-input textarea,
    .e-float-input.e-control-wrapper input,
    .e-float-input.e-control-wrapper textarea {
      font-family: ${fontFamily} !important;
    }


    /* Calendar selected styles */
    .e-calendar .e-content td.e-selected span.e-day,
    .e-calendar .e-content td.e-today.e-selected:hover span.e-day,
    .e-calendar .e-content td.e-selected:hover span.e-day {
      background-color: rgb(158, 215, 245);
      border-color: #8ED8F8;
      color: #3f586e;
      font-weight: bold;
    }

    /* Label styling */
    label.e-float-text,
    .e-float-input label.e-float-text,
    .e-float-input.e-control-wrapper label.e-float-text {
      font-family: ${fontFamily} !important;
    }


    /* Button styles */
    .e-btn.e-flat.e-primary, .e-css.e-btn.e-flat.e-primary {
      color: #3f586e;
    }

    .e-btn.e-flat.e-primary:hover, .e-css.e-btn.e-flat.e-primary:hover {
      background-color: #F2F2F2;
    }

    // &.e-disabled { z-index: 1; }
  }

  div.ui-date-picker-high-contrast {
    margin-top: -4px;
  }


  /* ---------------------------------------
   * DateRangePicker selected colour
   * ---------------------------------------
   */
  div.ui-date-range-picker {
    z-index: 99999;
    font-family: ${fontFamily} !important;
  }


  .tooltip-component {
    font-family: ${fontFamily} !important;
    font-size: 11px !important;
  }



  /* ---------------------------------------
   * SuperSelect selected colour
   * ---------------------------------------
   */
  .ui-super-select {
    font-family: ${fontFamily} !important;

    .e-dropdownbase .e-list-item.e-active,
    .e-dropdownbase .e-list-item.e-active.e-hover {
      font-family: ${fontFamily} !important;
      color: #3f586e;
      font-weight: normal;
    }

    input, label, label.e-float-text,
    .e-float-input label.e-float-text,
    .e-float-input.e-control-wrapper label.e-float-text {
      font-family: ${fontFamily} !important;
    }

    &.e-popup {
      z-index: 99999;
    }
  }

  .ui-date-picker,
  .ui-number-field,
  .ui-number-field label,
  .ui-number-field input,
  .ui-text-field,
  .ui-text-field label,
  .ui-text-field input,
  .ui-viewer-field input,
  .ui-super-select,
  .ui-super-select label,
  .ui-super-select select,
  .ui-super-select input,
  .ui-checkbox-field label > span,
  .ui-super-select .e-content.e-dropdownbase,
  .ui-viewer-field select,
  .ui-date-range-picker,
  [class^="filepond"],
  [class*="MuiInput-input"] {
    font-family: ${fontFamily} !important;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .ace_editor * {
    font-family: monospace !important;
    transition: none;
  }
`;