import Kategori_layout from "../layouts/Kategori_layout";
import Card from "../components/molecules/Card";
import { BookText, ChevronDown, ChevronLeft, ChevronRight, Clock, Search, ShoppingBag } from 'lucide-react';
import card_1 from "../assets/Card_images/card_1.jpg"
import card_2 from "../assets/Card_images/card_2.jpg"
import card_3 from "../assets/Card_images/card_3.jpg"
import card_4 from "../assets/Card_images/card_4.jpg"
import card_5 from "../assets/Card_images/card_5.jpg"
import card_6 from "../assets/Card_images/card_6.jpg"
import card_7 from "../assets/Card_images/card_7.jpg"
import card_8 from "../assets/Card_images/card_8.jpg"
import card_9 from "../assets/Card_images/card_9.jpg"
import tutor_1 from "../assets/Avatar_tutor/1.png"
import tutor_2 from "../assets/Avatar_tutor/2.png"
import tutor_3 from "../assets/Avatar_tutor/3.png"
import tutor_4 from "../assets/Avatar_tutor/4.png"
import tutor_5 from "../assets/Avatar_tutor/5.png"
import tutor_6 from "../assets/Avatar_tutor/6.png"
import tutor_7 from "../assets/Avatar_tutor/7.png"
import tutor_8 from "../assets/Avatar_tutor/8.png"

const Kategori = () => {
  return (
    <>
      <Kategori_layout>
        {/* Frame 1000003752 */}
        <div className="grid py-7 px-5 gap-6 relative top-16 mb-16
          sm:py-16 sm:px-30 sm:gap-9 sm:max-w-[1440px] sm:mx-auto">
          {/* Frame 1000003692 */}
          <div className="grid gap-2.5">
            <h1 className="font-semibold text-2xl leading-[110%] text-dark-primary sm:text-[32px]">Koleksi Video Pembelajaran Unggulan</h1>
            <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-secondary sm:text-base">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>
          {/* Frame 1000004503 */}
          <div className="grid gap-6 sm:flex sm:gap-10.5">
            {/* Desc & Button */}
            <div 
              className="
              grid gap-3 rounded-[10px] border border-other-border p-4 bg-other-primary
              sm:p-5 sm:gap-4 sm:justify-start sm:h-fit"
            >
              {/* Frame 1000004502 */}
              <div className="flex justify-between">
                <p className="font-semibold text-lg leading-[120%] text-dark-secondary">Filter</p>
                <button className="font-medium leading-[140%] tracking-[0.2px] text-error-default">Reset</button>
              </div>
              {/* Frame 1000003794 */}
              <div className="grid rounded-[10px] border border-other-border py-3 px-4 gap-4.5 bg-other-primary">
                {/* Frame 1000004500 */}
                <button className="flex gap-4 text-primary items-center justify-between">
                  <div className="flex gap-4 items-center font-medium">
                    <BookText size={24}/>
                    <p>Bidang Studi</p>
                  </div>
                  <ChevronDown />
                </button>
                {/* Frame 1000004501 */}
                <form className="hidden sm:grid gap-3 ">
                  <div className="flex gap-3 items-center p-1.5">
                    <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                    <label htmlFor="pemasaran" className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4">Pemasaran</label>
                  </div>
                  <div className="flex gap-3 items-center p-1.5">
                    <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                    <label htmlFor="digital_teknologi" className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4">Digital & Teknologi</label>
                  </div>
                  <div className="flex gap-3 items-center p-1.5">
                    <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                    <label htmlFor="pengembangan_diri" className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4">Pengembangan Diri</label>
                  </div>
                  <div className="flex gap-3 items-center p-1.5">
                    <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                    <label htmlFor="bisnis_manajemen" className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4">Bisnis Manajemen</label>
                  </div>
                </form>
              </div>
              {/* Frame 1000004500 */}
              <div className="grid rounded-[10px] border border-other-border py-3 px-4 gap-4.5 bg-other-primary">
                {/* Frame 1000004500 */}
                <button className="flex gap-4 text-primary items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <ShoppingBag />
                    <p>Harga</p>
                  </div>
                  <ChevronDown />
                </button>
                {/* Frame 1000004501 */}
                <form className="hidden sm:grid gap-3 ">
                  <div className="flex gap-3 items-center p-1.5">
                    <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                    <label htmlFor="pemasaran" className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4">Pemasaran</label>
                  </div>
                  <div className="flex gap-3 items-center p-1.5">
                    <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                    <label htmlFor="digital_teknologi" className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4">Digital & Teknologi</label>
                  </div>
                  <div className="flex gap-3 items-center p-1.5">
                    <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                    <label htmlFor="pengembangan_diri" className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4">Pengembangan Diri</label>
                  </div>
                  <div className="flex gap-3 items-center p-1.5">
                    <span className="size-4.5 rounded border border-primary bg-primary-100"></span>
                    <label htmlFor="bisnis_manajemen" className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4">Bisnis Manajemen</label>
                  </div>
                </form>
              </div>
              {/* Frame 1000004501 */}
              <div className="grid rounded-[10px] border border-other-border py-3 px-4 gap-4.5 bg-other-primary">
                {/* Frame 1000004500 */}
                <button className="flex gap-4 text-primary items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <Clock />
                    <p>Durasi</p>
                  </div>
                  <ChevronDown />
                </button>
                {/* Frame 1000004501 */}
                <form className="hidden sm:grid gap-3 ">
                  <div className="flex gap-3 items-center p-1.5">
                    <span className="size-4.5 rounded-full border border-primary bg-primary-100"></span>
                    <label htmlFor="pemasaran" className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4">Kurang dari 4 Jam</label>
                  </div>
                  <div className="flex gap-3 items-center p-1.5">
                    <span className="size-4.5 rounded-full border border-primary bg-primary-100"></span>
                    <label htmlFor="digital_teknologi" className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4">4 - 8 Jam</label>
                  </div>
                  <div className="flex gap-3 items-center p-1.5">
                    <span className="size-4.5 rounded-full border border-primary bg-primary-100"></span>
                    <label htmlFor="pengembangan_diri" className="leading-[140%] tracking-[0.2px] text-dark-secondary pr-4">Lebih dari 8 Jam</label>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Card Section */}
            <div className="grid gap-6 sm:gap-8">
            
              {/* Frame 1000004504 */}
              <div className="flex gap-4 justify-between sm:justify-end">
                <button className="grid h-12 px-3 rounded-[10px] border border-other-border bg-white text-dark-secondary">
                  <div className="flex items-center gap-2 py-3 pl-[5px]">
                    <p className="font-medium">Urutkan</p>
                    <ChevronDown />
                  </div>
                </button>
                <button className="grid h-12 px-3 rounded-[10px] border border-other-border bg-white text-dark-secondary sm:w-[220px]">
                  <div className="flex items-center gap-2 py-3 pl-[5px] sm:justify-between">
                    <p className="font-medium">Cari Kelas</p>
                    <Search />
                  </div>
                </button>
              </div>
              {/* Frame 1000004505 */}
              <div className="grid justify-start gap-5 sm:gap-y-8 sm:gap-x-6 sm:grid-cols-2">
                <Card image={card_1} tutor={tutor_1}/>
                <Card image={card_2} tutor={tutor_2}/>
                <Card image={card_3} tutor={tutor_3}/>
                <Card image={card_4} tutor={tutor_4}/>
                <Card image={card_5} tutor={tutor_5}/>
                <Card image={card_6} tutor={tutor_6}/>
                <Card image={card_7} tutor={tutor_7}/>
                <Card image={card_8} tutor={tutor_8}/>
                <Card image={card_9} tutor={tutor_3}/>
              </div>
              {/* Pagination/Page Nav */}
              <div className="flex justify-between items-center gap-1.5 sm:justify-end">
                {/* Frame 1000003871 */}
                <span className="grid rounded p-2 bg-other-base-background text-dark-primary">
                  <ChevronLeft size={24}/>
                </span>
                {/* Pagination 1 */}
                <span className="grid font-semibold text-sm leading-[140%] tracking-[0.2px] text-light-primary rounded p-2 bg-secondary size-10 place-content-center">1</span>
                {/* Pagination 2 */}
                <span className="grid font-semibold text-sm leading-[140%] tracking-[0.2px] text-dark-secondary rounded p-2 size-10 place-content-center">2</span>
                {/* Pagination 3 */}
                <span className="grid font-semibold text-sm leading-[140%] tracking-[0.2px] text-dark-secondary rounded p-2 size-10 place-content-center">3</span>
                {/* Pagination 4 */}
                <span className="grid font-semibold text-sm leading-[140%] tracking-[0.2px] text-dark-secondary rounded p-2 size-10 place-content-center">4</span>
                {/* Pagination 5 */}
                <span className="grid font-semibold text-sm leading-[140%] tracking-[0.2px] text-dark-secondary rounded p-2 size-10 place-content-center">5</span>
                {/* Frame 1000003872 */}
                <span className="grid rounded p-2 bg-other-base-background text-dark-primary">
                  <ChevronRight size={24}/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Kategori_layout>
    </>
  );
};

export default Kategori;
