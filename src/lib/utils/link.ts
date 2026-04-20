export function getLinkProps(href?: string, external?: boolean, disabled?: boolean) {
    if (!href) return {};
    return {
        href: disabled ? undefined : href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
    };
}