import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function AvatarCircles() {
    return (
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">

            <div className="flex -space-x-1 sm:-space-x-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:ring-1 sm:*:data-[slot=avatar]:ring-2">
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback className="text-xs sm:text-sm">CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
                    <AvatarImage
                        src="https://github.com/maxleiter.png"
                        alt="@maxleiter"
                    />
                    <AvatarFallback className="text-xs sm:text-sm">LR</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
                    <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                    />
                    <AvatarFallback className="text-xs sm:text-sm">ER</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback className="text-xs sm:text-sm">CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
                    <AvatarImage
                        src="https://github.com/maxleiter.png"
                        alt="@maxleiter"
                    />
                    <AvatarFallback className="text-xs sm:text-sm">LR</AvatarFallback>
                </Avatar>
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
                    <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                    />
                    <AvatarFallback className="text-xs sm:text-sm">ER</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}
