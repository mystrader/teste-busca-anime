import { defineConfig } from 'cypress';

export default defineConfig({
  videosFolder: './cypress/videos',
  viewportHeight: 800,
  viewportWidth: 800,
  defaultCommandTimeout: 4000,
  execTimeout: 60000,
  taskTimeout: 60000,
  env: {
    GRAPHQL_URL: 'https://graphql.anilist.co',
  },
  experimentalStudio: true,
  video: true,
  videoCompression: 32,
});
