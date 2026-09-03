# DocAI (frontend)

React client for **DocAI** — upload medical images/reports and read AI-generated structured notes. Pair with the API in [docai-docker](https://github.com/dakshgateway98/docai-docker).

The UI started from a Vite + Redux + Tailwind + i18n boilerplate (MIT). App screens, API wiring, and i18n for DocAI are this project.

**Not a medical device.**

## Run

```bash
git clone https://github.com/dakshgateway98/docai.git
cd docai
cp .env.example .env
# REACT_APP_API_URL must point at the DocAI API, e.g. http://localhost:8080/api
npm install
npm start
```

UI: http://localhost:5173

Start [docai-docker](https://github.com/dakshgateway98/docai-docker) first, or you will only see login/API errors.

## Stack

React 18 · Vite · Redux Toolkit · Tailwind CSS · i18next (English / Italian)
