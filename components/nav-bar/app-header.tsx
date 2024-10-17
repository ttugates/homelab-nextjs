import { AppBreadcrumb } from "./app-breadcrumb"
import { NavMenu } from "./nav-menu"
import { UserLogInAvatar } from "./user-log-in"


export const AppHeader = () => {
  return (
    <header className="bg-blue-950 p-4 text-white text-center grid grid-cols-3 gap-4">
      <AppBreadcrumb />
      <div className="flex justify-center">
        <NavMenu />
      </div>
      <div className="flex justify-end">
        <UserLogInAvatar />
      </div>
    </header>
  )
}


