import { ModeToggle } from "./theme-selector"

export const AppHeader = () => {
    return (
        <header className="bg-blue-950 p-4 text-white text-center flex justify-between">
        <h1 className="text-xl font-bold">My Mobile-Friendly Layout</h1>
        <ModeToggle/>
      </header>
    )    
}
