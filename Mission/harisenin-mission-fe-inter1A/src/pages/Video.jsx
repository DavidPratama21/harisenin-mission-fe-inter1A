import Video_layout from "../layouts/Video_layout";
import tutor from "../assets/Avatar_tutor/7.png";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Star,
} from "lucide-react";
import Video_section from "../components/molecules/Video_section";

const Video = () => {
    return (
        <Video_layout>
            <div className="relative top-19.5 mb-19 grid ">
                {/* 4793 */}
                <div className="grid">
                    {/* video */}
                    {/* 4794 */}
                    <div className="grid p-5 gap-5">
                        <div className="grid gap-2.5">
                            <p className="text-lg font-semibold leading-[120%] text-dark-primary">
                                Pratikkan Skill dengan technical Book
                            </p>
                            <p className="leading-[140%] tracking-[0.2px] text-dark-secondary">
                                Pelajari dan pratikkan skill teknis dalam
                                berbagai industri dengan Technical Book
                                Riselearn
                            </p>
                        </div>
                        <div className="flex gap-2 items-center sm:gap-2.5">
                            {/* Foto Profile */}
                            <img
                                src={tutor}
                                alt="Profile Image"
                                className="h-9 aspect-square rounded-xl"
                            />
                            {/* Title */}
                            <div>
                                <p className="font-medium text-dark-primary leading-[140%] tracking-[0.2px] text-sm sm:text-base">
                                    Jenna Ortega
                                </p>
                                {/* Frame 1000004497 */}
                                <div className="flex gap-1 sm:text-sm">
                                    <p className="text-xs font-normal text-dark-secondary leading-[140%] tracking-[0.2px] sm:text-sm">
                                        Senior Accountant
                                    </p>
                                    <span className="hidden text-dark-secondary sm:inline">
                                        di
                                    </span>
                                    <span className="hidden font-bold text-dark-secondary sm:inline">
                                        Gojek
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Rating */}
                        <div className="flex gap-2">
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14.25"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                >
                                    <path
                                        d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                        fill="#FCE91B"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14.25"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                >
                                    <path
                                        d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                        fill="#FCE91B"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14.25"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                >
                                    <path
                                        d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                        fill="#FCE91B"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14.25"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                >
                                    <path
                                        d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                        fill="#3A3541"
                                        fillOpacity="0.12"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="14.25"
                                    viewBox="0 0 16 15"
                                    fill="none"
                                >
                                    <path
                                        d="M8 11.4525L12.635 14.25L11.405 8.9775L15.5 5.43L10.1075 4.9725L8 0L5.8925 4.9725L0.5 5.43L4.595 8.9775L3.365 14.25L8 11.4525Z"
                                        fill="#3A3541"
                                        fill-opacity="0.12"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-xs leading-[140%] tracking-[0.2px] underline text-dark-secondary sm:text-sm">
                                3.5 (86)
                            </p>
                        </div>
                    </div>
                </div>
                {/* Navigation */}
                <div className="flex px-3.5 py-4 bg-primary border border-other-border justify-between">
                    {/* Sebelumnya */}
                    <div className="flex gap-2.5 items-center text-light-primary">
                        <ChevronLeft />
                        <p className="font-bold text-sm leading-[140%] tracking-[0.2px]">
                            Sebelumnya
                        </p>
                    </div>
                    {/* Selanjutnya */}
                    <div className="flex gap-2.5 items-center text-light-primary">
                        <p className="font-bold text-sm leading-[140%] tracking-[0.2px]">
                            Selanjutnya
                        </p>
                        <ChevronRight />
                    </div>
                </div>
                {/* 4797 */}
                <div className="grid bg-other-primary border border-other-border">
                    <div className="flex pl-5 pt-6 pr-8.5 pb-5 bg-other-primary border border-other-border"></div>
                    {/* Desc & Button */}
                    <div className="grid gap-5 p-5 bg-other-primary">
                        {/* 4761 */}
                        <div className="grid gap-3">
                            <div className="flex justify-between items-center text-dark-secondary">
                                <p className="font-semibold leading-[120%] text-dark-primary">
                                    Introduction to HR
                                </p>
                                <ChevronUp />
                            </div>
                            <Video_section status="done" />
                            <Video_section status="progress" />
                            <Video_section status="belum" />
                            <Video_section status="belum" />
                            <Video_section status="belum" />
                            <Video_section status="belum" title="rangkuman" />
                            <Video_section
                                status="belum"
                                title="quiz"
                                desc="pertanyaan"
                            />
                        </div>
                        {/* 4762 */}
                        <div className="flex justify-between items-center text-dark-secondary">
                            <p className="font-semibold leading-[120%] text-dark-primary">
                                Introduction to HR
                            </p>
                            <ChevronDown />
                        </div>
                        {/* 4764 */}
                        <div className="flex justify-between items-center text-dark-secondary">
                            <p className="font-semibold leading-[120%] text-dark-primary">
                                Introduction to HR
                            </p>
                            <ChevronDown />
                        </div>
                    </div>
                    {/* 3103 */}
                    <div className="flex gap-2 px-9 py-4 border-t border-other-border bg-secondary text-light-primary">
                        <Star size={20} />
                        <p className="font-bold leading-[24px] tracking-[0.2px]">
                            Beri Review & Rating
                        </p>
                    </div>
                </div>
            </div>
        </Video_layout>
    );
};

export default Video;
