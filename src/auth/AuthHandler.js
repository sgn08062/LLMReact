

function AuthHandler() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null: 검사 중, false: 실패, true: 성공
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
            setIsAuthenticated(false);
            return;
    }

    fetch("token/check",{
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if(response.status === 200){
        setIsAuthenticated(true);
      }else{
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username");
        setIsAuthenticated(false);
      }
    })
    .catch((error) => {
      console.error("Auth check failed", error);
      setIsAuthenticated(false);
    });
  }, []);

  if(isAuthenticated === null){
    return <div>Loading...</div>
  }

  if(isAuthenticated === false){
    return <Navigate to="/login" replace={true}/>;
  }

  return <Outlet/>;
}

export default AuthHandler;