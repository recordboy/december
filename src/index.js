// 초기 소스
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Router from './Router';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Router />);

// 리액트 쿼리 추가
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

// React Query
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

//먼저 client를 만들어준다.
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 애플리케이션에 클라이언트를 제공한다.
  <QueryClientProvider client={queryClient}>
    {/* 리액트 쿼리 개발 툴 */}
    <ReactQueryDevtools initialIsOpen={true} />
    {/* 내가 작업하는 앱 */}
    <Router />
  </QueryClientProvider>
);
