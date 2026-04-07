interface AnimateProps {
    from: number;
    to: number;
    duration: number;
    onend?: () => void;
}

export interface ProgressProps {
    children?: any;
    class?: string;
    divClass?: string;
    progress?: number;
    animate?: AnimateProps
    [key: string]: any; 
};