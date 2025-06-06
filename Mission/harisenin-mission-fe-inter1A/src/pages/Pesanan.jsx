import Pesanan_layout from "../layouts/Pesanan_layout";
import Tabs from "../components/molecules/Tabs_pesanan";
import Filter from "../components/molecules/Filter";
import Card_pesanan from "../components/molecules/Card_pesanan";
import Pagination from "../components/molecules/Pagination"
import { Album, ShoppingBag, User } from "lucide-react";
const Pesanan = () => {
    return (
        <Pesanan_layout>
            {/* Frame 3752 */}
            <div className="relative top-19.5 mb-16 grid py-7 px-5 gap-6 sm:py-16 sm:px-30 sm:gap-9 sm:flex sm:max-w-[1440px] sm:mx-auto">
                {/* Frame 4801 */}
                <div className="grid gap-6 h-fit">
                    {/* Frame 3692 */}
                    <div className="grid gap-2.5">
                        <p className="font-semibold text-xl leading-[120%] text-dark-primary">
                            Daftar Pesanan
                        </p>
                        <p className="leading-[140%] tracking-[0.2px] text-dark-secondary">
                            Informasi terperinci mengenai pembelian
                        </p>
                    </div>
                    {/* Frame 3880 */}
                    <div className="grid p-5 gap-2 border border-other-border bg-other-primary rounded-[10px] sm:p-6">
                        {/* 4427 */}
                        <div className="flex gap-3 p-3 rounded text-dark-disabled items-center">
                            <User fill="#3A354161" color="#3A354161" />
                            <p className="font-bold leading-[140%] tracking-[0.2px] text-lg">
                                Profile Saya
                            </p>
                        </div>
                        {/* 4426 */}
                        <div className="flex gap-3 p-3 rounded text-dark-disabled items-center">
                            <Album fill="#3A354161" color="#3A354161" />
                            <p className="font-bold leading-[140%] tracking-[0.2px] text-lg">
                                Kelas Saya
                            </p>
                        </div>
                        {/* 4428 */}
                        <div className="flex gap-3 p-3 rounded text-secondary items-center border border-secondary bg-secondary-100">
                            <ShoppingBag color="#FFBD3A" />
                            <p className="font-bold leading-[140%] tracking-[0.2px] text-lg">
                                Pesanan Saya
                            </p>
                        </div>
                    </div>
                </div>
                {/* Desc & Button */}
                <div className="grid gap-6 p-5 rounded-[10px] border border-other-border bg-other-primary sm:w-full">
                    {/* 4786 */}
                    <div className="grid gap-6 sm:flex">
                        <Tabs />
                        <Filter />
                    </div>
                    <Card_pesanan />
                    <Card_pesanan status="gagal"/>
                    <Card_pesanan status="belum"/>
                    <Card_pesanan/>
                    <Card_pesanan/>
                    <Pagination />
                </div>
            </div>
        </Pesanan_layout>
    );
};

export default Pesanan;
