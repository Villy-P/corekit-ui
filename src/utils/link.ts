export function getLinkProps(href?: string, external?: boolean) {
    if (!href) return {};
    return {
        href,
        target: external ? "_blank" : undefined,
        rel: external ? "noopener noreferrer" : undefined,
    };
}