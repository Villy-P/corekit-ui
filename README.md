# Corekit UI

Corekit UI is a highly customizable component library written in Svelte 5.

## Installation

Install via `npm`:

``` bash
npm i @valerius_petrini/corekit-ui
```

After that, each component can be included in your project through an import:

``` js
import { Navbar, Image } from '@valerius_petrini/corekit-ui';
```

## Local Development

To develop Corekit UI on your own device, clone the repo locally and run these commands:

``` bash
npm i
npm run dev # Run Storybook
```

Storybook will open the UI in a tab.

## Component List

- Display
  - Accordion
    - AccordionItem
  - Badge
  - Card
  - Copyright
  - DataGrid
  - Image
  - KBD
  - Skeleton
  - Table
    - TableBody
    - TableCell
    - TableHeadCell
    - TableHeader
    - TableRow
  - Tree
    - TreeNode
- Feedback
  - Loader
  - Modal
  - Progress
  - Toast
- Inputs
  - Button
  - Checkbox
  - ColorInput
  - Combobox
  - FileInput
  - Input
  - Select
  - Textarea
- Layout
  - Box
- Navigation
  - Breadcrumb
    - BreadcrumbItem
  - Footer
  - Navbar
    - NavbarDropdown
    - NavbarElement
    - NavbarSeparator
  - SideNavbar
- Overlay
  - Tooltip
- Typography
  - Link
  - Text
  - Typewriter
- Utility (Requires SvelteKit)
  - Analytics
  - SEO