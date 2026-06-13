import SkeletonComponent from './index.svelte';
import SkeletonGroup from './Group.svelte';

const Skeleton = SkeletonComponent as typeof SkeletonComponent & {
    Group: typeof SkeletonGroup;
};

Skeleton.Group = SkeletonGroup;

export default Skeleton;