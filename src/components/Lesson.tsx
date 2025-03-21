import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
    title: string
    duration: string
    isCurrent?: boolean
    onPlay: () => void
}

export function Lesson({ title, duration, onPlay, isCurrent = false }: LessonProps) {
    return (
        <button
            onClick={onPlay} 
            data-active={isCurrent}
            disabled={isCurrent}
            className="flex items-center gap-3 text-md text-zinc-400 data-[active=true]:text-emerald-400 
            enabled:hover:text-zinc-100 transition-colors cursor-pointer"
            >
            { isCurrent ? <PlayCircle className="w-5 h-5 text-emerald-400"/> : <Video className="w-5 h-5 text-zinc-500" /> }
            
            <span>{title}</span>
            <span
                data-active={isCurrent} 
                className="ml-auto font-mono text-sm text-zinc-500 data-[active=true]:text-emerald-400"
            >
                {duration}
            </span>
        </button>
    )
}