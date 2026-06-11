import NavbarComponent from './index.svelte';
import NavbarDropdown from './AccordionItem.svelte';
import NavbarElement from './NavbarElement.svelte';
import NavbarSeparator from './NavbarSeparator.svelte';

const Navbar = NavbarComponent as typeof NavbarComponent & {
    Dropdown: typeof NavbarDropdown;
    Element: typeof NavbarElement;
    Separator: typeof NavbarSeparator;
};

Navbar.Dropdown = NavbarDropdown;
Navbar.Element = NavbarElement;
Navbar.Separator = NavbarSeparator;

export default Navbar;