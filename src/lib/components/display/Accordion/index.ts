import AccordionComponent from './index.svelte';
import AccordionItem from './AccordionItem.svelte';

const Accordion = AccordionComponent as typeof AccordionComponent & {
    Item: typeof AccordionItem;
};

Accordion.Item = AccordionItem;

export default Accordion;