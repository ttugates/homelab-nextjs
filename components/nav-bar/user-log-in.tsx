import { AvatarIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import { PopoverContent, PopoverTrigger, Popover } from "../ui/popover"

export const UserLogInAvatar = () => {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                    <AvatarIcon className="h-8 w-8" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-black">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Pending Auth Impl</h4>
                        <p className="text-sm text-muted-foreground">
                            Need to decide between Keycloak and OpenIdDict
                        </p>
                    </div>
                </div>
            </PopoverContent>
        </Popover>




    )

}