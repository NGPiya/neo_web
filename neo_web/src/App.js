function App() {
  return (
    <body className="bg-gradient-to-br from-cyan-500 to-blue-500 box-border h-screen">
      <div className="flex justify-center ">
        <h1 className="font-bold text-blue-700 text-7xl mt-8 mb-28">
          Neogeum
        </h1>
      </div>

      <div className="flex justify-center">
        <h1 className="font-bold text text-blue-700 text-5xl mt-8 mb-28">
          Le site est en construction
        </h1>
        
      </div>
      
      <div className="flex justify-center">
      <form method="get" action="./Neo-Launcher.zip">
          <button type="submit" className="font-bold text text-blue-700 text-5xl mt-8 mb-28 hover:text-cyan-400">Télécharger</button>
      <form method="get" action="./Neo-Launcher-Installer.exe">
          <button type="submit" className="font-bold text text-blue-700 text-5xl mt-8 mb-28 hover:text-cyan-400">Télécharge</button>
        </form>
      </div>
    </body>
  );
}

export default App;
