# Button Component Usage Guide

The `Button` component is a versatile and customizable button component that supports various styles, sizes, and additional features. This guide provides detailed instructions on how to use the `Button` component.

## Props

- **leftIcon**: `React.ReactElement` (Optional)
  - An element to be displayed on the left side of the button.
  
- **rightIcon**: `React.ReactElement` (Optional)
  - An element to be displayed on the right side of the button.
  
- **isLoading**: `boolean` (Optional)
  - If `true`, a loading spinner is displayed, and the button is disabled.
  
- **href**: `string` (Optional)
  - A URL that converts the button into a link.
  
- **variant**: `Variant` (Optional, default: `"default"`)
  - The style variant of the button. Options include:
    - `"default"`
    - `"primary"`
    - `"destructive"`
    - `"subtle"`
    - `"loading"`
    - `"outline"`
    - `"secondary"`
    - `"ghost"`
    - `"link"`
    
- **size**: `Size` (Optional, default: `"default"`)
  - The size of the button. Options include:
    - `"default"`
    - `"sm"`
    - `"lg"`
    - `"link"`
    - `"icon"`
    - `"circle"`
    
- **icon**: `React.ReactNode` (Optional)
  - An icon or element to be displayed inside the button when `isIconOnly` is `true`.
  
- **children**: `React.ReactNode` (Optional)
  - The content of the button.
  
- **isIconOnly**: `boolean` (Optional)
  - If `true`, the button is styled as an icon-only button.
  
- **isLeftIconVisible**: `boolean` (Optional, default: `true`)
  - If `false`, the left icon will not be displayed.
  
- **isRightIconVisible**: `boolean` (Optional, default: `true`)
  - If `false`, the right icon will not be displayed.
  
- **isDisabled**: `boolean` (Optional)
  - If `true`, the button is disabled.
  
- **ariaLabel**: `string` (Optional)
  - An accessible label for the button.
  
- **onClick**: `() => void` (Optional)
  - A function to handle the button's `onClick` event.
  
- **className**: `string` (Optional)
  - Additional CSS classes for the button.

## Examples

### Basic Button

```tsx
  <Button isLoading={true} variant="default" size="default">
      Button CTA
  </Button>
