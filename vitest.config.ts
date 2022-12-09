import path from 'path';
import { defineConfig } from 'vitest/config';
import { InlineConfig } from 'vitest';

// 单元测试相关配置
const testConfig: InlineConfig = {
  // 匹配包含测试文件的 glob 规则
  include: ['src/**/__tests__/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  /**
   * 默认情况下，vitest 不显式提供全局 API。如果你更倾向于使用类似 jest 中的全局 API，
   * 可以将 --globals 选项传递给 CLI 或在配置中添加 globals: true
   */
  globals: true,
  environment: 'jsdom', // 在node端模拟dom环境
  testTimeout: 16000,
  transformMode: {
    web: [/\.[jt]sx$/],
  },
  coverage: {
    provider: 'istanbul',
    reporter: ['text', 'json', 'html'],
    reportsDirectory: 'test/coverage',
  },
};

export default defineConfig({
  resolve: {
    // alias: {
    //   'tdesign-react/es': path.resolve(__dirname, './src/'),
    //   'tdesign-react': path.resolve(__dirname, './src/'),
    //   '@test/utils': path.resolve(__dirname, './test/utils'),
    // },
  },
  test: testConfig,
});
