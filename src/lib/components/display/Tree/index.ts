import TreeComponent from './index.svelte';
import TreeNode from './TreeNode.svelte';

const Tree = TreeComponent as typeof TreeComponent & {
    Node: typeof TreeNode;
};

Tree.Node = TreeNode;

export default Tree;