import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['src/flat.ts'],
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});
