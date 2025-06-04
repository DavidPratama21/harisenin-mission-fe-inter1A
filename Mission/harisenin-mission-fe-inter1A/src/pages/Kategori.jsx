import Kategori_layout from "../layouts/Kategori_layout";
import { BookText, ChevronDown, Clock, ShoppingBag } from 'lucide-react';

const SemuaProduk = () => {
  return (
    <>
      <Kategori_layout>
        {/* Frame 1000003752 */}
        <div className="grid py-7 px-5 gap-6 relative top-16 mb-16">
          {/* Frame 1000003692 */}
          <div className="grid gap-2.5">
            <h1 className="font-semibold text-2xl leading-[110%] text-dark-primary">Koleksi Video Pembelajaran Unggulan</h1>
            <p className="text-sm leading-[140%] tracking-[0.2px] text-dark-secondary">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
          </div>
          {/* Frame 1000004503 */}
          <div className="grid gap-6">
            {/* Desc & Button */}
            <div className="grid w-f gap-3 rounded-[10px] border border-other-border p-4 bg-other-primary">
              {/* Frame 1000004502 */}
              <div className="flex justify-between">
                <p className="font-semibold text-lg leading-[120%] text-dark-secondary">Filter</p>
                <button className="font-medium leading-[140%] tracking-[0.2px] text-error-default">Reset</button>
              </div>
              {/* Frame 1000003794 */}
              <div className="grid rounded-[10px] border border-other-border py-3 px-4 gap-4.5 bg-other-primary">
                {/* Frame 1000004500 */}
                <button className="flex gap-4 text-primary items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <BookText />
                    <p>Bidang Studi</p>
                  </div>
                  <ChevronDown />
                </button>
                {/* Frame 1000004501 */}
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
              </div>
            </div>
            
            {/* Frame 1000004504 */}
            <div className="flex gap-4">
              <button className="grid h-12 px-3 rounded-[10px] border border-other-border bg-white">
                <div className="flex items-center gap-2 py-3 pl-[5px]">
                  <p>Urutkan</p>
                  <ChevronDown />
                </div>
              </button>
            </div>
            {/* Frame 1000004505 */}
            {/* Pagination/Page Nav */}
          </div>
        </div>
      </Kategori_layout>
    </>
  );
};

export default SemuaProduk;
