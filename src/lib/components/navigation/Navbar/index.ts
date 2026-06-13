import NavbarComponent from './index.svelte';
import NavbarDropdown from './Dropdown.svelte';
import NavbarElement from './Element.svelte';
import NavbarSeparator from './Separator.svelte';

const Navbar = NavbarComponent as typeof NavbarComponent & {
    Dropdown: typeof NavbarDropdown;
    Element: typeof NavbarElement;
    Separator: typeof NavbarSeparator;
};

Navbar.Dropdown = NavbarDropdown;
Navbar.Element = NavbarElement;
Navbar.Separator = NavbarSeparator;

export default Navbar;