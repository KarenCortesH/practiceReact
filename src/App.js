import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, redirect, useNavigate, useParams } from "react-router-dom";

let NotImpemented = () => {
  <Link to="/videos"> Ir a videos</Link>
  return <h1>Esta pagina aun no esta lista</h1>

}

// let videoShow = () => {
//   //const { id } = useParams();
//   console.log(id);
//   return (
//     <p>{id}</p>
//   )
// }

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
    </BrowserRouter>
  );
}

export default App;
