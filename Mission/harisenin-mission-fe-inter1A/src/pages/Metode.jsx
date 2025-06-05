import Metode_layout from "../layouts/Metode_layout";
import { Link } from "react-router";
import {
    BookCheck,
    FileText,
    FilePenLine,
    Video,
    FileBadge,
    Globe,
    Circle,
    ChevronDown,
    CircleCheck,
    ChevronUp,
    CirclePlay,
    Clock,
} from "lucide-react";
import Bca from "../assets/Banks/bca.png"
import Bni from "../assets/Banks/bni.png"
import Bri from "../assets/Banks/bri.png"
import Mandiri from "../assets/Banks/mandiri.png"
import Dana from "../assets/E-wallet/dana.png"
import Ovo from "../assets/E-wallet/ovo.png"
import Link_aja from "../assets/E-wallet/link_aja.png"
import Shopee_pay from "../assets/E-wallet/shopee_pay.png"
import Master from "../assets/Banks/master.png"
import Visa from "../assets/Banks/visa.png"
import Jcb from "../assets/Banks/jcb.png"

const Metode = () => {
    return (
        <Metode_layout>
            <div className="grid py-7 px-5 gap-6 relative top-16 mb-16">
                {/* Stepper */}
                <div className="flex h-14 items-center">
                    {/* Pilih metode */}
                    <div className="flex items-center gap-[5px] pr-3">
                        {/* Circle */}
                        <Circle color="#3ECF4C" fill="#3ECF4C" />
                        <p className="font-bold text-xs leading-[140%] tracking-[0.2px] text-dark-primary">
                            Pilih Metode
                        </p>
                    </div>
                    {/* === */}
                    <span className="w-3.5 h-[3px] bg-dark-disabled"></span>
                    {/* Bayar */}
                    <div className="flex items-center gap-[5px] pr-3">
                        {/* Circle */}
                        <Circle color="#3A354161" fill="#3A354161" />
                        <p className="font-bold text-xs leading-[140%] tracking-[0.2px] text-dark-disabled">
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
                {/* Desc & Button */}
                <div className="grid rounded-[10px] border border-other-border p-5 gap-5 bg-other-primary sm:order-1 sm:h-fit sm:p-6 sm:gap-6">
                    {/* Frame 1000004507 */}
                    <div className="grid gap-3 sm:gap-4">
                        <h2 className="font-semibold text-lg leading-[120%] text-dark-primary">
                            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
                        </h2>
                        {/* Frame 1000004502 */}
                        <div className="flex justify-between items-end">
                            {/* Frame 1000004505 */}
                            <div className="flex gap-2">
                                <p className="font-semibold text-lg leading-[120%] text-primary">
                                    Rp 250K
                                </p>
                                <p className="font-medium leading-[140%] tracking-[0.2px] text-dark-disabled line-through">
                                    Rp 500K
                                </p>
                            </div>
                            {/* Chip */}
                            <span className="rounded-[10px] px-2.5 py-1 bg-secondary text-xs leading-[140%] tracking-[0.2px] text-light-primary">
                                Diskon 50%
                            </span>
                        </div>
                        <p className="font-medium text-sm leading-[140%] tracking-[0.2px] text-info-default">
                            Penawaran spesial tersisa 2 hari lagi!
                        </p>
                    </div>
                    {/* Frame 1000004506 */}
                    <Link
                        to="/metode"
                        className="bg-primary text-center rounded-[10px] py-[7px] px-5.5 font-bold text-sm leading-[140%] tracking-[0.2px] text-light-primary
                                sm:text-base sm:py-2.5 sm:px-6.5"
                    >
                        Beli Sekarang
                    </Link>
                    {/* Frame 1000004765 */}
                    <div className="grid gap-3">
                        <p className="font-semibold text-sm leading-[21px] text-dark-primary">
                            Kelas Ini Sudah Termasuk
                        </p>
                        {/* Frame 1000004429 */}
                        <div className="flex gap-4 w-72">
                            {/* Card 1 */}
                            <div className="grid gap-4 w-35">
                                {/* Frame 21271 */}
                                <div className="flex gap-2 text-dark-secondary items-center">
                                    <BookCheck size={24} />
                                    <p className="text-sm leading-[140%] tracking-[0.2px]">
                                        Ujian Akhir
                                    </p>
                                </div>
                                {/* Frame 21272 */}
                                <div className="flex gap-2 text-dark-secondary items-center">
                                    <FileText size={24} />
                                    <p className="text-sm leading-[140%] tracking-[0.2px]">
                                        7 Dokumen
                                    </p>
                                </div>
                                {/* Frame 21267 */}
                                <div className="flex gap-2 text-dark-secondary items-center">
                                    <FilePenLine size={24} />
                                    <p className="text-sm leading-[140%] tracking-[0.2px]">
                                        Pretest
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="grid gap-4 w-35 h-fit">
                                {/* Frame 21273 */}
                                <div className="flex gap-2 text-dark-secondary items-center">
                                    <Video size={24} />
                                    <p className="text-sm leading-[140%] tracking-[0.2px]">
                                        49 Video
                                    </p>
                                </div>
                                {/* Frame 21275 */}
                                <div className="flex gap-2 text-dark-secondary items-center">
                                    <FileBadge size={24} />
                                    <p className="text-sm leading-[140%] tracking-[0.2px]">
                                        Sertifikat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Frame 1000004766 */}
                    <div className="grid gap-3">
                        <p className="font-semibold text-sm leading-[21px] text-dark-primary">
                            Bahasa Pengantar
                        </p>
                        {/* Frame 21275 */}
                        <div className="flex gap-2 text-dark-secondary items-center">
                            <Globe size={24} />
                            <p className="text-sm leading-[140%] tracking-[0.2px]">
                                Bahasa Indonesia
                            </p>
                        </div>
                    </div>
                </div>
                {/* Frame 4755 */}
                <div className="grid gap-6">
                    {/* Metode Pembayaran */}
                    <div className="grid gap-5 p-5 rounded-[10px] border border-other-border bg-other-primary">
                        <p className="font-semibold text-lg leading-[120%] text-dark-primary">Metode Pembayaran</p>
                        {/* Bank / E-wallet */}
                        <div className="grid gap-2.5">
                            <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                              <p className="text-dark-primary font-bold text-sm leading-[140%] tracking-[0.2px]">Transfer Bank</p>
                              <ChevronDown color="#333333AD"/>
                            </div>
                            {/* Banks */}
                            <div className="grid gap-2.5">
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img src={Bca} alt="" className="size-full aspect-square object-cover object-left" />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary">Bank BCA</p>
                                    </div>  
                                    <CircleCheck color="#fff" fill="#F64920" />
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img src={Bni} alt="" className="size-full aspect-square object-cover object-left" />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary">Bank BNI</p>
                                    </div>  
                                    {/* <CircleCheck color="#fff" fill="#F64920" /> */}
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img src={Bri} alt="" className="size-full aspect-square object-cover object-left" />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary">Bank BRI</p>
                                    </div>  
                                    {/* <CircleCheck color="#fff" fill="#F64920" /> */}
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img src={Mandiri} alt="" className="size-full aspect-square object-contain object-left" />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary">Bank Mandiri</p>
                                    </div>  
                                    {/* <CircleCheck color="#fff" fill="#F64920" /> */}
                                </div>
                            </div>
                            <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                              <p className="text-dark-primary font-bold text-sm leading-[140%] tracking-[0.2px]">E-Wallet</p>
                              <ChevronDown color="#333333AD"/>
                            </div>
                            {/* E-wallets */}
                            <div className="grid gap-2.5">
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img src={Dana} alt="" className="size-full aspect-square object-cover object-left" />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary">Dana</p>
                                    </div>  
                                    {/* <CircleCheck color="#fff" fill="#F64920" /> */}
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img src={Ovo} alt="" className="size-full aspect-square object-cover object-left" />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary">OVO</p>
                                    </div>  
                                    {/* <CircleCheck color="#fff" fill="#F64920" /> */}
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img src={Link_aja} alt="" className="size-full aspect-square object-cover object-left" />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary">LinkAja</p>
                                    </div>  
                                    {/* <CircleCheck color="#fff" fill="#F64920" /> */}
                                </div>
                                <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6">
                                            <img src={Shopee_pay} alt="" className="size-full aspect-square object-contain object-left" />
                                        </div>
                                        <p className="text-xs leading-[140%] tracking-[0.2px] text-dark-primary">Shopee Pay</p>
                                    </div>  
                                    {/* <CircleCheck color="#fff" fill="#F64920" /> */}
                                </div>
                            </div>
                            <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                              <p className="text-dark-primary font-bold text-sm leading-[140%] tracking-[0.2px]">Kartu Kredit/Debit</p>
                              <ChevronDown color="#333333AD"/>
                            </div>
                            <div className="flex justify-between py-4 px-5 border border-other-border rounded-[10px]">
                                <div className="flex items-center gap-3">
                                    <img src={Master} alt="" className="h-4" />
                                    <img src={Visa} alt="" className="h-4.5" />
                                    <img src={Jcb} alt="" className="h-4" />
                                </div>  
                                {/* <CircleCheck color="#fff" fill="#F64920" /> */}
                            </div>
                        </div>
                    </div>
                    {/* Ringkasan Pesanan */}
                    <div className="grid gap-5 p-5 rounded-[10px] border border-other-border bg-other-primary">
                      <p className="font-semibold text-lg leading-[120%] text-dark-primary">Ringkasan Pesanan</p>
                      {/* Frame 3884 */}
                      <div className="flex leading-[140%] tracking-[0.2px] text-dark-secondary">
                        <p>Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager. </p>
                        <p className="font-bold">Rp 767.500</p>
                      </div>
                      {/* Frame 3885 */}
                      <span></span>
                      {/* Frame 42250 */}
                      <button>Beli Sekarang</button>
                    </div>
                </div>
            </div>
        </Metode_layout>
    );
};

export default Metode;
