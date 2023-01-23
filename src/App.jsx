import RootLayout from "./Shared/Layouts/RootLayout";
import './app-style.css'
import AnimatedRoutes from "./Shared/Components/animatedRoutes";

const App = () => {
  return (
    <RootLayout>
      <AnimatedRoutes />
    </RootLayout>
  )
}

export default App;