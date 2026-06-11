import BreadcrumbComponent from './index.svelte';
import BreadcrumbItem from './BreadcrumbItem.svelte';

const Breadcrumb = BreadcrumbComponent as typeof BreadcrumbComponent & {
    Item: typeof BreadcrumbItem;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;