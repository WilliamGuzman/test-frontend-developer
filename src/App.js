import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import routes from "./routes";
import "./App.css";
import Layout, { Content } from "antd/lib/layout/layout";

function App() {
  return (
    <Router>
      <Header />
      <Layout className="layout">
        <Content className="contenido">
          <div className="site-layout-content">
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.url}
                exact
                path={route.url}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </Content>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
