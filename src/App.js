import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, redirect, useNavigate, useParams } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
let NotImpemented = () => {
  <Link to="/videos"> Ir a videos</Link>
  return <h1>Esta pagina aun no esta lista</h1>

}

let UsersOutlet = () => {
  let navigate = useNavigate();
  let redirect = () => {
    navigate('/');
  }
  return (
    <>
      <button onClick={redirect}> Ir al Home</button>
      <Outlet />
    </>
  )
}

function App() {
  const isAuth = true;
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NotImpemented />}></Route>

          <Route path="/users" element={isAuth ? <Navigate to='/' /> : <UsersOutlet />}>
            <Route path="registre" element={<NotImpemented />}></Route>
            <Route path="login" element={<NotImpemented />}></Route>
            <Route path=":id" element={<NotImpemented />}></Route>
            <Route path=":id/videos" element={<NotImpemented />}></Route>
          </Route>

          <Route path="/videos">
            <Route path="/videos" element={<NotImpemented />}></Route>
            <Route path="new" element={<NotImpemented />}></Route>
            <Route path=":id" element={<NotImpemented />}></Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
