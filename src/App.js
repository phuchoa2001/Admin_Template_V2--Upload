import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from "react-toastify";

import './resetcss.scss';
import "./Global.css";
import 'antd/dist/antd.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './Layout';
import store from './redux/store';
import { httpService } from "./api/axiosClient";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

httpService.setupInterceptors(store);

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
        <Layout />
      </QueryClientProvider>
    </Provider >
  );
}

export default App;
