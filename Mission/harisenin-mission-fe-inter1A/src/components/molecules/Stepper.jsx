import { useLocation } from "react-router";
import { Circle, CircleCheck } from "lucide-react";

const Stepper = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <div className="flex h-14 items-center">
            {/* Pilih metode */}
            <div className="flex items-center gap-[5px] pr-3">
                {/* Circle */}
                {currentPath === "/bayar" ? 
                    <CircleCheck color="#FFF" fill="#3ECF4C"/> :
                    <Circle color="#3ECF4C" fill="#3ECF4C" />
                }
                <p className={`font-bold text-xs leading-[140%] tracking-[0.2px] text-dark-primary
                    ${currentPath === "/bayar" ? "text-dark-secondary" : "text-dark-primary"}`}
                >
                    Pilih Metode
                </p>
            </div>
            {/* === */}
            <span className={`w-3.5 h-[3px] ${currentPath === "/bayar" ? "bg-primary" : "bg-dark-disabled"}`}></span>
            {/* Bayar */}
            <div className={`flex items-center gap-[5px] pr-3`}>
                {/* Circle */}
                <Circle
                    color={`${
                        currentPath === "/bayar" ? "#3ECF4C" : "#3A354161"
                    }`}
                    fill={`${
                        currentPath === "/bayar" ? "#3ECF4C" : "#3A354161"
                    }`}
                />
                <p
                    className={`font-bold text-xs leading-[140%] tracking-[0.2px] 
                    ${
                        currentPath === "/bayar"
                            ? "text-dark-primary"
                            : "text-dark-disabled"
                    }`}
                >
                    Bayar
                </p>
            </div>
            {/* === */}
            <span className="w-3.5 h-[3px] bg-dark-disabled"></span>
            {/* Selesai */}
            <div className="flex items-center gap-[5px] pr-3">
                {/* Circle */}
                <Circle color="#3A354161" fill="#3A354161" />
                <p className="font-bold text-xs leading-[140%] tracking-[0.2px] text-dark-disabled">
                    Selesai
                </p>
            </div>
        </div>
    );
};

export default Stepper;
