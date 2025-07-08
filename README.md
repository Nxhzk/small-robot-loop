# 🤖 Real-time Facial Analytics System

![Tech Stack](https://img.shields.io/badge/stack-TS%2FReact%2FWebGL-blue?style=for-the-badge)
![API](https://img.shields.io/badge/FaceAPI-0.22.2-green?style=for-the-badge)

## 功能特性
- 基于face-api.js的面部识别系统
- 年龄/性别实时检测
- 68点面部特征追踪
- 表情识别（开心、悲伤、愤怒等）
- 机器人行为反馈循环

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Webcam enabled browser

### Installation
```bash
# Install core dependencies
npm install --force

# Install model utilities
npm install @tensorflow/tfjs-core@3.18.0
```

### 生产构建
```bash
npm run build
```

## 环境要求
- Node.js 18+
- 现代浏览器（支持WebGL和WebAssembly）

## 模型文件
模型文件已包含在`public/models`目录中，包含：
- 年龄性别识别模型
- 人脸特征点检测模型
- 人脸识别模型
- 表情识别模型

## 🏗 Architecture
```
├── public/
│   ├── models/       # TFJS pre-trained models
│   └── assets/       # Media resources
├── src/
│   ├── core/         # Core processors
│   │   ├── detector/  # Face detection pipeline
│   │   ├── analyzer/  # Emotion classification
│   │   └── reactor/   # Feedback mechanisms
│   ├── interfaces/  # UI components
│   │   ├── debug-panel/ # Real-time monitoring
│   │   └── hologram/    # 3D projection view
│   └── lib/          # Shared utilities
│       ├── face-api/ # API wrappers
│       └── ws-client/ # WebSocket handlers
```

## 👥 Contributing
### Development Workflow
1. 安装依赖
```bash
npm ci
```
2. 启动开发服务器
```bash
npm run dev
```
3. 代码规范
- 使用commitizen提交信息
```bash
npm run commit
```
- 提交前自动执行lint检查

## 许可证
[MIT](https://choosealicense.com/licenses/mit/)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
