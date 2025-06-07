import { CircleCheck, BookText, BookCheck, CirclePlay } from "lucide-react";

const Video_section = ({ status = "belum", title = "video", desc }) => {
    return (
        <div
            className={`grid p-3.5 leading-[140%] tracking-[0.2px] rounded-[10px] border border-other-border
            ${
                status === "done"
                    ? "bg-other-primary"
                    : status === "progress"
                    ? "bg-primary-100"
                    : "bg-other-primary text-dark-secondari"
            }
            `}
        >
            <div className="flex gap-1.5 items-center">
                {title === "rangkuman" ? (
                    <BookText />
                ) : title === "quiz" ? (
                    <BookCheck />
                ) : status === "progress" ? (
                    <CirclePlay />
                ) : status === "belum" ? (
                    <CirclePlay />
                ) : (
                    <CircleCheck fill="#3ECF4C" color="#fff" />
                )}
                <p
                    className={`font-medium text-sm
                    ${
                        status === "done"
                            ? "text-dark-primary"
                            : status === "progress"
                            ? "text-dark-primary"
                            : "text-dark-secondari"
                    }
                    `}
                >
                    {title === "rangkuman"
                        ? "Rangkuman"
                        : title === "quiz"
                        ? "Quiz"
                        : "Video"}
                    : Introduction to HR
                </p>
            </div>
            <div className="px-7.5 text-dark-secondari">
                <p className="text-xs">
                    {desc === "pertanyaan" ? "10 Pertanyaan" : "12 Menit"}
                </p>
            </div>
        </div>
    );
};

export default Video_section;
