import BreadcrumbComponent from './index.svelte';
import BreadcrumbItem from './Item.svelte';

const Breadcrumb = BreadcrumbComponent as typeof BreadcrumbComponent & {
    Item: typeof BreadcrumbItem;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;