import * as React from 'react';
import * as CSS from 'csstype';
import { CSSProperties } from './CSSProperties';
import {
  ComposedStyleFunction,
  StyleFunction,
  PropsFor,
  SimpleStyleFunction,
  borders,
  display,
  flexbox,
  grid,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  typography,
} from './Box';
// disable automatic export
export {};

// borders.js
export const border: SimpleStyleFunction<'border'>;
export const borderTop: SimpleStyleFunction<'borderTop'>;
export const borderRight: SimpleStyleFunction<'borderRight'>;
export const borderBottom: SimpleStyleFunction<'borderBottom'>;
export const borderLeft: SimpleStyleFunction<'borderLeft'>;
export const borderColor: SimpleStyleFunction<'borderColor'>;
export const borderRadius: SimpleStyleFunction<'borderRadius'>;
export type BordersProps = PropsFor<typeof borders>;

// breakpoints.js
type DefaultBreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export function handleBreakpoints<Props>(
  props: Props,
  propValue: any,
  styleFromPropValue: (value: any) => any,
): any;

/**
 * @returns An enhanced stylefunction that considers breakpoints
 */
export function breakpoints<Props, Breakpoints extends string = DefaultBreakPoints>(
  styleFunction: StyleFunction<Props>,
): StyleFunction<Partial<Record<Breakpoints, Props>> & Props>;

// restructures the breakpoints in the in the correct order and merges all styles args
export function mergeBreakpointsInOrder(
  breakpointsInput: { keys: string[]; up: (key: string) => string },
  ...styles: object[]
): object;

export function compose<T extends Array<StyleFunction<any>>>(...args: T): ComposedStyleFunction<T>;

export type DisplayProps = PropsFor<typeof display>;

// flexbox.js
export type FlexboxProps = PropsFor<typeof flexbox>;

// grid.js
export type GridProps = PropsFor<typeof grid>;

// palette.js
export const color: SimpleStyleFunction<'color'>;
export const bgcolor: SimpleStyleFunction<'bgcolor'>;
export type PaletteProps = PropsFor<typeof palette>;

export type PositionsProps = PropsFor<typeof positions>;

export type ShadowsProps = PropsFor<typeof shadows>;

// * sizing.js TODO
export const width: SimpleStyleFunction<'width'>;
export const maxWidth: SimpleStyleFunction<'maxWidth'>;
export const minWidth: SimpleStyleFunction<'minWidth'>;
export const height: SimpleStyleFunction<'height'>;
export const maxHeight: SimpleStyleFunction<'maxHeight'>;
export const minHeight: SimpleStyleFunction<'minHeight'>;
export const sizeWidth: SimpleStyleFunction<'sizeWidth'>;
export const sizeHeight: SimpleStyleFunction<'sizeHeight'>;
export const boxSizing: SimpleStyleFunction<'boxSizing'>;
export type SizingProps = PropsFor<typeof sizing>;

// spacing.js
export type SpacingProps = PropsFor<typeof spacing>;
export function createUnarySpacing<Spacing>(theme: { spacing: Spacing }): Spacing extends number
  ? (abs: number | string) => number | number
  : Spacing extends any[]
  ? <Index extends number>(abs: Index | string) => Spacing[Index] | string
  : Spacing extends (...args: unknown[]) => unknown
  ? Spacing
  : // warns in Dev
    () => undefined;

export const margin: SimpleStyleFunction<
  | 'm'
  | 'mt'
  | 'mr'
  | 'mb'
  | 'ml'
  | 'mx'
  | 'my'
  | 'margin'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
  | 'marginX'
  | 'marginY'
>;

export type MarginProps = PropsFor<typeof margin>;

export const padding: SimpleStyleFunction<
  | 'p'
  | 'pt'
  | 'pr'
  | 'pb'
  | 'pl'
  | 'px'
  | 'py'
  | 'padding'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
  | 'paddingX'
  | 'paddingY'
>;

export type PaddingProps = PropsFor<typeof padding>;

// style.js
export interface StyleOptions<PropKey> {
  cssProperty?: PropKey | keyof React.CSSProperties | false;
  prop: PropKey;
  /**
   * dot access in `Theme`
   */
  themeKey?: string;
  transform?: (cssValue: unknown) => number | string | React.CSSProperties | CSSObject;
}
export function style<PropKey extends string, Theme extends object>(
  options: StyleOptions<PropKey>,
): StyleFunction<{ [K in PropKey]?: unknown } & { theme: Theme }>;

// typography.js
export const typographyVariant: SimpleStyleFunction<'typography'>;
export const fontFamily: SimpleStyleFunction<'fontFamily'>;
export const fontSize: SimpleStyleFunction<'fontSize'>;
export const fontStyle: SimpleStyleFunction<'fontStyle'>;
export const fontWeight: SimpleStyleFunction<'fontWeight'>;
export const letterSpacing: SimpleStyleFunction<'letterSpacing'>;
export const lineHeight: SimpleStyleFunction<'lineHeight'>;
export const textAlign: SimpleStyleFunction<'textAlign'>;
export type TypographyProps = PropsFor<typeof typography>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export function unstable_getThemeValue(prop: string, value: any, theme: object): any;

/**
 * The `css` function accepts arrays as values for mobile-first responsive styles.
 * Note that this extends to non-theme values also. For example `display=['none', 'block']`
 * will also works.
 */
export type ResponsiveStyleValue<T> = T | Array<T | null> | { [key: string]: T | null };

/**
 * CSS as a plain object that is compatible with CSS-in-JS libraries.
 * Copied directly from [emotion](https://github.com/emotion-js/emotion/blob/ca3ad1c1dcabf78a95b55cc2dc94cad1998a3196/packages/serialize/types/index.d.ts#L45) types.
 */
export interface CSSObject
  extends CSSPropertiesWithMultiValues,
    CSSPseudosForCSSObject,
    CSSOthersObjectForCSSObject {}

export type CSSPropertiesWithMultiValues = {
  [K in keyof CSSProperties]: CSSProperties[K];
};
export type CSSPseudosForCSSObject = { [K in CSS.Pseudos]?: CSSObject };
export type CSSInterpolation = undefined | number | string | CSSObject;
export interface CSSOthersObjectForCSSObject {
  [propertiesName: string]: CSSInterpolation;
}

export {
  default as unstable_styleFunctionSx,
  extendSxProp as unstable_extendSxProp,
} from './styleFunctionSx';
export * from './styleFunctionSx';

export { default as Box } from './Box';
export * from './Box';

export { default as createBox } from './createBox';
