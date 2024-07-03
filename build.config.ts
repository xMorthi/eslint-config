import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/flat.ts'],
  rollup: {
    emitCJS: true,
  },
});
